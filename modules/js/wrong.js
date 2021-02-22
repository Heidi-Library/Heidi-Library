var wrongCakeAnswer;

// SHOW ERROR AND CALL HIDING FUNCTIONS

function wrongCake() {
  document.getElementById("cake-wrong-ans").style.display = "block";
  wrongCakeAnswer = setTimeout(hideCake, 1000);
  }

  
function wrongCat() {
    document.getElementById("cat-wrong-ans").style.display = "block";
    wrongCatAnswer = setTimeout(hideCat, 1000);
    }

function wrongLion() {
    document.getElementById("lion-wrong-ans").style.display = "block";
    wrongLionAnswer = setTimeout(hideLion, 1000);
    }

  function wrongTruth() {
    document.getElementById("truth-wrong-ans").style.display = "block";
      wrongTruthAnswer = setTimeout(hideTruth, 1000);
      }
  // HIDING FUNCTIONS

  function hideCake() {
    document.getElementById("cake-wrong-ans").style.display = "none";
  }

function hideCat() {
    document.getElementById("cat-wrong-ans").style.display = "none";
  }  


function hideLion() {
    document.getElementById("lion-wrong-ans").style.display = "none";
  }

  function hideTruth() {
    document.getElementById("truth-wrong-ans").style.display = "none";
  }
