(function (doc, win) {
	var docEl = doc.documentElement;
	var	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	var recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (clientWidth >= 750) {
			clientWidth = 750;
		};
		if (!clientWidth) return;
		docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
	};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


var scaleCount = 1;

summerready = function () {
    var oImg = document.getElementById('oImg');
    var hammertime = new Hammer(oImg);
    hammertime.get('pinch').set({ enable: true });
    hammertime.on('pinchout', function(ev) {
        if(scaleCount >= 2.5){
            //alert("max");
            return;
        }
        scaleCount += 0.03;
        oImg.style.transform = "scale("+scaleCount+")";
    });
    hammertime.on('pinchin', function(ev) {
        if(scaleCount <= 0.6){
            //alert("min");
            return;
        }
        scaleCount -= 0.03;
        oImg.style.transform = "scale("+scaleCount+")";
    });
};