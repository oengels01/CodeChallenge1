$(document).ready(function(){

var clickCount = 0;

$('.newBox').on('click', function(){
	console.log('Create new box!');
	var newBox = $('<div></div>');
	clickCount++;
	var newParagraph = $('<p></p>');
		newParagraph.text(clickCount);
	newBox.append(newParagraph); // <div><p>##</p></div>
	var swapBtn = $('<button class="btn-swap">Swap</button>');
	var delBtn = $('<button class="btn-del">Delete</button>');
	newBox.append(swapBtn).append(delBtn);
	$('.box-container').append(newBox);
});


	$('body').on('click', '.btn-del', function(){
		console.log('del button clicked');
		$(this).parent().remove();
	});
	$('body').on('click', '.btn-swap', function(){
		console.log('swap button clicked');
		$(this).parent().toggleClass('yellow');
	});
});

// $(document).ready(function() {
//   // $('.generate').append('<div class="swap-color"></div>');
//   // $('.generate').append('<div class="deletes-color"></div>');
//   makeCount();



        //   $('.generate').on("click","button", function() {
        //
        // numclicks +=1;
        // console.log(numClicks);
        // });

        //   $(".button-container").on("click", ".swap-color", function(){
        //     $('.generate').append('<div class="red"></div>');
        //     swapColor +=1;
        //     $(".button-container").text("swapColor:" + swapColor);
        //   // });
        //   // $(".button-container").on("click", ".delete-color", function(){
        //   //   $('.generate').append('<div class=""><yellow/div>');
        //   //   deleteColor  -=1;
        //   //   $(".button-container").text("deleteColor:" + Delete);
        //   // });

        // }

        // if(numClicks%3 === 0){
        //   appendNumber();
        // }
        // });
        //
        // $
