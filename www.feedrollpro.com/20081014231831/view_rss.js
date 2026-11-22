// in: var news_link (string)
var callerDomain   = document.domain;
var callerURL      = document.URL;

// build link 
var sourceLink = news_link + '&domain=' + callerDomain + '&url=' + callerURL;
var text = '<scr' + 'ipt language="javascript"' + ' src="' + sourceLink + '"></scr' + 'ipt>';

document.write(text);