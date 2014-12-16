function toggleIt(thing) {
	
	var embig = document.getElementById(thing+'-small');

	embig.className.indexOf('show') == -1?embig.className = 'show':embig.className = 'hide';
}