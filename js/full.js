$(function(){
    // 풀페이지는 맨 마지막
    $(".full_wrap").delay(500).fadeIn()
    
    $(".yes_info").delay(2000).slideDown()
    
    $(".go_home").click(function(){
        setTimeout(function(){
            location.href = "loading.html"
        }, 1000)
    })

    $(".full_wrap").fullpage({
        navigation: true
    })
    
    
})// 제이커리 끝
