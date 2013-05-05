//=require jquery-ui-1.10.1.custom

$(document).ready(function(){
	var screens = [
		"1 start.png",
		"2 type in watch.png",
		"3 type in whitespace.png",
		"4 type in identity.png",
		"5 hover over watch.png",
		"6 adjust the importance of watch.png",
		"7 after adjust the importance of watch.png",
		"8 type in payment.png",
		"9 type in divider.png",
		"10 after type in payment and divider.png",
		"11 type in wallet.png",
		"12 add wallet.png",
		"13 after add wallet.png",
		"14 search.png",
		"15 select payment group.png",
		"16 delete payment group.png",
		"17 after delete payment group.png",
	];

	var index = 0;
	for(var i = 0; i < screens.length; i++){
		var $img = $('<img class="thumb" id="' + i + '" src="/assets/yanstein/' + screens[i] + '"/>');
		$("div.side-bar").append($img);
		$img.click(function(){
			$("#" + index).removeClass("selected");
			index = parseInt($(this).attr("id"));
			$("#" + index).addClass("selected");
			$("div.screen").html('<img src="/assets/yanstein/' + screens[index] + '"/>');
		});
	}
	$("#" + index).addClass("selected");
	$("div.screen").html('<img src="/assets/yanstein/' + screens[index] + '"/>');
	$(document).keydown(function(e){
		$("div.tip").hide();
		if(e.which == "66"){
			if(index > 0){
				$("#" + index).removeClass("selected");
				index -= 1;
				$("#" + index).addClass("selected").get(0).scrollIntoView(true);
				$("div.screen").html('<img src="/assets/yanstein/' + screens[index] + '"/>');
			}else{
				alert("Reached the beginning");
			}
		}else if(e.which == "78"){
			if(index < screens.length - 1){
				$("#" + index).removeClass("selected");
				index += 1;
				$("#" + index).addClass("selected").get(0).scrollIntoView(true);
				$("div.screen").html('<img src="/assets/yanstein/' + screens[index] + '"/>');
			}else{
				alert("Reached the end");
			}
		}else if(e.ctrlKey){
			if($("div.side-bar").css("display") == "none"){
				$("div.side-bar").show("slide", {direction: "left", complete: function(){
					$("#" + index).get(0).scrollIntoView(true);
				}});
			}else{
				$("div.side-bar").hide("slide", {direction: "left"});
			}
		}
	});
});