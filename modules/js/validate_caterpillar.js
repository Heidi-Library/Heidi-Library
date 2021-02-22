function validateCaterpillar() {
  var x = document.getElementById("caterpillarAns").value;
  var y = x.toLowerCase();
  if (y.includes("12") || y.includes("twelve")) {
    document.getElementById("caterpillar-yes").style.display = "block";
  }
  else {
    wrongTruth();
  }
}

// SHOW ERROR AND CALL HIDING FUNCTIONS

function wrongTruth() {
    document.getElementById("caterpillar-wrong-ans").style.display = "block";
    wrongCakeAnswer = setTimeout(hideCaterpillar, 1000);
    }

// HIDING FUNCTIONS

function hideCaterpillar() {
  document.getElementById("caterpillar-wrong-ans").style.display = "none";
}
