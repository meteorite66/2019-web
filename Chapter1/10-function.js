let myBirthTime = new Date(1993, 02, 10, 12, 10);

function updateParagraph() {
    let now = new Date();
    let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
    document.getElementById('birth-time').innerText = seconds + '秒が生まれてから経過';
}

setInterval(updateParagraph, 1000)