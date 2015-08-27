$(document).ready(function(){
    $('#userInput').keyup(function(){
        var input = $('#userInput').val();
        $('#display').text(input);
    });

});