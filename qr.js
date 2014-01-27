function customURL(url) {
	if (url.indexOf('maps.google.com') != -1) {
		return document.getElementById('link').href;
	} else {
		return url;
	}
}

function getSelected() {
	if (window.getSelection) {
		return window.getSelection();
	} else if (document.getSelection) {
		return document.getSelection();
	} else if (document.selection) {
		return document.selection.createRange().text;
	}
	return false;
}

function cleanUp() {
	var node = document.getElementsByTagName('body')[0];
	var els = node.getElementsByClassName('shaunsational_qr');
	for (var i = els.length; i > 0; i--) {
		els[0].parentNode.removeChild(els[0]);
	}
}
cleanUp();

var selectedText = getSelected();
var qrData = (selectedText == false) ? customURL(document.location.href) : selectedText;

var shade = document.createElement('div');
	shade.setAttribute('class','shaunsational_qr');
	shade.setAttribute('id','shade');
	shade.setAttribute('style','background-color:#000;height:100%;left:0;opacity:0.65;position:fixed;top:0;width:100%;z-index:1001;');

var centr = document.createElement('div');
	centr.setAttribute('class','shaunsational_qr');
	centr.setAttribute('id','centr');
	centr.setAttribute('style','background-color:transparent;height:100%;left:0;position:fixed;text-align:center;top:0;width:100%;z-index:1001;');

var qr = qrcode(4, 'H');
	qr.addData(qrData);
	qr.make();

var qrdiv = document.createElement('div');
	qrdiv.setAttribute('class','shaunsational_qr');
	qrdiv.setAttribute('id','qrdiv');
	qrdiv.setAttribute('style','margin:25px auto auto auto;background-color:#FFF;height:320px;width:320px;z-index:1001;-moz-border-radius:20px;');
	qrdiv.innerHTML = qr.createImgTag(8);

var qrurl = document.createElement('div');
	qrurl.setAttribute('class','shaunsational_qr');
	qrurl.setAttribute('id','qrurl');
	qrurl.setAttribute('style','background:#FFF;margin:5px auto auto auto;padding:2px 15px;cursor:pointer;width:290px;font-size:10px;color:#333;-moz-border-radius:20px;text-align:left;overflow:hidden;');
var qrurl_text = document.createTextNode(qrData);
	qrurl.appendChild(qrurl_text);


centr.appendChild(qrdiv);
centr.appendChild(qrurl);
document.body.appendChild(shade);
document.body.appendChild(centr);
document.body.setAttribute('onclick','cleanUp()');
