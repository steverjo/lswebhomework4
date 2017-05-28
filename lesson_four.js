function webhw4() {
  document.body.style.backgroundColor = "red";

  document.getElementById("aboutMe").style.backgroundColor = "blue";
  document.body.style.fontFamily = "sans-serif";

  document.getElementById("nickname").innerHTML = "Stevie";
  document.getElementById("favorites").innerHTML = "Cold weather";
  document.getElementById("hometown").innerHTML = "Muncie, IN";

/* Extra Credit for loop */
  var x = document.getElementsByTagName("li");
  for(i = 0; i < x.length; i++) {
    x[i].className = "listitem";
    document.getElementsByClassName("listitem")[i].style.color = "red";
  };
};
/* Extra Credit Image */
var z = document.createElement('img');
function myPhoto() {
  z.src = "me.jpg";
  document.body.appendChild(z);
  z.style.display = "block";
  z.style.width = "50%";
};
function myPhotoGone() {
  z.style.display = "none";
};
