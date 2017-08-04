var element = document.getElementById('cropper');
var cropper = new Croppie(element, croppieOptions);

function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            cropper.bind({
                url: e.target.result
            });
        }
        reader.readAsDataURL(input.files[0]);
    }
}

var photoInput = document.getElementById('id_photo_0');
photoInput.addEventListener('change', function() {
    readFile(this);
});

element.addEventListener('update', function(cr) {
    var data = cropper.get();
    var baseSelector = 'id_photo_';
    var pointInput = null;
    for (var i = 1; i <= 4; i++) {
        pointInput = document.getElementById(baseSelector + i)
        pointInput.value = data.points[i-1];
    }
});
