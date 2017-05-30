function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
	 x= x.style.color="blue";
}

function boldElement() {
	document.execCommand('bold', false, null);
}
function deleteElement() {
	document.execCommand('delete', false, null);
}
function italicElement() {
	document.execCommand('italic', false, null);
}
function changeHigh() {
	document.execCommand('fontSize', false, "7");
}
function changeDownHigh() {
	document.execCommand('fontSize', false, "5");
}
function changeFont() {
	document.execCommand('fontName', false, "Tahoma");
}




