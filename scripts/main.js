let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'media/firefox-icon.png') {
      myImage.setAttribute('src','media/portrait.png');
    } else {
      myImage.setAttribute('src','media/firefox-icon.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('What is your name?');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Harry Potter is cool, ' + myName + ' ,you know?';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Harry Potter is cool, ' + storedName + ' ,you know?';
}
myButton.onclick = function() {
  setUserName();
}
let myButton2 = document.querySelector('button')


