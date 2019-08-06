/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// parseInt("12:00".split(":")[0])
// will return 12
  function greet(timeString){
    timeString = parseInt(timeString.split(":")[0])
    if (timeString <= 12) {
      return "Good Morning";
    } else if (timeString >= 17) {
      return "Good Evening";
    } else {
      return "Good Afternoon";
    }
  }
/* Write your implementation of displayMessage() */
function displayMessage(greeting){
  let greetHeading = document.getElementById('greeting')
  greetHeading.innerText = greeting
}
