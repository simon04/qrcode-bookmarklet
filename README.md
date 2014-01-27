qrcode-bookmarklet
=

This bookmarklet is based on Shaun's qrbookmarklet from https://code.google.com/p/qrbookmarklet/

To install, create a bookmark of
```
javascript:(function(){if(document.getElementById){var x=document.body;var o=document.createElement('script');if(typeof(o)!='object') o=document.standardCreateElement('script');o.setAttribute('src','https://qrbookmarklet.googlecode.com/svn/trunk/qr.js');o.setAttribute('type','text/javascript');x.appendChild(o);}})(); 
```

This project is MIT licensed.
