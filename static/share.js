var copyText = document.getElementById('copyLink');
copyText.addEventListener('click', function () {
  var copiedLink = document.getElementById('inviteLink');
  // select the contents
  inviteLink.select();
	   
  document.execCommand('copy');
  }, false);


