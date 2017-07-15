    i=1;
    function funny1()
    {
        if (i>1 && i<5)
        {
            fun.style.marginLeft=Math.floor(Math.random()*499+1)+"px";
            fun.style.marginRight=Math.floor(Math.random()*499+1)+"px";
            fun.style.marginTop=Math.floor(Math.random()*499+1)+"px";
            fun.style.marginBotton=Math.floor(Math.random()*499+1)+"px";
        }
        switch (i)
        {
           case 2:
            fun.innerHTML="有种你再点一下试试QWQ";
            break;
           case 3:
            fun.innerHTML="真乖！～";
            break;
           case 4:
            fun.innerHTML="这是最后一次了，别生气QAQ";
            break;
           case 5:
            document.getElementById("fun").href="index.html";
            break;
        }
        i++;
    }
    function funny2()
    {
        switch (i)
        {
           case 1:
            fun.innerHTML="点不到我吧～！";//防止鼠标没跳出去导致触发不了funny3
            fun.style.marginLeft=Math.floor(Math.random()*499+1)+"px";
            fun.style.marginRight=Math.floor(Math.random()*499+1)+"px";
            fun.style.marginTop=Math.floor(Math.random()*499+1)+"px";
            fun.style.marginBotton=Math.floor(Math.random()*499+1)+"px";
            i++;
            break;
           case 2:
            fun.innerHTML="有种你再点一下试试QWQ";
            break;
           case 3:
            fun.innerHTML="真乖！～";//防止鼠标没跳出去导致触发不了funny3
            fun.style.marginLeft=Math.floor(Math.random()*499+1)+"px";
            fun.style.marginRight=Math.floor(Math.random()*499+1)+"px";
            fun.style.marginTop=Math.floor(Math.random()*499+1)+"px";
            fun.style.marginBotton=Math.floor(Math.random()*499+1)+"px";
            i++;
            break;
           case 4:
            fun.innerHTML="这是最后一次了，别生气QAQ";
            break;
        }
    }
    function funny3()
    {
        switch (i)
        {
          case 2:
           fun.innerHTML="点不到我吧～！";
           break;
          case 3:
            fun.innerHTML="来点我呀~~~";
            break;
          case 4:
            fun.innerHTML="真乖！～";
            break;
          case 5:
            fun.innerHTML="胜利就在眼前！！！";
            break;
        }
    }
 /*
 function check()
    {
            funstyle=["marginLeft","marginRight","marginTop","marginBotton"];
            for (z=0; z<4; z++)
            {
            var x=getCss(document.getElementById("fun"),funstyle[z]);
            var y=Math.floor(Math.random()*499+1);
            if (Math.abs(x-y)>249)
            {
                switch (z)
                {
                    case 0:
                    fun.style.marginLeft=y+"px";
                    break;
                    case 1:
                    fun.style.marginRight=y+"px";
                    break;
                     case 2:
                    fun.style.marginTop=y+"px";
                    break;
                     case 3:
                    fun.style.marginBotton=y+"px";
                    break;
                }
            }
            else
            {
                check();
            }
        }
    }
*/
/*
 getCss：获取指定元素的具体样式的属性值
 curElement:[dom对象]
 attr:[string]
 */
/*
function getCss(curElement, attr) {
    var reg = null;
    var val = null;
    if (window.getComputedStyle) {
        val = window.getComputedStyle(curElement, null)[attr];
    }
    else {
        val = curElement.currentStyle[attr];
    }
    //reg：判断得到的属性值是否带有px，pt，rem，em等值，如果有则去掉只保留数字。
    reg = /^(-?\d+(\.\d+)?)(px|pt|rem|em)?$/;
    return reg.test(val) ? parseFloat(val) : val;
}
*/