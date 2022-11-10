//FOR FUTURE REFERENCE WHEN I DO THE BRANCH
//"modal1" and "modal2"

let modal1_fullDisplay = document.getElementById("modal1_fullDisplay");
let modal1_displayImg = document.getElementById("modal1_displayImg");
let modal2_fullDisplay = document.getElementById("modal2_fullDisplay");
let modal2_displayImg = document.getElementById("modal2_displayImg");

//MODAL 1 CODE

//Open full view, set values for what's about to display
function openModal1(pic) {
  modal1_fullDisplay.style.display = "flex"; //Sets to appear
  modal1_displayImg.src = pic; //Sets the desired image
}

//MODAL 2 CODE

//Open full view, set values for what's about to display
function openModal2(pic) {
  //Closes first modal assuming it's open
  modal1_fullDisplay.style.display = "none";
  modal1_displayImg.src = null;

  modal2_fullDisplay.style.display = "flex"; //Sets to appear
  modal2_displayImg.src = pic; //Sets the desired image
}

//Close full view with Escape Key
document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    modal2_fullDisplay.style.display = "none";
  }
});

//FOR BOTH MODALS

//Close full view by clicking outside of img.
window.onclick = function (event) {
  if (event.target == modal1_fullDisplay) {
    modal1_fullDisplay.style.display = "none";
  }
  if (event.target == modal2_fullDisplay) {
    modal2_fullDisplay.style.display = "none";
  }
};

//Close full view with Escape Key
document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    modal1_fullDisplay.style.display = "none";
    //For some reason this works for modal2 still
  }
});
