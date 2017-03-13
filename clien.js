
var numClick = 0;
var swapColor = 0;
var deleteColor = 0;


$(document).ready(function() {
  $('.generate').append('<div class="swap-color"></div>');
  $('.generate').append('<div class="deletes-color"></div>');


  $('.generate').on("click","button", function() {

numclicks +=1;
console.log(numClicks);
});

  $(".button-container").on("click", ".swap-color", function(){
    $('.generate').append('<div class="red"></div>');
    swapColor +=1;
    $(".button-container").text("swapColor:" + swapColor);
  });
  $(".button-container").on("click", ".delete-color", function(){
    $('.generate').append('<div class=""><yellow/div>');
    deleteColor  -=1;
    $(".button-container").text("deleteColor:" + Delete);
  });
});
}

if(numClicks%3 === 0){
  appendNumber();
}
});

$
