// Common Scripts used throughout the site

//Quick Ajax updater: necessary for all calls to update user profile, shared across site
function forceReloadOfProperties(req){
  if(Ajax){
    var refreshPage = new Ajax.Request('/login/sendAjax',{asynchronous:true});
    //alert("doin' fine");
  }
}

/* DEPRECATE
function saveUserProperty(uid, propName, propValue) {
  if(Ajax){
    if (uid != '') {
      
      url = (propName.indexOf('SavedNavigation') < 0) ? '/admin?action=UA-update-user&uid='+uid+'&cmf'+propName+'='+propValue : '/ajax/saveNavigation?uid='+uid+'&cmf'+propName+'='+propValue;

      new Ajax.Request(url,{asynchronous:true, onComplete:forceReloadOfProperties}) 
      //alert("doin' fine");
    }
  }
}

*/
// still need this for speed test
function setSiteVar(propName, propValue){
  if(Ajax){
    new Ajax.Request('/sendAjax?CMSSiteVars='+propName+':'+propValue,{asynchronous:true});
  }
}


function checkReferrer(refresh){
  var docDomain = document.domain;
  var docRef = document.referrer;
  //alert(docDomain+"  "+docRef+" "+refresh);
  //alert(docRef.indexOf(docDomain));
  if(docRef.indexOf(docDomain)==-1){
    window.location.href = docRef;
  }
  else{
    window.location.href = refresh;
  }
}

//Functions to get the top personalized toolbar working

var activeTab = '';
function loadExternal(url, id, start){
  var hover = 'tabHover_'+id;
  var ind = 'tabIndicator_'+id
  var startHover = (activeTab=='') ? 'tabHover_'+start : 'tabHover_'+activeTab;
  var startInd = (activeTab=='') ? 'tabIndicator_'+start : 'tabIndicator_'+activeTab;
  var xFrame = document.getElementById('externalSite');
  var page = document.getElementById('page');
  var indElem = document.getElementById(ind);
  var hoverElem = document.getElementById(hover);
  var startIndElem = document.getElementById(startInd);
  var startHoverElem = document.getElementById(startHover);

  startHoverElem.className='';
  startIndElem.style.visibility='hidden';
  
  xFrame.src = url;
  hoverElem.className = 'portalStart, portalStart';
  indElem.style.visibility = 'visible';
  xFrame.style.display="block";
  page.style.display="none";
  
  activeTab = id;
}

function checkHoverOver(id){
  var elem = document.getElementById(id);
  var elemStart = (elem.className=='portalStart') ? " portalStart" : "";
  if(elem.className!='portalHover'){
    elem.className='portalHover'+elemStart;
  }
}


function checkHoverOut(id){
  var elem = document.getElementById(id);
  var elemStart = (elem.className.indexOf('portalStart')!=-1) ? "portalStart" : "";
  elem.className=''+elemStart;
}



// ****** takes focus away from all links when clicked (IE PC only)
function blurAll() {
 if(document.all) {
   var total = document.links.length;
   for (var n = 0; n < total; n++){
   document.links[n].onfocus=document.links[n].blur;
   }
 }
}

// ****** shows and hides content (DOM only)
  function showElement(elmnt)
  {
		if (document.getElementById(elmnt) && document.getElementById(elmnt).innerHTML != "") {
		document.getElementById(elmnt).style.visibility="visible";
		document.getElementById(elmnt).style.display="";
		}
  }
  function hideElement(elmnt)
  {
    if (document.getElementById(elmnt))
    {
      document.getElementById(elmnt).style.visibility="hidden";
      document.getElementById(elmnt).style.display="none";
    }
  }

  function toggleElement(elmnt)
  {
    var div = document.getElementById(elmnt);
    if (div.style.visibility == 'hidden')
      showElement(elmnt);
    else
      hideElement(elmnt);
  }
  
  
// ****** swaps class
function toggleDisplay(elem, class1, class2) {
  if(!(elem)) return null;
  if (elem.className == class1) {
    elem.className=class2;
  }
  else {
    elem.className=class1;
  }
}




// ****** opens link in popup window
 function openWin(url) { 
    topL=130;
    leftL=40;
    width=540;
    height=410;    
    bar=1;      
    wName='popUp';
    width = (arguments.length>1)?arguments[1]:width; // option to pass in width
    bar = (arguments.length>2)?arguments[2]:bar; // option to turn scrollbar on
    wName = (arguments.length>3)?arguments[3]:wName; // option to pass in window name 
    height = (arguments.length>4)?arguments[4]:height; // option to pass in height       
    
    var str="toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars="+ bar +",width="+ width +",height="+ height +",screenX="+ leftL +",screenY="+ topL +",left="+ leftL +",top="+ topL +",resizable=1";
    var Pwin = window.open(url,wName,str,true)
    Pwin.focus();

}

function checkKeystroke(obj,e){
  var keycode;
  if(window.event) {
    keycode = window.event.keyCode;
  }
  else if(e) {
    keycode = e.which;
  }
  if((keycode == 0) || (keycode == 13)){
    document.obj.submit();
  }
  else{
    return false;
  }
}


//***Athletics Sport Drop Downs***
function switchPage(page) {
document.location = page.value;
}

/* **************************** Scroll Utility for linking to named anchors within the css layout **************************** */
function scrollDown(id){
  var elemAnchor = document.getElementById(id);
  window.scrollTo(0, elemAnchor.offsetTop);
}

/* **************************** RollOvers **************************** */
var count = 0;
var array_imgRoll = new Array();
var array_imgRoll_nml = new Array();
var array_imgRoll_ovr = new Array();
var allImages = document.getElementsByTagName('img');
var img;
var cancelEvent = false;
function findImagesForRoll(){
  //alert(allImages.length);
  for(i=0; i < allImages.length; i++){
    var nmlCheck = allImages[i].src.indexOf('_nml');
    if(nmlCheck!=-1){
      if(allImages[i].id){
        array_imgRoll[count] = allImages[i];
        if (array_imgRoll[count].attachEvent) {
            array_imgRoll[count].attachEvent("onmouseover",rollOverRollOut);
            array_imgRoll[count].attachEvent("onmouseout",rollOverRollOut);
        } 
        else if(array_imgRoll[count].setAttribute) {
            array_imgRoll[count].setAttribute("onmouseover", "rollOverRollOut(event);");
            array_imgRoll[count].setAttribute("onmouseout", "rollOverRollOut(event);");
        }
        else {
            document.getElementById(allImages[i].id).onmouseover = rollOverRollOut(event);
            document.getElementById(allImages[i].id).onmouseout = rollOverRollOut(event);
        }
        array_imgRoll_nml[count] = new Image();
        array_imgRoll_nml[count].src = allImages[i].src;
        array_imgRoll_ovr[count] = new Image();
        array_imgRoll_ovr[count].src = allImages[i].src.replace(/_nml/, '_ovr');
        count++;
      }
    }
  }
}
function rollOverRollOut(e){
  if(window.event) {
    img = document.getElementById(e.srcElement.id);
  }
  else if(e) {
    img = document.getElementById(e.target.id);
  }
  else{
    img = document.getElementById(e);
  }
  for(x=0; x < array_imgRoll.length; x++){
    if((img.id == array_imgRoll[x].id)&&(cancelEvent == false)){
      if(e.type == "mouseover" ){
        img.src = array_imgRoll_ovr[x].src
      }
      else if(e.type == "mouseout" ){
        img.src = array_imgRoll_nml[x].src
      }
    }
  }
}
function changeOnOver(id){
  
  img = document.getElementById(id);
  
  if(img !== null) { 
    for(x=0; x < array_imgRoll.length; x++){
      //console.dir(img);
      console.log(i + ' ' + img);
      if(img.id == array_imgRoll[x].id){
        img.src = array_imgRoll_ovr[x].src
        cancelEvent = true;
      }
    }
  }
}

function changeOnOut(id){
  img = document.getElementById(id);
  
  if(img !== null) {
    for(x=0; x < array_imgRoll.length; x++){
      if(img.id == array_imgRoll[x].id){
        img.src = array_imgRoll_nml[x].src
        cancelEvent = false;
      }
    }
  }
}

/* **************************** End RollOvers ************************ */

/*
function sendImplicit(from, login){
  var url, sendAjax;
    switch (from){
      case "nav":
        url = (login==true)?"admin?action=UA-updateUser&cmfSavedNavigation={$user.SavedNavigation}|{$url}":"/somepath?CMSSiteVars=SavedNavigation:{$SavedNavigation
}|{$currentNavigation})";
      break;
    }
  ajaxUpdater = new Ajax.Updater(containerDiv,url,{asynchronous:true});
}
*/

/* **************************** Vertical scrolling ticker ************************ */
//
// AF: original code under: http://devedge-temp.mozilla.org/toolbox/examples/2001/stock-ticker/
// adapted to scroll vertically and uses divs instead of spans
//

function Ticker(name, id, shiftBy, interval) {
  this.name     = name;
  this.id       = id;
  this.shiftBy  = shiftBy ? shiftBy : 1;
  this.interval = interval ? interval : 100;
  this.runId	  = null;
  this.div      = document.getElementById(id);

  var node      = this.div.firstChild;
  var next;

  // remove all nodes in between ticker-items
  while (node) {
    next = node.nextSibling;
    if (node.nodeType == 3) this.div.removeChild(node);
    node = next;
  }
 
  this.top = 40;
  this.shiftTopAt = this.div.firstChild.offsetHeight;
  this.div.style.visibility = 'visible';
}

function startTicker() {
  this.stop();
  this.top -= this.shiftBy;

  if (this.top <= -this.shiftTopAt) {
    this.top = 10;
    this.div.appendChild(this.div.firstChild);
    this.shiftTopAt = this.div.firstChild.offsetHeight;
  }
  
  this.div.style.top = (this.top + 'px');
  this.runId = setTimeout(this.name + '.start()', this.interval);
}

function stopTicker() {
  if (this.runId) clearTimeout(this.runId);
  else return;
  
  this.runId = null;
}

Ticker.prototype.start = startTicker;
Ticker.prototype.stop = stopTicker;

/* **************************** End Ticker ************************ */


/* **************************** Speed Test ************************ */

function speed_test(speed, start, end, bytes, adminTool) {
  if (speed < 128) { // mostly a slow connection speed.
    setSiteVar('connectionSpeed', 'DIALUP');

  } else {
    setSiteVar('connectionSpeed', 'NORMAL');
  }
}

/*
function getTodoListContent(path_to_top,personId) {
  var url = path_to_top+'/ajax/todolist?personId='+personId;
  var TodoListAjax = 'new Ajax.Updater(\'todoListContents\', \''+url+'\', {onLoading: showTodoListLoading, asynchronous:true} )';
  setTimeout(TodoListAjax,100);
} 

function showTodoListLoading(originalRequest) {
 $('todoListContents').innerHTML = $('commonLoading').innerHTML;
}
*/


function hideMe() {
		//document.getElementById("todoList").className = "divHide";
    if ($('athletic_selector')) {
      Element.hide($('athletic_selector'));
    }
}
function showMe() {
		//document.getElementById("todoList").className = "divShow";
    if ($('athletic_selector')) {
      Element.show($('athletic_selector'));
    }
}

function isWinOS() {
  return (navigator.platform.indexOf('Win') !== -1); 
}

function testOS() {
  $(document.body).addClassName(isWinOS() ? 'win' : 'not-win');
}

Profile = {
  lookUpschool:function() {
    var thisSchoolName = $('cmfhighSchoolName').value;							 
    var targetWebservice = $('targetWebservice').value;							 
    if(thisSchoolName.length > 4) { 
   
    var schoolSearchResults = $('schoolSearchResults');
//AS:   var url = SiteVars.path_to_top + '/lookup_school?searchString='+thisSchoolName;
//AS:   var url = SiteVars.path_to_top + '/lookup_school?targetWebservice='+targetWebservice+'&searchString='+thisSchoolName;
    var url = SiteVars.path_to_top + '/lookup_school?targetWebservice='+targetWebservice+'&searchString='+thisSchoolName; //AS:1
    //alert('lookUpschool :'+url);
    var ajaxUpdater = new Ajax.Updater(
                        schoolSearchResults,
                        url,
                        {asynchronous:true});
      Element.show(schoolSearchResults);
    } else {
     alert('Please enter more than 4 characters to search for a school');
    }    
  }  
}


