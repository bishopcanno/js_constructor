// Letter constructor that takes in the users input as an argument
function Letter(userChar) {
    // takes the users input and converts it to uppercase for consistancy
    this.userChar = userChar.toUpperCase();
    // sets the guess as false so that it automatically logs the *
    this.charGuessBool = false
    // the funtion that displays either a correct guess or a *
    this.charCheck = function() {
		if (this.charGuessBool) {
			console.log(this.userChar);
		}
		else {
			console.log ("*");
		}

	}
  }
//   exports Letter constructor to word and index
module.exports = Letter
