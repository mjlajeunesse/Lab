function showDOI (postidR, DOI) { 
	var var1 = '[<a class = "DOIsee" href="http://dx.doi.org/';
	var var2 = '">DOI: ';
	var var3 = '</a>]';
	var newdiv = document.createElement("div");
	newdiv.innerHTML = var1 + DOI + var2 + DOI + var3;
	newdiv.className = "DOI";
	var DOILinkid = document.getElementById(postidR); 
	DOILinkid.parentNode.replaceChild(newdiv, DOILinkid);
 } 