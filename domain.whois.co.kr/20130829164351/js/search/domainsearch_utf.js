
/********************
* 도메인 검색 공통 함수
*/

//var __DOMAIN_SEARCH_TYPE_ENG__ = ".kr|.co.kr|.com|.net|.co|.org|.biz|.asia|.keyword|.me|.eu|.info|.cc|.tv|.jp|.ac|.name|.mobi|.so|.tel|.or.kr|.pe.kr|.ne.kr|.re.kr|.tw";
//var __DOMAIN_SEARCH_TYPE_ENG__ = ".kr|.co.kr|.com|.net|.co|.org|.biz|.asia|.me|.eu|.info|.xxx|.cc|.tv|.jp|.ac|.name|.mobi|.so|.tel|.or.kr|.pe.kr|.ne.kr|.re.kr|.tw";
//var __DOMAIN_SEARCH_TYPE_ENG__ = ".kr|.co.kr|.com|.net|.org|.biz|.asia|.me|.eu|.info|.xxx|.cc|.tv|.jp|.ac|.name|.mobi|.so|.tel|.or.kr|.pe.kr|.ne.kr|.re.kr|.tw";
//var __DOMAIN_SEARCH_TYPE_ENG__ = ".kr|.co.kr|.com|.net|.org|.asia|.biz|.me|.eu|.info|.xxx|.cc|.tv|.jp|.name|.mobi|.so|.tel|.or.kr|.pe.kr|.ne.kr|.re.kr|.tw";
var __DOMAIN_SEARCH_TYPE_ENG__ = ".kr|.co.kr|.com|.net|.org|.pro|.asia|.cn|.jp|.biz|.me|.in|.eu|.info|.xxx|.sx|.cc|.tv|.name|.mobi|.so|.tel|.or.kr|.pe.kr|.ne.kr|.re.kr|.tw|.pw";

var __DOMAIN_SEARCH_TYPE_KOR__ = ".한국|.kr|.com|.net|.org|.keyword|.tv|.cc|.biz|.info|.name|.tel|.asia";
//var __DOMAIN_SEARCH_TYPE_KOR__ = ".kr|.com|.net|.org|.keyword|.tv|.cc|.biz|.info|.name|.tel";

// 영문도메인 유효성 체크 및 검색페이지 연결
function mltDomainSearch_Eng(form)
{
	var host = form.hostname.value;
	var strlength = host.length;

	var str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-";
	var j=0,a=0;

	//[1.1] 도메인명 유무
	host = host.trim();
	if( host == null || host.trim() == "" ) {
		alert("도메인명을 입력하여 주십시오.");
		form.hostname.style.backgroundImage = "";
		form.hostname.focus();
		return false;
	}

	//도메인에 '.'이 들어가 있는 경우
	if(host.indexOf(".") != -1)
	{
		if(host.substr(0,4) == "www." || host.substr(0,4) == "WWW.")
		{
			host = host.replace("www.","").replace("WWW.","");
		}

		var pattern = /^[a-zA-Z0-9-]+.[a-zA-Z]+.[a-zA-Z]+$/; //full domain check
		if(!pattern.test(host))
		{
			alert("유효하지 않은 도메인 이름입니다. \n\n다시 입력해 주십시오.");
			form.hostname.focus();
			return false;
		}

		var tmp_buf = host.split(".");
		host = tmp_buf[0];
		strlength = host.length;
	}

	//[1.2] 도메인길이 체크
	if(host.length < 2 || host.length > 63)
	{
		alert("도메인 이름은 최소 2자, 최대 63자까지 가능합니다.");
		form.hostname.focus();
		return false;
	}

	//[1.3] 도메인명 유효 체크
	for(i=0;i<host.length;i++)
	{
		temp = host.charAt(i);

		if(temp == " ") {
			alert("유효하지 않은 도메인 이름입니다. \n\n도메인 이름은 공백을 포함할 수 없습니다. \n\n다시 입력해 주십시오!!");
			form.hostname.focus();
			return false;
		} else if(temp == ".") {
			alert("유효하지 않은 도메인 이름입니다. \n\n도메인 이름은 . 를 포함할 수 없습니다. \n\n다시 입력해 주십시오!!");
			form.hostname.focus();
			return false;
		}

		if(host.value != "" && str.indexOf(temp) < 0)
		{
			alert("유효하지 않은 도메인 이름입니다. \n\n도메인 이름은 특수문자를 포함할 수 없습니다. \n\n다시 입력해 주십시오!!");
			form.hostname.focus();
			return false;
		}

		j = i;
	}

	//[1.4] "-"  으로 시작하는 것 금지
	if( host.indexOf("-") == 0 ) {
		alert("하이픈(-)으로 시작하는 도메인명은 등록하실 수 없습니다. \n다시 입력해주십시오.");
		form.hostname.focus();
		return false;
	}

	//[1.5] "-"  으로 끝나는 것 금지
	if( host.lastIndexOf("-") == (strlength-1) ) {
		alert("하이픈(-)으로 끝나는 도메인명은 등록하실 수 없습니다. \n다시 입력해주십시오.");
		form.hostname.focus();
		return false;
	}

	var actionpage = form.actionPage.value;
	var typeoption	= "";
	var types = "";

	types = __DOMAIN_SEARCH_TYPE_ENG__;

	var types_buf = types.split("|");
	form.domains.value = "";

	for (var i = 0; i < types_buf.length; i++)
	{
		var domains_temp = host + types_buf[i];
		form.domains.value += domains_temp+"|";

	}

	form.action = actionpage;
	form.gubun.value = "|";
	form.mode.value = "search_result";
	form.target="_top";

	form.submit();
}



// 한글도메인 유효성 체크 및 검색페이지 연결
function mltDomainSearch_Kor(form){
	var host = form.hostname.value;

	//[1.1] 도메인명 유무
	if( host == null || host.trim() == "" ) {
		alert("도메인명을 입력하여 주십시오.");
		form.hostname.style.backgroundImage = "";
		form.hostname.focus();
		return false;
	}

	//[1.2] 도메인명 형식 체크
	var valid_dom = /^[가-힣a-zA-Z0-9\-]+$/;
	if(!valid_dom.test(host)){
		alert("도메인 형식이 맞지 않습니다. \n\n다시 입력해주십시오.");
		form.hostname.focus();
		return false;
	}
	//[1.3] 길이 검사 : 최소 2자 - 17자 까지
	var strlength = host.length;
	var krstr = /[가-힣]/;
	if(!krstr.test(host)){
		alert("한글을 적어도 한 글자 이상 포함해야 합니다. \n\n다시 입력해주십시오.");
		form.hostname.focus();
		return false;
	}

	// 길이검사시 한글영문의 경우 영문을 1글자로 계산하게되면 안됨.
	// 한글한글자에 대해 영문은 0.5자로 계산하여 17자를 계산하도록함.
	junkyAlphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-";
	var strlength2 = 0; //한글포함한 경우의 길이계산을 위한 별도의 변수할당.
	for ( var i = 0; i < strlength; i++ ) {
		if ( junkyAlphabet.indexOf( host.charAt(i) ) >= 0 ) {
			strlength2 = strlength2 + 0.5;
		} else {
			strlength2 = strlength2 + 1;
		}
	}

	if( strlength2 < 1 || strlength2 > 17 ) {
		alert("도메인명은 최소 2자에서 최대 17까지만 등록가능합니다. \n다시 입력해주십시오.");
		form.hostname.focus();
		return false;
	}

	//[1.4] "-"  으로 시작하는 것 금지
	if( host.indexOf("-") == 0 ) {
		alert("하이픈(-)으로 시작하는 도메인명은 등록하실 수 없습니다. \n다시 입력해주십시오.");
		form.hostname.focus();
		return false;
	}

	//[1.5] "-"  으로 끝나는 것 금지
	if( host.lastIndexOf("-") == (strlength-1) ) {
		alert("하이픈(-)으로 끝나는 도메인명은 등록하실 수 없습니다. \n다시 입력해주십시오.");
		form.hostname.focus();
		return false;
	}

	var actionpage	= "http://domain.whois.co.kr/regist/search_result.php";
	var typeoption	= "";
	var types		= "";

	types = __DOMAIN_SEARCH_TYPE_KOR__;

	var types_buf = types.split("|");
	form.domains.value = "";

	for (var i = 0; i < types_buf.length; i++)
	{
		var domains_temp = host + types_buf[i];
		form.domains.value += domains_temp+"|";
	}

	form.action = actionpage;
	form.gubun.value = "|";
	form.mode.value = "search_result";
	form.target="_top";

	form.submit();
}



function trimString (str) {
       str = this != window? this : str;
       return str.replace(/^\s+/g, '').replace(/\s+$/g, '');
}

String.prototype.trim = trimString;

function entchkkor(form){
	if(event.keyCode==13){
	mltDomainSearch_Kor(form);
	}
}

function entchkeng(form){
	if(event.keyCode==13){
	mltDomainSearch_Eng(form);
	}
}


///////////////////////////////////////////////////////////////
//////////////// 추가 코드 /////////////////////////////////////
//
// 네이밍 마법사 관련
// 2005/08/11 Alex
//

function isValidDomain(str)
{
	// 길이 검사 : 최소 1자 - 63자 까지
	str = str.trim();

	var strlength = str.length;
    //alert(strlength);
	if( strlength < 1 || strlength > 63 ) {
		alert("도메인명은 최소 1자에서 최대 63까지만 등록가능합니다. \n\n다시 입력해주십시오");
		return false;
	}

	var isvalid = /^[가-힣a-zA-Z0-9\-]+$/;
	if(!isvalid.test(str)){
		alert("하이픈(-) 문자를 제외한 특수문자는 사용하실 수 없습니다.\n\n다시 입력해주십시오");
		return false;
	}

	// "bq--"  으로 시작하는 것 금지
	if( str.indexOf("bq--") == 0 ) {
		alert("bq--으로 시작하는 도메인명은 예약어이므로 등록하실 수 없습니다. \n\n다시 입력해주십시오");
		return false;
	}

	// "xn--"  으로 시작하는 것 금지
	if( str.indexOf("xn--") == 0 ) {
		alert("xn--으로 시작하는 도메인명은 예약어이므로 등록하실 수 없습니다. \n\n다시 입력해주십시오");
		return false;
	}
	// "-"  으로 시작하는 것 금지
	if( str.indexOf("-") == 0 ) {
		alert("하이픈(-)으로 시작하는 도메인명은 등록하실 수 없습니다. \n\n다시 입력해주십시오");
		return false;
	}

	// "-"  으로 끝나는 것 금지
	if( str.lastIndexOf("-") == (strlength-1) ) {
		alert("하이픈(-)으로 끝나는 도메인명은 등록하실 수 없습니다. \n\n다시 입력해주십시오");
		return false;
	}

    return true;
}

function sendToNamingWizard(FormObject)
{
	var actionForm = document.NamingWizardForm;
    var key;
    if (FormObject.name == "hangul") {
        key = FormObject.hostname.value;
    } else if(FormObject.name == "quest") {
        key = FormObject.hostname.value;
    } else if(FormObject.name == "searchForm") {
        key = FormObject.hostname.value;
    }

    window.status = key;

    if (key != "" && !isValidDomain(key)) {
        FormObject.hostname.focus();
        return;
    }

    if (key == "") {
        actionForm.action = "http://domain.whois.co.kr/namingwizard/naming_wizard_user.php";
	} else {
        actionForm.action = "http://domain.whois.co.kr/namingwizard/naming_wizard_user_result.php";
        actionForm.key.value = key;

    }

	actionForm.target="_top";
    actionForm.submit();

    //return true;
    return;
}

function chkKeyword1(ff) {

	/*
	var alt_msg = "서비스 업그레이드 작업으로 인해 아래 시간 동안 등록, 연장 등 서비스를 이용하실 수 없습니다.\n";
	    alt_msg += "'확인' 버튼을 누르시면 상세안내를 확인하실 수 있습니다.\n\n";
	    alt_msg += "서비스 중단 시간: 7월 22일(화) 오후 6:00시 - 7월 23일(수) 오전 10:00";

	alert (alt_msg);
	location.href = "http://domain.whois.co.kr/keyword/keyword_n.htm";
	return false;
	*/
	var str;
	str = ff.keyword.value;

	if( str == null || str.trim() == "" ) {
		alert("인터넷키워드명을 입력하여 주십시오.");
		ff.keyword.style.backgroundImage = "";
		ff.keyword.focus();
		return false;
	}

	var isvalid = /^[가-힣a-zA-Z0-9\-]+$/;
	if(!isvalid.test(str)){
		alert("!!!규칙\n1.한글은 완성형 문자여야 합니다.\n2.- 문자를 제외한 특수문자는 사용불가.");
		ff.keyword.focus();
		return false;
	}
	if( str.indexOf("-") == 0 ) {
		alert("하이픈(-)으로 시작하는 키워드는 신청하실수 없습니다.");
		ff.keyword.focus();
		return false;
	}

	// "-"  으로 끝나는 것 금지
	if( str.lastIndexOf("-") == (str.length-1) ) {
		alert("하이픈(-)으로 끝나는 키워드는 신청하실수 없습니다.");
		ff.keyword.focus();
		return false;
	}
	ff.target="_top";
	return true;

	//ff.submit();
}

// 검색창에 배경 넣기
var c=false;
function ch1 () {
if ( c ) return;
document.hangul.hostname.style.backgroundImage="";
c=true;
}

var d=false;
function ch2 () {
if ( d ) return;
document.quest.hostname.style.backgroundImage="";
d=true;
}

var key=false;
function ch3 () {
if ( key ) return;
document.ff.keyword.style.backgroundImage="";
key=true;
}

var f=false;
function ch4 () {
if ( f ) return;
document.winc_form.domain_name.style.backgroundImage="";
f=true;
}

var g=false;
function ch5 () {
if ( g ) return;
document.kwd.kw.style.backgroundImage="";
g=true;
}


var f=false;
function ch6 () {
if ( f ) return;
document.winc_form.numkey.style.backgroundImage="";
f=true;
}

var g=false;
function ch7 () {
if ( g ) return;
document.form1.domain_name.style.backgroundImage="";
g=true;
}

function playFlash(filename,width,height,id,trans,lock) {
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+width+'" height="'+height+'" id="'+id+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="movie" value="'+filename+'" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><param name="wmode" value="'+trans+'" /><param name="menu" value="'+lock+'" /><embed src="'+filename+'" quality="high" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+id+'" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>')
}

function checkFormLeftMenu(f)
{
	if(f.keyword.value.trim() == "")
	{
		alert("도메인명을 입력하십시오");
		f.keyword.focus();
		return false;
	}

	if(f.keyword.value.trim() == "입력 예) whois.co.kr")
	{
		alert("도메인명을 입력하십시오");
		f.keyword.value = "";
		f.keyword.focus();
		return false;
	}

	var type = "";

	try
	{
		if(f.type)
		{
			if(f.type[0].checked) type = "domain";
			else if(f.type[1].checked) type = "nameserver";
		}
	}
	catch (e){}


	viewDomainInfoLeftMenu(f.keyword.value.trim(), type);

	return false;
}

function viewDomainInfoLeftMenu(dname, types){
	var enc_dname = encodeURI(dname);

	//var url = "http://domain.whois.co.kr/whois/?domain=" + dname +"&type="+ types + "&is_utf8=Y";
	var url = "http://domain.whois.co.kr/whois/?domain=" + enc_dname +"&type="+ types + "&is_utf8=Y";
	window.open(url,"WHOISQUERY","width=550,height=700,menubar=no,directopopries=no,resizable=no,status=no,scrollbars=no");
}


