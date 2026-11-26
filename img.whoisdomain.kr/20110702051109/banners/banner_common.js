
function go_menu_from_banner(id,url,target)
{
	//update counter
	var bhf = document.getElementById("banner_hide_frame_" + id);
	bhf.innerHTML = "<iframe src='http://img.whoisdomain.kr/banners/update_click.php?id=" + id + "' style='display:none' frameborder=0 scrolling=no width=0 height=10></iframe>";

	if(target == "_blank")
	{
		window.open(url,'','');
	}
	else if(target == "_self")
	{
		document.location.href = url;
	}
	else if(target == "_top")
	{
		top.document.location.href = url;
	}
}


function go_menu_from_flash(id)
{ 
	//update counter
	var bhf = document.getElementById("banner_hide_frame_" + id);
	bhf.innerHTML = "<iframe src='http://img.whoisdomain.kr/banners/update_click.php?id=" + id + "' style='display:none' frameborder=0 scrolling=no width=0 height=10></iframe>";

}
