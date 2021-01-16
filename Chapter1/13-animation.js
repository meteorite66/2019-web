var header = document.getElementById('header');
var degree = 0;

function rotateHeader() {
    degree = (degree + 6) % 360; 
    
    if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
        header.className='face'
    } else {
        header.className='back'
    }

    header.style.transform = `rotateX(${degree}deg)`;

    console.log(degree);
}

setInterval(rotateHeader, 20);
