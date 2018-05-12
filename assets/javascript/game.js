  var crystals = $("#crystals");

  var crystalArray = [
    "assets/images/citrine-3201605__480.jpg",
    "assets/images/precious-stone-3259727__480.jpg",
    "assets/images/colored-glass-3092416__480.jpg",
    "assets/images/rock-crystal-1603480__480.jpg"
  ]

  var crystalValues = [];
  var randomNumber;
  var targetNumber;
  var counter = 0;
  var lossCount = 0;
  var winCount = 0;
  var storeCrystalValue = '  ';

  function pushRandomNumber() {
    randomNumber = Math.floor(Math.random() * (12 - 1) + 1);
    if (crystalValues.indexOf(randomNumber) === -1) {
      crystalValues.push(randomNumber);
    } else {
      pushRandomNumber();
    }
  }

  function createCrystals() {
    $("#crystal-images").html("");
    for (var i = 0; i < 4; i++) {
      pushRandomNumber();

      $("#crystal-images").append(`
        <img id="crystal${i+1}" class="crystal" src=${crystalArray[i]} value=${randomNumber} />
      `)
    }
  }

  function getRandomInt(min, max) {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#number-to-guess").text(targetNumber);
  }

  function startGame() {
    counter = 0;
    $("#counter").text(counter);
    createCrystals();
    getRandomInt();
  }

  startGame();

  $(document).on("click", ".crystal", function () {

    var value = parseInt($(this).attr("value"));

    counter += value;
    console.log(counter);
    $("#counter").text(counter);


    //      Take the point value for the crystal selected and parse it so we can do math on it
    //      var crystalValue = ($(this).attr("data-crystalvalue"));
    //      crystalValue = parseInt(crystalArray[i]);
    //      console.log(crystalValue);

    // counter += crystalValues;
    // $("#counter").text(counter);

    if (counter === targetNumber) {
      alert("You win!");
      winCount++;
      $("#user-wins").text(winCount);
      startGame();
    } else if (counter > targetNumber) {
      alert("You lose!!");
      lossCount++;
      $("#user-losses").text(lossCount);
      startGame();
    }

  });