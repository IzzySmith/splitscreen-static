// navigate to a new url
function navigate(){
	var url = document.getElementById('url').value;
	if(url=="" && document.getElementById('url').placeholder){
		url = document.getElementById('url').placeholder;
	}
	if(url.indexOf('https')==-1){
		url = 'https://' + url;
	}
	sess.relocate(url);
}
