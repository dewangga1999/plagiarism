var widgetHtml = '<iframe src="https://www.prepostseo.com/widget/plagiarismchecker" style="border:0;width:100%;min-height:600px;height:100%;"></iframe>';
var widgetTag = document.getElementById("ppsLink");
if (widgetTag === null){ 
	widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p><a href="https://www.wibunolife.com/2018/11/plagiarism-checker.html" target="_blank" style="color:#000;" id="ppsLink">Plagiarism checker</a> provided by <a href="https://www.wibunolife.com/" target="_blank"  style="color:#000;">wibunolife.com</a></p></div>';
	
} else {
	var linkUrl = widgetTag.getAttribute("href");	
	if(linkUrl !== 'https://www.prepostseo.com/plagiarism-checker'){
		widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p><a href="https://www.wibunolife.com/2018/11/plagiarism-checker.html" target="_blank" style="color:#000;" id="ppsLink">Plagiarism checker</a> provided by <a href="https://www.wibunolife.com/" target="_blank"  style="color:#000;">wibunolife.com</a></p></div>';
	}
}

var isNew = document.getElementById("ppsWidgetCode");
if(isNew === null){
	document.write('<iframe src="https://www.prepostseo.com/widget/plagiarismchecker" style="border:0;width:100%;min-height:520px;height:100%;"></iframe>');
} else {
	document.getElementById("ppsWidgetCode").innerHTML = widgetHtml;
}
