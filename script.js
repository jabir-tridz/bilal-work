function getInputValue(){
	var a = parseFloat(document.getElementById('n1').value);
	var b = parseFloat(document.getElementById('n2').value);
	var c = parseFloat(a/b);
	document.getElementById('n3').value = c;
	var n4 = parseFloat(document.getElementById('n4').value);
	if(n4 == 0){
		document.getElementById('n5').value = c;
		var n6 = parseFloat(document.getElementById('n6').value);
		var e = parseFloat(c/n6);
		document.getElementById('n7').value = e;
	}
	else{
		var d = parseFloat(c/n4);
		document.getElementById('n5').value = d;
		var n6 = parseFloat(document.getElementById('n6').value);
		var e = parseFloat(d/n6);
		document.getElementById('n7').value = e;
	}
}
