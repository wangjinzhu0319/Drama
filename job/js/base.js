/**
 * Created by Administrator on 2017/07/07.
 */
$(document).ready(function(){
    $('.list').click(function(){
        if($('.show').css('opacity')=='1'){
            $('.show').css({transform:'translateX(-20%)',opacity:'0'});
            $(this).css({transform:'rotate(-90deg)'});
        }else{
            $('.show').css({transform:'translateX(0)',opacity:'1'});
            $(this).css({transform:'rotate(0deg)'});
        }
    })
    $('.page').click(function(){
        if($('.pages_box').css('display')=='block'){
            $('.pages_box').css({display:'none'});
            $(this).find('i').css({color:'#e0e0e0'});
            $('.loder').css({display:'block'});
        }else{
            $('.pages_box').css({display:'block'});
            $(this).find('i').css({color:'#E16501'});
            $('.loder').css({display:'none'});
        }
    })
})