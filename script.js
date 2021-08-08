var entrytracker = 0;

window.logout = function() {

	// TELLS OUR SERVER TO LOG THE USER OUT
	fetch('/~/SegoLily/logout', { method: 'POST'});
	
	// TELLS OUR BROWSER TO SHOW A MESSAGE TO OUR USER
	alert('Logged Out!');
	
	// REDIRECTS THE USER TO THE HOMEPAGE
	location.href = '/~/SegoLily/index'
}


function plantGrow(){
	entrytracker += 1;
	console.log(entrytracker);
}