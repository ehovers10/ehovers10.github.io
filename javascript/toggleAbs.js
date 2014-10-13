function toggleAbs(paper) {
	
	var abs = document.getElementById('abs_'+paper);

	abs.className.indexOf('noshow') == -1?abs.className = 'noshow':abs.className = 'show';

}