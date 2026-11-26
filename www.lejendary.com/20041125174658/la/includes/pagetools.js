// JavaScript Document
function changeTheme (page, theme) {
	window.location=("template.php?page=" + page + "&style=" + theme)
}

function showMenu( divNum )
{
	if (getIdProperty("s" + divNum, "display") != "block" )
  {
  	setIdProperty("s" + divNum, "display", "block");
  }
  else
  {
  	setIdProperty("s" + divNum, "display", "none");
  }
}

function fixWinIE() 
{
	if (document.body.scrollHeight <	document.all.content.offsetHeight) {
    document.all.content.style.display = "block";
 	}
}