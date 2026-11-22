//  Copyright (c) 2000-2003 ZEDO Inc. All Rights Reserved.
var n1='http://xads.zedo.com/ads2/';var o3=new Date();var i1=o3.getTime();var r0=(d0<<8);var t4="x?";var z6=null;var o7=new Image();
if(typeof z1!='undefined'){
z1++;
}
else{
z1=i1;
}
z1 %=102;
if(isNaN(o0)){
z6=o0.match(/\/\d/);
if(z6!=null){
t4="y?";
}}
var i0=U1('x='+r0+';c='+o0+';n='+p0+';s='+q0+o1+';z='+i1);
i0='i='+z1+';'+i0;
var a5=n1+'r?'+i0;var y1='<a href="'+a5+'" name="zedoAdLink" target="_blank"><img width="'+v0+'" height="'+x0+'" name="zedoAdBanner" border="0" src="'+n1+t4+i0+'"></a>';
document.write(y1);
