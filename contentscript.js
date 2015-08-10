var openBlockList = function (blog) {
		$('document').ready( function () {
			$("#blocked_blogs > .accordion_trigger_wrapper > .accordion_trigger").click();
			block(blog);
		});
}

var block = function (blog) {
	$("#blocked_blogs > .accordion_content > .block-input > .text > #block").val(blog);
	setTimeout(function () {
		$("#blocked_blogs > .accordion_content > .block-input > .block-button").click();
	}, 2000);
}

var str = window.prompt("Please input comma separated list of users to be blocked","defaultText");
var str = str.replace(" ", "");

var arr = str.split(",");
alert (arr);

var activate = function () {
	console.log ("activate");
	openBlockList(arr[0]);

	var i = 1;
	var inter = setInterval (function () {
		console.log (i + " -- " + arr[i]);
		block(arr[i++]);
		if (i >= arr.length) {
			clearInterval(inter);
			console.log ("exit");
		}
	}, 5000);
}

activate ();
