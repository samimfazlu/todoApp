/*//Check off specific todos by clicking 
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on x to delete todo 
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
 event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

$(".fa-plus").click(function(){
  $("input[type='text'").fadeToggle()
});
*/
//selecting list item
$("ul").on("click", "li", function(){

	//*/console.log($(this).css("color"));
	/*if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css("color", "black");
		$(this).css("textDecoration", "none");
	}else{
		$(this).css("color", "gray");
		$(this).css("textDecoration", "line-through");
	}*/
	$(this).toggleClass("completed");
});

//handeling delete task
$("ul").on("click","span", function(evt){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	evt.stopPropagation();

});

//handeling adding input
$('input[type="text"]').keypress(function(evt){
	//console.log("ypu are ressing keyboard key");
	//console.log(evt);
	if(evt.keyCode === 13){
		//console.log($(this).val());
		var todoText = $(this).val();
		$("ul").prepend("<li>" + "<span><i class=\"fa fa-trash\"></i></span>" + todoText +"</li>" );
		$(this).val("");
	}
});
//showing input
$(".fa-plus").click(function(){
	$('input[type="text"]').slideToggle(500);
});

/*$("ul").click(function(){
	console.log("you clicked inside ul");
});
$("container").click(function(){
	console.log("you clicked inside container");
});
$("body").click(function(){
	console.log("you clicked inside body");
});*/