function cleanUp()
{
	node = document.getElementsByTagName("body")[0];
	var a = [];
	var re = new RegExp('\\bshaunsational_qr\\b');
	var els = node.getElementsByTagName("*");
	for(var i=0,j=els.length; i<j; i++)
	if(re.test(els[i].className))a.push(els[i]);

	for(var x in a)
	{
		a[x].parentNode.removeChild(a[x]);
	}
}
cleanUp();

var shade = document.createElement("div");
	shade.setAttribute('class','shaunsational_qr');
	shade.setAttribute('id','shade');
	shade.setAttribute('style','background-color:#000;height:100%;left:0;opacity:0.65;position:fixed;top:0;width:100%;z-index:1001;');
	
var centr = document.createElement("div");
	centr.setAttribute('class','shaunsational_qr');
	centr.setAttribute('id','centr');
	centr.setAttribute('style','background-color:transparent;height:100%;left:0;position:fixed;text-align:center;top:0;width:100%;z-index:1001;');
	
var qrdiv = document.createElement("div");
	qrdiv.setAttribute('class','shaunsational_qr');
	qrdiv.setAttribute('id','qrdiv');
	qrdiv.setAttribute('style','margin:25px auto auto auto;background-color:#FFF;height:320px;width:320px;z-index:1001;-moz-border-radius:20px;');
	
var qrcode = document.createElement("img");
	qrcode.setAttribute('class','shaunsational_qr');
	qrcode.setAttribute('id','qrcode');
	qrcode.setAttribute('style','margin:10px;cursor:pointer;');
	qrcode.setAttribute('src','http://chart.apis.google.com/chart?cht=qr&chs=300x300&chld=H|0&chl=' + document.location.href);
	qrcode.setAttribute('title','Click to close.');

centr.appendChild(qrdiv);
qrdiv.appendChild(qrcode);
document.body.appendChild(shade);
document.body.appendChild(centr);
document.body.setAttribute('onclick','cleanUp()');