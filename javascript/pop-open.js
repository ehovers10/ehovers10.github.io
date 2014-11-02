function toggleAbs(paper) {
	
	var abs = document.getElementById('abs_'+paper);

	abs.className.indexOf('noshow') == -1?abs.className = 'noshow':abs.className = 'abstract';
	
	var title = document.getElementById('title_'+paper);
	
	title.className.indexOf('noshow') == -1?title.className = 'noshow':title.className = 'show';

}