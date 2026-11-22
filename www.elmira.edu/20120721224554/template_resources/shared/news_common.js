function switch_date(frm) {
  frm.submit();
}

// *********** opens up cut and paste dialog for rss feeds
function cutAndPaste(url){
  var text;

  text = 'Please copy [ctrl-C] the following RSS feed location and paste [ctrl-V] \nthe link into your preferred RSS reader, then press OK.'

  prompt(text, url);
}

function popup_window(url, name, w, h, opts) {
  win = window.open(url, name, "width=" + w + ",height=" + h + "," + opts);
}