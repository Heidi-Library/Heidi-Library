function validateGardeners() {
  var x = document.getElementById("gardenersAns").value;
  if ((x =="West") || (x =="WEST") || (x =="west")) {
    document.getElementById("gardeners-yes").style.display = "block";
  }
  else {
    wrongGardeners();
  }
}

// SHOW ERROR AND CALL HIDING FUNCTIONS

function wrongGardeners() {
    document.getElementById("gardeners-wrong-ans").style.display = "block";
    wrongGardenersAnswer = setTimeout(hideGardeners, 1000);
    }

// HIDING FUNCTIONS

function hideGardeners() {
  document.getElementById("gardeners-wrong-ans").style.display = "none";
}
