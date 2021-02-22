function validateTeaParty() {

  var x = document.getElementById("teaPartyAns").value;
  var y = x.toLowerCase();
  if (y.includes("cardio")) {
    document.getElementById("tea-party-yes").style.display = "block";
  }
  else {
    wrongTea();
  }
}

// SHOW ERROR AND CALL HIDING FUNCTIONS

function wrongTea() {
    document.getElementById("tea-wrong-ans").style.display = "block";
    wrongTeaAnswer = setTimeout(hideTea, 1000);
    }

// HIDING FUNCTIONS

function hideTea() {
  document.getElementById("tea-wrong-ans").style.display = "none";
}
