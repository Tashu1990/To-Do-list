$("ul").on("click","li",function() {
	$(this).toggleClass("comp");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function () {
		$(this).remove();
	});
	event.stopPropagation();
});
 
$("input[type='text'").keypress(function(event){
	if(event.which ===13) {
		var texttodo= $(this).val();
		$(this).val("");
		$("ul").append("<li> <input type='checkbox'>" +"  "+texttodo+"<span><i class='glyphicon glyphicon-trash'></i><span></li>");
	}
});



