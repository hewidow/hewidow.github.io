$(function() {
    if ($(window).width()>1340) {
        $(".musicplayer").attr("src","//music.163.com/outchain/player?type=0&id=32571002&auto=1&height=430"); 
        $(".musicplayer2").attr("src","");
        $("[href='#musicplayer2']").attr("href","#musicplayer");
    } 
 else {
     $(".musicplayer").attr("src","");
     $(".musicplayer2").attr("src","//music.163.com/outchain/player?type=0&id=32571002&auto=1&height=430");
     $("[href='#musicplayer']").attr("href","#musicplayer2");
 }
});
$(window).resize(function() {
    if ($(window).width()>1340) {
        $(".musicplayer").attr("src","//music.163.com/outchain/player?type=0&id=32571002&auto=1&height=430"); 
        $(".musicplayer2").attr("src","");  
        $("[href='#musicplayer2']").attr("href","#musicplayer");
    } 
 else {
     $(".musicplayer").attr("src","");
     $(".musicplayer2").attr("src","//music.163.com/outchain/player?type=0&id=32571002&auto=1&height=430");
     $("[href='#musicplayer']").attr("href","#musicplayer2");
 }
});