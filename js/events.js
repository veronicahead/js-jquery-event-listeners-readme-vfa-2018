//define functions here

function getIt() {
  // bind a click event to p tag, when clicked it alerts "Hey!"
  $('p').on("click", function() {
    alert ("Hey!");
  })
}

function frameIt() {
  //bind the load event that adds the class tasty to the image
  $('img').on("load", function() {
    
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
