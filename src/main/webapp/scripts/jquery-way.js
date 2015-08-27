$(document).ready(function(){
    var userInput = $('#userInput');
    var display = $('#display');

    userInput.keyup(function(){
        display.text(userInput.val());
    });

});