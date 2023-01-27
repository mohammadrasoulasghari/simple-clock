function showTime(){
 let date=new Date();
 let h = date.getHours();
 let m = date.getMinutes();
 let s = date.getSeconds();
 let sesion="AM"
 
 if(h==0){
    h=12;
 };
 if(h>12){
    h=h - 12
    sesion="PM"
 };
 h=(h<12)? `0${h}` : h;
 m=(m<12)? `0${m}` : m;
 s=(s<12)? `0${s}` : s;



 let time =`${h}:${m}:${s} ${sesion}`
document.querySelector(".clock").innerHTML=time
}
setInterval(showTime,1000)
