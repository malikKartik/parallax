window.onload=function(){
	this.document.getElementById("parallax-logo").style.animationName= 'none'
	this.document.getElementById("parallax-logo").style.left = '30%'
	this.document.getElementById("parallax-logo").style.transform = 'translate(-50%,-50%) scale(0.8)'
	this.document.getElementById("load-details").style.opacity = '1'
	this.document.getElementById("load-details").style.top = '50%'
	this.document.getElementById("home").style.opacity = '1'
	this.document.getElementById("tracks").style.opacity = '1'
	this.document.getElementById("sponsors").style.opacity = '1'
	if(this.screen.width> 800){
		this.document.getElementById("sidenav").style.opacity = '1'
	}
	
}

window.onscroll = function() {myFunction()};

	function myFunction() {
	  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	  var scrolled = (winScroll / height) * 100;
	  
	  document.getElementById("filler").style.height = scrolled + "%";
	}