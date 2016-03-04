var t=864e5;
var n=(new Date).getTime();
var g=Date.UTC(2015,9,3);
var s=Date.UTC(2016,0,4);
document.getElementById("gitage").innerHTML=String(Math.floor((n-g)/t))+" days";
document.getElementById("ctdown").innerHTML=String(Math.floor((n-s)/t))+" days";
