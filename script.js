// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Options
const showAmPm = true

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add Zeroes
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '' ) + n;
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hours = today.getHours();

    if (hours >= 5 &&hours < 12) {
        // Morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/2nKXxF2/kazbegimorning.jpg')";
        greeting.textContent = 'good morning,';
        document.body.style.color = 'black';
    } else if (hours >= 12 &&hours < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/SJJWKmq/kazbegiafternoon.jpg')";
        greeting.textContent = 'good afternoon,';
        document.body.style.color = 'black';
    } else if (hours >= 18 &&hours < 22) {
        // Evening
        document.body.style.backgroundImage = "url('https://i.ibb.co/qgTRQpw/kazbegievening.jpg')";
        greeting.textContent = 'good evening,';
        document.body.style.color = 'antiquewhite';
    } else {
        // Night
        document.body.style.backgroundImage = "url('https://i.ibb.co/5s59kPG/kazbeginight.jpg')";
        greeting.textContent = 'good night,';
        document.body.style.color = 'antiquewhite';
    }
}

// Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if(e.type === 'keypress') {
     // Make sure enter is pressed
     if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
     }
    } else {
    localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
     // Make sure enter is pressed
     if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        name.blur();
     }
    } else {
    localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
