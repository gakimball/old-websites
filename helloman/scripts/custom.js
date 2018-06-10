$(document).ready(function(){
$("ELEMENT HERE").fadeTo("slow", 0.3);
$("ELEMENT HERE").hover(function(){
$(this).fadeTo("slow", 1.0);
},function(){
$(this).fadeTo("slow", 0.3);
});
});