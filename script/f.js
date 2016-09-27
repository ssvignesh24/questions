
var answers = [], 
	marks = 0, 
	total = 0, 
	correct = "Andromeda,Sun,Venus,Helix Nebula,Sagittarius A*".split(",");
$(document).ready(function(){

	// Validate name and start quiz
	$("#go").click(function(){
		name = $(".name").val();
		if(name == "" || name == undefined){
			$name_element = $(".name").clone(true);
			$(".name").before($name_element);
			$(".name:last").remove();
			$name_element.css("animation","he").css("animation","error 0.75s").css("border-color","red");
		}else{
			$(".result-head span").html($(".name").val());
			$("#question_0").removeClass("current").addClass("past");
			$("#question_1").addClass("current");
			$(".name").css("border-color","#000")
		}
	});

	// Control transition and scores
	$('.option').mouseup(function (event) {
		given = ($(this).children("span").text());
    	card = $(this).parent().parent().parent();
    	question = +($(card).attr("data-question"));
    	question++;
    	$(".question-card").removeClass("current")
    	$(card).addClass("past");
    	$("#question_" + question).addClass("current");
    	if(given != correct[question-2]){
    		string = given + " <span>(Answer: " + correct[question-2] + ")</span>"
    		$($("#question_6 .answer")[(question-2)]).addClass("wrong").html(string);
    	}else{
    		marks += 20;
    		total++;
    		$($("#question_6 .answer")[(question-2)]).html(given);
    	}
    	if(question == 6){
			window.setTimeout(function(){
				if(total == 0)
					$(".bar .correct").css("padding","0");
				else
					$(".bar .correct").css("width", marks + "%").html(total + " of 5");
			},500);
		}
	});

	// Manage repple effect
	$('.option').mousedown(function (event) {
		var ripple = document.createElement("div");
		offSet = $(this).offset();
      	x = event.pageX - offSet.left;
      	y = event.pageY - offSet.top;
		$(ripple).addClass("ripple").css({
          top: y - 15,
          left: x - 15
        });
     	$(this).append(ripple);
		window.setTimeout(function(){
			ripple.remove();
		}, 1500);
	});

});
