document.body.style.backgroundColor = "red";
document.getElementById("aboutMe").style.backgroundColor = "blue";
document.body.style.fontFamily = "sans-serif";

document.getElementById("nickname").innerHTML = "Stevie";
document.getElementById("favorites").innerHTML = "Cold weather";
document.getElementById("hometown").innerHTML = "Muncie, In";

/* Extra Credit for loop */
var x = document.getElementsByTagName('li');
for(i = 0; i < x.length; i++) {
  x[i].className = "listitem";
  document.getElementsByClassName('listitem')[i].style.color = "red";
}

/* Extra Credit Image */
function myPhoto() {
  document.getElementById("me").src = "me.jpg";
  document.getElementById('me').style.display = "block";
  document.getElementById('me').style.margin = "0 auto";
}
function myPhotoGone() {
  document.getElementById('me').style.display = "none";
}
