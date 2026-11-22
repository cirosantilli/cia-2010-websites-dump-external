//  Copyright (c) 2000-2003 ZEDO Inc. All Rights Reserved.
function U2(){
var c0=0;var i3=navigator.javaEnabled();var x3=0;
if(navigator.mimeTypes&&
navigator.mimeTypes["application/x-shockwave-flash"]&&
navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){
var r4=navigator.plugins["Shockwave Flash"].description;
if(parseInt(r4.substring(r4.indexOf(".")-1))>=4){
x3=1;
}}}
if(document.layers){
c0=3
}
else{
c0=1;
}
if(i3){c0 |=4;}
if(x3){c0 |=8;}
return c0;
}
var y2=new Array();
function B2(){
var d3=new Date();var t0=new Date();var q1=0;
if(document.layers&&!Date.setUTCHours){
t0.setHours(0);
t0.setMinutes(0);
t0.setSeconds(0);
q1=t0.getTime()-d3.getTime();
if(q1<=0){
t0.setDate(t0.getDate()+1);
q1=t0.getTime()-d3.getTime();
}
}else{
t0.setUTCHours(5);
t0.setUTCMinutes(0);
t0.setUTCSeconds(0);
q1=t0.getTime()-d3.getTime();
if(q1<=0){
t0.setDate(t0.getUTCDate()+1);
q1=t0.getTime()-d3.getTime();
}}
return q1;
}
function U0(t3){
if(!y2[t3]){
var x7=document.cookie;var y3=new Array();var v7=/^(\w+)=(.+)/;
y3=x7.split(';');
var w4=y3.length;
for(var i=0;i<w4;i++){
y3[i]=y3[i].replace(/^\s/,'');
var v4=y3[i].match(v7);
if(v4!=null&&v4.length>2){
y2[v4[1]]=v4[2];
}}}
if(y2[t3]){return y2[t3];}
else{return '';}
}
function B0(a7,e7){
var q3=document.domain;var o2=document.domain.lastIndexOf('.');var n3=new Date();
if(o2!=-1){
o2=document.domain.lastIndexOf('.',o2-1);
if(o2!=-1){
q3=document.domain.slice(o2);
}}
if(q3.match(/\.co\./)){
o2=document.domain.lastIndexOf('.',o2-1);
if(o2!=-1){
q3=document.domain.slice(o2);
}}
q3=";domain="+q3;
n3.setTime(n3.getTime()+B2());
document.cookie=a7+'='+e7+';expires='+n3.toGMTString()+q3+';path=/;';
}
var n1='http://xads.zedo.com/ads2/';var o3=new Date();var i1=o3.getTime();var z1=i1 % 102;var x1=1;var c4=1;var a0=0;var i2="ZEDOPOP"+String((p0 * 1000000)+o0);var t6=new Image();
if(x4||document.layers||r3||z5){
x1=U2();
}
var r0=(d0<<8|x1);var i0=U1('x='+r0+';c='+o0+';n='+p0+';s='+q0+o1+';z='+i1);
if(o1.length>0){
i0='i='+z1+';'+i0;
}
if(d0==15){
a0=U0(i2);
if(!a0||isNaN(a0)){
a0=0;
}else{
a0=parseInt(a0);
}
if((a1>0)&&(a1<=a0)){
c4=0;
}}
if(c4){
document.write('<script language="JavaScript" src="'+n1+'o?'+i0+'"><\/script>');
}
if((a1>0)&&(d0==15)){
if(!a0){
B0(i2,"1");
}else if(a1>parseInt(a0)){
a0++;
B0(i2,String(a0));
}}