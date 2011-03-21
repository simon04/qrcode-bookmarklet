function cleanUp()
{
﻿  node = document.getElementsByTagName("body")[0];
﻿  var a = [];
﻿  var re = new RegExp('\\bfb_graph_overlay\\b');
﻿  var els = node.getElementsByTagName("*");
﻿  for(var i=0,j=els.length; i<j; i++)
﻿  if(re.test(els[i].className))a.push(els[i]);

﻿  for(var x in a)
﻿  {
﻿  ﻿  if (a[x].parentNode)
﻿  ﻿  {
﻿  ﻿  ﻿  a[x].parentNode.removeChild(a[x]);
﻿  ﻿  }
﻿  }
}
cleanUp();

function doDetails(text)
{
	if (text != '')
	{
		var shade = document.createElement("div");
		﻿  shade.setAttribute('class','fb_graph_overlay');
		﻿  shade.setAttribute('id','shade');
		﻿  shade.setAttribute('style','background-color:#000;height:100%;left:0;opacity:0.65;position:fixed;top:0;width:100%;z-index:1001;');
		﻿
		var centr = document.createElement("div");
		﻿  centr.setAttribute('class','fb_graph_overlay');
		﻿  centr.setAttribute('id','centr');
		﻿  centr.setAttribute('style','background-color:transparent;height:100%;left:0;position:fixed;text-align:center;top:0;width:100%;z-index:1001;');
		﻿
		var fbdiv = document.createElement("div");
		﻿  fbdiv.setAttribute('class','fb_graph_overlay');
		﻿  fbdiv.setAttribute('id','fbdiv');
		﻿  fbdiv.setAttribute('style','margin:25px auto auto auto;background-color:#FFF;width:320px;z-index:1001;-moz-border-radius:20px;');
		﻿
		var fbuser = document.createElement("div");
		﻿  fbuser.setAttribute('class','fb_graph_overlay');
		﻿  fbuser.setAttribute('id','fb_graph_user_details');
		﻿  fbuser.setAttribute('style','font-size:14px;padding:20px;text-align:left;');
		﻿  fbuser.innerHTML = text;

		centr.appendChild(fbdiv);
		fbdiv.appendChild(fbuser);
		centr.appendChild(fb_graph);
		document.body.appendChild(shade);
		document.body.appendChild(centr);
		document.body.setAttribute('onclick','cleanUp()');
	}
	else
	{
		alert('You must be on a Facebook user page before using this bookmarklet.');
	}
}

var fb_graph = document.createElement('script');
	fb_graph.setAttribute('class','fb_graph_overlay');
	fb_graph.setAttribute('id', 'fb_graph');
	fb_graph.setAttribute('src', 'http://dev.secretsushi.com/fb_user.php?profile='+document.location.href.replace('#',''));

document.body.appendChild(fb_graph);