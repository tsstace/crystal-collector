  var crystals = $("#crystals");

    var crystalArray = [
      "crystal1",
      "crystal2",
      "crystal3",
      "crystal4"
    ]

    var crystalValues = [];
    var randomNumber;
    var targetNumber;
    var counter = 0;
    var lossCount = 0;
    var winCount = 0;

    function pushRandomNumber() {
      randomNumber = Math.floor(Math.random() * 12)
      if (crystalValues.indexOf(randomNumber) === -1) {
        crystalValues.push(randomNumber);
      }
      else {
        pushRandomNumber();
      }
    }

    function createCrystals() {
      for (var i = 0; i < 4; i++) {
        pushRandomNumber();
        $("#container").append(`
        <img src=${crystalArray[i]} value=${randomNumber} />
      `)

        // Need to grab the array value of the crystal selected so it can be referenced
        //    crystals.attr("data-crystalvalue", crystalValues[i]);
        crystals.attr("data-crystalvalue", crystalValues[i]);
      }
    }

    function getRandomInt(min, max) {
      targetNumber = Math.floor(Math.random() * 102) + 19;
      $("#number-to-guess").text(targetNumber);
    }

    function startGame() {
      createCrystals();
      getRandomInt();
    }

    startGame();

    $(document).on("click", "#crystal-images", function () {
      console.log(crystalValues);

//      Take the point value for the crystal selected and parse it so we can do math on it
//      var crystalValue = ($(this).attr("data-crystalvalue"));
//      crystalValue = parseInt(crystalArray[i]);
//      console.log(crystalValue);

      counter += crystalValues;
      $("#counter").text(counter);

      if (counter === targetNumber) {
        alert("You win!");
        winCount++;
        $("#user-wins").text(winCount);
      }

      else if (counter >= targetNumber) {
        alert("You lose!!");
        lossCount++;
        $("#user-losses").text(lossCount);
        startGame();
      }

    });