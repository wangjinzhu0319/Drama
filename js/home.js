/**
 * Created by Administrator on 2017/07/04.
 */
$(document).ready(function(){
    $(window).scroll(function(){
        var scro=document.body.scrollTop||window.pageXOffset||document.documentElement.scrollTop;
        if(scro/10<=30){
            $('header').css({
                height:100-(scro/10)+'px'
            })
        }else{
            $('header').css({
                height:'70px'
            })
        }
        if(scro>=650){
            $('.returnTop').css({opacity:'1'});
        }else{
            $('.returnTop').css({opacity:'0'});
        }
    });
    $('.returnTop a').click(function(){
        $('html,body').animate({scrollTop:'0'},800)
    })
    //轮播图
    var t = n = 0, count;

    $(document).ready(function(){
        count=$("#banner_switch_list a").length;
        $("#banner_switch_list a:not(:first-child)").hide();
        $("#banner_switch li").click(function() {
            var i = $(this).index();//获取Li的下标
            n = i;
            if (i >= count) return;
            $("#banner_switch_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
            document.getElementById("banner_switch").style.background="";
            $(this).toggleClass("on");
            $(this).siblings().removeAttr("class");
        });
        function showsAuto(){
            n = n >=(count - 1) ? 0 : ++n;
            $("#banner_switch li").eq(n).trigger('click');
        }
        t = setInterval(showsAuto, 2000);
        $("#banner_switch").hover(function(){clearInterval(t)}, function(){t = setInterval(showsAuto, 3000);});

    });


    //点击roll后滚动下一页
    $('#roll').click(function(){
        $("html,body").animate({scrollTop:630}, 800);
    });
    //news新闻滚动下一页/上一页
    $('.prev').click(function(){
        $('.tabs ul').animate({top:'0px'},800);
        $(this).addClass('hover');
        $(this).siblings('a').removeClass('hover');
    });
    $('.next').click(function(){
        $('.tabs ul').animate({top:'-330px'},800)
        $(this).addClass('hover');
        $(this).siblings('a').removeClass('hover');
    })
});