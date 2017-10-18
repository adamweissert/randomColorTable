var color = '#'+Math.random().toString(16).substr(-6);
var td = $('<td>').css("background-color", '#'+Math.random().toString(16).substr(-6));
$('td').click(function(){
         $(this).css("background-color", '#'+Math.random().toString(16).substr(-6));
});