function bgmusic(bg)
{
    if (document.getElementById("bgmusic").paused==false) {
        int=window.clearInterval(int);
    }
    document.getElementById("bgmusic").src=bg.id;
    document.getElementById("bgmusic2").innerHTML="当前正在播放：";
    document.getElementById("bgmusic3").innerHTML=bg.innerText;
    document.getElementById("bgmusic").play();
}
// function bgmusic2()
// {
//     document.getElementById("bgmusic2").innerHTML="当前无正在播放，请点击上面的按钮播放~!";
//     document.getElementById("bgmusic3").innerHTML="";
//     document.getElementById("bgmusic4").innerHTML="";
// }
//其实这个bgmusic2()完全没必要,而且放这还有bug，可以放在下面的timer()里...
function bgmusic3()
{
    time=toDecimal(document.getElementById("bgmusic").duration-document.getElementById("bgmusic").currentTime+1.5);// 修正时间，照顾网速慢的小朋友
    document.getElementById("bgmusic4").innerHTML=time+"s";
    int=self.setInterval("timer()",100);
}
function timer()
{
    time=toDecimal(time-0.1);
    document.getElementById("bgmusic4").innerHTML=time+"s";
    if (time<0) {
        int=window.clearInterval(int);
        document.getElementById("bgmusic2").innerHTML="当前无正在播放，请点击上面的按钮播放~!";
        document.getElementById("bgmusic3").innerHTML="";
        document.getElementById("bgmusic4").innerHTML="";
    }
}
//保留1位小数，如：2，会在2后面补上0.即2.0  
function toDecimal(x) {  
            var f = parseFloat(x);  
            if (isNaN(f)) {  
                return false;  
            }  
            var f = Math.round(x*10)/10;  
            var s = f.toString();  
            var rs = s.indexOf('.');  
            if (rs < 0) {  
                rs = s.length;  
                s += '.';  
            }  
            while (s.length <= rs + 1) {  
                s += '0';  
            }  
            return s;  
        }