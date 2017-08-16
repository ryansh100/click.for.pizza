var getRotationPosition = function() {
    var pie = document.getElementById('pizza-pie');
    var rotation = pie.style.transform || 0;
    
    var nums = (rotation + '').replace(/[^0-9.]/g,'');
    var deg = parseInt(nums);

    return deg;
}

var rotatePie = function() {
    var pie = document.getElementById('pizza-pie');

    var deg = getRotationPosition();

    deg += 3;

    if (deg == 360) {
        deg = 0;
    }

    pie.style.transform = 'rotate(' + deg + 'deg)';
}

matrixToDegrees = function (matrix) {
    var values = matrix.split('(')[1],
        values = values.split(')')[0],
        values = values.split(',');

    var sin = values[1]; // 0.5

    return Math.round(Math.asin(sin) * (180/Math.PI));
}

var queryPizzaData = function() {
    var slices = document.querySelectorAll('.pizza');
    var deg = 0;
    var types = new Map();

    for (var i = 0; i < slices.length; i++ ) {
        var slice = slices[i];
        deg += 45;
        if (deg == 360) {
            deg = 0;
        }

        types.set(slice.id, {
            min: deg,
            max: deg + 45
        });
    }

    return types;
}

var addToPlate = function (sliceType) {
    var selection = document.createElement('div');
    selection.classList.add('click')
    var slice = document.getElementById(sliceType);

    var template = `
        <div class='thumbnail'></div>
        <div class='type'>You received ${sliceType} pizza!</div>
    `;

    selection.innerHTML = template;

    var image = slice.querySelector('img').cloneNode();
    image.style.width = "2em";
    selection.querySelector('.thumbnail').appendChild(image);

    var plate = document.getElementById('pizza-plate');
    plate.innerHTML = '';

    plate.appendChild(selection);
}

var clickHandler = function() {
    var deg = getRotationPosition();
    var sliceTypes = queryPizzaData();

    for (var type of sliceTypes) {
        var name = type[0];
        var bounds = type[1];

        if(deg >= bounds.min && deg <= bounds.max) {
            addToPlate(name);
        }
    }
}

var run = function() {
    document.getElementById('action-button').addEventListener('click', clickHandler);

    var running = setInterval(rotatePie, 33);
}



window.onload = run;