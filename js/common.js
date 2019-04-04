$(function(){
    // $("#right-content").panel({iWheelStep:32});

    // 侧边导航折叠效果
    // $(".left-nav").on('click','.left-nav-ul>li',function(){
    //     $(this).addClass('active-li') 
    //            .siblings('li').removeClass('active-li');
    //     $(this).find('ol').addClass('active-li-ol'); 
    //     $(this).siblings("li").find("ol p").removeClass('cur-p')
    // })
    $(".left-nav").on('click','.left-nav-ul>li>p',function(){
        // 判断子级是否显示，显示-收起，不显示-展开
        if($(this).siblings().is(':hidden')){
            $(this).siblings().slideDown(700);
        }else{
            $(this).siblings().slideUp(700);
        }
        $(this).find('span').addClass('cur');
        $(this).parent().siblings().find('p span').removeClass('cur');
        $(this).parent().siblings().find('ol').slideUp(700);
        $(this).parent().addClass('active-li');
        $(this).parent().siblings().removeClass('active-li'); 
    })
    $(".left-nav").on('click','ol p',function(){
        $(this).addClass('cur-p'); 
        $(this).parent().parent().parent().addClass('active-li');
        $(this).parent().siblings().find('p').removeClass('cur-p')
    })








})