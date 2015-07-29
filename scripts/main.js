var myImage = document.querySelector("img");

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/BradPitt.jpg') {
        myImage.setAttribute ('src','images/BradPitt1.jpg');
        } else {
        myImage.setAttribute ('src','images/BradPitt.jpg');
        }

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector("h1");

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem("name",myName);
	myHeading.innerHTML = "Brad Pitt loves you,"+ myName;
}

if(!localStorage.getItem("name")){
	setUserName();
}else{
	var storedName =  localStorage.getItem('name');
	myHeading.innerHTML = "Brad Pitt loves you,"+storedName;
}

myButton.onclick = function(){
	setUserName();
}
