//define functions here

function getIt() {
  // bind a click event to p tag, when clicked it alerts "Hey!"
  $('p').on("click", function() {
    alert ("Hey!");
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
