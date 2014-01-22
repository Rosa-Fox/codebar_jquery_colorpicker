/* Exercise 2: Color picker */
function setPreviewColor(color){
	//look for something with class of .preview, find in css, pass in color
	$(".preview").css("background-color", color);
	//get the div...set a function to it
	$(".color-code").text(color)
}

function addBox(color) {
	//created new HTML and passed in the value of the color parameter
  $("#colors").prepend("<div class='item' style='background-color: " + color + ";'><div>");
}

//create an array of colors
var colors = [ "22ac5e", "d68236", "E80C7A", "1119FF", "C90DFF", "116BFF", "57DCFF", "FF991E", "FF3822", "6FFF2B"]

//We can iterate through the array using JQuery's each() function.
//Iterate through the colors array in $(document).ready() 
//and call addBox(color) to create color boxes for each of the colors.

//this is so that the functions are not called until the document has fully loaded 
$(document).ready(function() {

//each is like a forloop that is built into jquery
$.each(colors, function(index, element) {

	addBox(element);
  
});

//random position is a variable storing a number which will be between 0-1 (thanks to math.floor).
//Math.random will be between 0 - 1 * colors.length which is the number of items in the array.
random_position = Math.floor( Math.random() * colors.length );

//call our setPreviewColor function using the value of the colours that is at that random position in the array. This will give us a random color when load the page
setPreviewColor(colors[random_position])

 $(document).on('keyup keydown keypress', '#color', function() {
 //make function.. use $ to select the value of the input box (called color!)
   setPreviewColor($("#color").val());

 });

 $(document).on('click', '#add-to-favorite', function() {
//if there are more than 16 colors added to the favorites list, the oldest color will be knocked off and new color added
 	console.log($("#colors .item").length);
 	
 	if ($("#colors .item").length >= 16){

 		$("#colors .item").last().remove();

 		addBox($("#color").val());

 	}
 	else{
 		
 		addBox($("#color").val());
 	}

$('#color').val("");

//up to here!!! 

//var previewColor = $(".preview").css("background-color");

 			
});

});


//he click event and check that the length of $("#colors .item") is equal than 16. If it's not, remove the last element.

//This way, when the list is full, we remove a box and add another one.









 //Extend previewColor() to also set the value of .color-code to the background-color of the .preview div.
 // As the color code is converted to rgb when set, that is the value the we will be displaying.

 //Use text() to set the value. You can use html() for html content.

 //text() and value() already built in 


 //Retrieve the color from the input field and add a box to the start 
 //of the #colors div every time the Add to favorites button is pressed, by handling the click event.