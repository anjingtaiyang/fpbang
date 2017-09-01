var docEl = document.documentElement,resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
var clientWidth = docEl.clientWidth;
if(clientWidth>=750){
	docEl.style.fontSize = '100px';
}
else{
	docEl.style.fontSize = 100 * (clientWidth /750) + 'px';
}