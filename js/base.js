/**
 * Created by Administrator on 2017/07/06.
 */
$(document).ready(function(){
    $(window).scroll(function(){
        var scro=document.body.scrollTop||window.pageXOffset||document.documentElement.scrollTop;
        if(scro>=650){
            $('.returnTop').css({opacity:'1'});
        }else{
            $('.returnTop').css({opacity:'0'});
        }
    });
    $('.returnTop a').click(function(){
        $('html,body').animate({scrollTop:'0'},800)
    })
})