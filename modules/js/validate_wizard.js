function validateWizard() {
  var x = document.getElementById("wizardAns").value;
  if ((x =="rbsc1") || (x =="RBSC1") || (x =="Rbsc1")) {
    document.getElementById("wizard-yes").style.display = "block";
  }
  else {
    wrongWizard();
  }
}

// SHOW ERROR AND CALL HIDING FUNCTIONS

function wrongWizard() {
    document.getElementById("wizard-wrong-ans").style.display = "block";
    wrongWizardAnswer = setTimeout(hideWizard, 1000);
    }

// HIDING FUNCTIONS

function hideWizard() {
  document.getElementById("wizard-wrong-ans").style.display = "none";
}
