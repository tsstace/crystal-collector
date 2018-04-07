# Crystal Collector Game:

This project allows the user to play a game with the browser; there are 4 crystal options, each with a different point value and the user must try to match a randomly generated number using a combination of crystal selections.

The browser is waiting for onClick events, generated when the user clicks on one of the four crystal images;

Ground rules:

* 4 options for user choice: buttons with point values from 1 to 12, randomly assigned, no dups 
* Random number generator returns goal amount; possible values range from 19 to 120
* 2 actors:  computer and user
* OnClick event on buttons triggers game play/tally increment
* gameplay continues until user matches or exceeds randomly generated number

  1. load page with randomly generated number and assign point values to each button
  2. wait for onClick event
  3. evaluate button selection, add point value to running tally
         if running tally matches randomly generated number
             increment win count and start over, generate new random number and reset button values
         else
             if running tally > randomly generated number
                 increment loss count and start over, generate new random number and reset button values
             else    
                 running tally < randomly generated number
                      wait for another button click
