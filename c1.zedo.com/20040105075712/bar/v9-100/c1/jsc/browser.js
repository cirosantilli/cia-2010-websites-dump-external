//  Copyright (c) 2000-2003 ZEDO Inc. All Rights Reserved.
var a4=null;var e0=navigator.userAgent.toLowerCase();var x2=parseInt(navigator.appVersion);var r3=(e0.indexOf('opera')!=-1);
var r5=((e0.indexOf('msie')!=-1)&&(e0.indexOf('opera')==-1)&&(e0.indexOf('webtv')==-1));var q5=(r5&&(x2>=4));var z5=(e0.indexOf('mac')!=-1);
var v2=((e0.indexOf('mac')!=-1)&&(e0.indexOf('msie 4.')!=-1));var q4=(e0.indexOf('webtv')!=-1);var x4=((e0.indexOf('gecko')!=-1)&&(x2==5));
if(!v2){
a4=window.onerror;
}
var p7=new Image();
function U5(i7){
var y4=i7.toString().match(/function\s+(\w*)/)[1];
if((y4==null)||(y4.length==0)){
return "anonymous();";
}
else{
return y4+"();";
}}
function B5(){
var x6="";
for(var a=arguments.caller;a!=null;a=a.caller){
x6+=U5(a.callee);
if(a.caller==a)break;
}
return x6;
}
function F6(){
var z3="";var y4="anonymous();";var n6=0;
window.onerror=null;
for(var i=0;i<arguments.length;i++){
z3+='a'+i+'='+arguments[i]+';';
if(i==2){
n6=escape(arguments[i]);
}}
z3=B5()+z3;
if(navigator.cookieEnabled){
z3=z3+'c='+navigator.cookieEnabled+';';
}
z3=z3+"C="+document.cookie+";";
if(document.cookie.indexOf('ZEDOERROR')==-1){
p7.src='http://ads.zedo.com/ads2/p/'+Math.random()+'/ERR.gif?v=bar/v9-100/c1;'+z3+'b='+navigator.userAgent;
document.cookie="ZEDOERROR="+n6;
}
return true;
}
window.onerror=F6; 
function U1(q7){
var o4=new Array();var z2=new Array();var v6=new Array();var d6=new Array();var w4;var d4='';var i,j;
o4=q7.split(';');
w4=o4.length;
j=0;
for(i=0;i<w4;i++){
if(o4[i].length>2&&o4[i].match(/=/)){
z2[0]='';
z2[1]='';
z2=o4[i].split('=');
if((z2[0].length>0)&&(z2[1].length>0)&&(z2[1]!='0')
&&(z2[1]!='default')&&(z2[1]!='off')){
v6[j]=z2[0];
d6[j]=z2[1];
j++;
}}}
for(i=0;i<j;++i){
if(d4){
d4+=";";
}
d4=d4+v6[i]+"="+d6[i];
}
return d4;
}
var p0=0;var q0=0;var a1=1;var o0='0';var d0=0;var v0=0;var x0=0;var z7=new Image();var d1=0;
if(typeof zflag_nid!='undefined'){
p0=zflag_nid;
zflag_nid=0;
}
if(typeof zflag_sid!='undefined'){
q0=zflag_sid;
zflag_sid=0;
}
if(typeof zflag_cid!='undefined'){
o0=zflag_cid;
zflag_cid=0;
}
if(typeof zflag_sz!='undefined'){
d0=zflag_sz;
zflag_sz=0;
}
if(typeof zflag_width!='undefined'){
v0=zflag_width;
zflag_width=0;
}
if(typeof zflag_height!='undefined'){
x0=zflag_height;
zflag_height=0;
}
if(typeof zflag_pop!='undefined'){
a1=zflag_pop;
zflag_pop=1;
}
var zzStr='';var zzPat='';var zzCountry=255;var zzMetro=0;var zzState=0;var zzSection=q0;var zzD=window.document;
var x5=new Array(468,234,88,120,120,120,125,160,120,300,250,240,336,180,728,1);var y5=new Array(60,60,31,90,60,240,125,600,600,250,250,400,280,150,90,1);var y1;var o1='';
if(v0<=0||x0<=0){
v0=x5[d0];
x0=y5[d0];
}
if(((x4)||(q5))&&(!navigator.cookieEnabled)){
o1=";u=c";
}
if(q4||v2){
document.write('<script language="JavaScript" src="http://c1.zedo.com/bar/v9-100/c1/jsc/img.js"><\/script>');
}
else if((z5)||(r3)||(document.layers)){
document.write('<script language="JavaScript" src="http://c1.zedo.com/bar/v9-100/c1/jsc/script.js"><\/script>');
}
else if((x4)||(q5)){
document.write('<iframe width="'+v0+'" height="'+x0+'" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowTransparency="true" src="http://c1.zedo.com/bar/v9-100/c1/jsc/ff2.html?'+U1('c='+o0+';n='+parseInt(p0)+';s='+q0+';d='+parseInt(d0)+';w='+parseInt(v0)+';h='+parseInt(x0))+'"></iframe>');
}else{
o1=";u=b"+escape(e0);
document.write('<script language="JavaScript" src="http://c1.zedo.com/bar/v9-100/c1/jsc/img.js"><\/script>');
}
if(!v2){
window.onerror=a4;
}