
let startTime = 0;
let stopTime = 0;

let counter = {
    number: 0,
    print: ()=> {
        counter.number++;
        console.log(counter.number);
    }
}


let displayArea = document.getElementById('display-area');

function start() { 
    startTime = Date.now()
    // document.body.onkeypress = stop;
    document.body.onkeypress = counter.print;
}

function stop() {
    stopTime = Date.now();
    check();
}

function check() { 
    let resultTime = (stopTime-startTime ) / 1000;

    if ( Math.abs(resultTime - 3) <= 0.5) {        
        displayArea.innerText = "success " + resultTime
    } else {
        displayArea.innerText = "failed " + resultTime
    }

}

if (confirm('10s count start? (press any key in press-OK after 10s)')) {
    start();
}

//1 