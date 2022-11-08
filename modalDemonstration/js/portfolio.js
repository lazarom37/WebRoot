let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");

//Open full view, set values for what's about to display
function openFullImg(pic){
    fullImgBox.style.display = "flex";  //Sets to appear
    fullImg.src = pic;  //Sets the desired image
}

//Close full view with Escape Key
document.addEventListener("keyup", function(event) {
  if (event.key === 'Escape') {
    fullImgBox.style.display = "none";
  }
});

//Close full view by clicking outside of img
window.onclick = function(event) {
    if (event.target == fullImgBox) {
      fullImgBox.style.display = "none";
    }
  }

//IDEAS: Make a "next" and "before" button upon fullscreen view
//