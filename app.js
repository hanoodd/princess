var final = document.getElementById('final');
var intro = document.getElementById("intro");
var image1 = document.getElementById("image1");


intro.addEventListener('click', () => {
  intro.style.display = "none";
  image1.style.display = ("block");
  final.play();
})

final.addEventListener('timeupdate', (event) => {
  if(final.currentTime > 0) {
    document.getElementById("image1").src="1.jpg";
  }
  if(final.currentTime > 22) {
    document.getElementById("image1").src="2.jpg";
  }
  if(final.currentTime > 46.5) {
    document.getElementById("image1").src="3.jpg";
  }
  if(final.currentTime > 56) {
    document.getElementById("image1").src="4.jpg";
  }
  if(final.currentTime > 59) {
    document.getElementById("image1").src="5.jpg";
  }
  if(final.currentTime > 87) {
    document.getElementById("image1").src="6.jpg";
  }
  if(final.currentTime > 101) {
    document.getElementById("image1").src="7.jpg";
  }
  if(final.currentTime > 128) {
    document.getElementById("image1").src="8.jpg";
  }
  if(final.currentTime > 138) {
    document.getElementById("image1").src="9.jpg";
  }
  if(final.currentTime > 152) {
    document.getElementById("image1").src="10.jpg";
  }
  if(final.currentTime >= 168.6) {
    document.getElementById("image1").src="11.gif";
  }
})
