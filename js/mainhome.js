
$(function(){
    // $("body").delay(500).fadeIn()
    $("a").click(function(e){
        e.preventDefault()
    })

    $(".logo a").click(function(){
        setTimeout(function(){
            location.href = "full.html"
        }, 500)
    })

    $(".img_slide").slick({
        autoplay: true,
        fade: true,
        arrows: false,
        dots: false,
    })

    $(".pro_design_img img").hover(function(){
        $(this).css({"transform":"scale(1.1)"});
        $(".pro_design_img h4").hide();
        $(this).next().show();
        $(".project_design>h4").css({"opacity":"0"});
    }, function(){
        $(this).css({"transform":"scale(1)"})
        // $(".pro_design_img h4").hide();
        // $(".project_design>h4").css({"opacity":"1"});
    })

    $(".pro_design_more").click(function(){
        $(".project_popup").slideDown();
    })

    $(".project_popup_close").click(function(){
        $(".project_popup").slideUp();
    })

    $(".photo_illust").slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 4,
        autoplaySpeed: 1,
        speed: 8000,
        cssEase: "linear",
        pauseOnHover: false,
        
    })

    $(".team_slide").slick({
        autoplay: true,
        fade: true,
        arrows: true,
        dots: true,
    })

    $(".deck").hover(function(){
        $(".deck h3").css({"top":"40%","opacity":"1"})
        $(".deck img").css({"opacity":"0.5"})
        $(".card img").css({"opacity":"1"})
        $(".team_right h4").css({"opacity":"0"})
    }, function(){
        $(".deck h3").css({"top":"60%","opacity":"0"})
        $(".deck img").css({"opacity":"1"})
        $(".card img").css({"opacity":"0"})
        $(".team_right h4").css({"opacity":"1"})
    })

    $(".deck").click(function(){
        $(".team_pop").slideDown();
    })

    $(".team_close").click(function(){
        $(".team_pop").slideUp();
    })

    $(".web_page_menu ul li").hover(function(){
        $(this).find("img").css({"opacity":"0.3"})
        $(this).find("h3").stop().fadeIn(500)
        $(this).find("h3").css({"animation":"font_effect 1s 1s infinite alternate","opacity":"1"})
        $(this).find(".hover_line").css({"animation":"line_move1 0.6s ease-out forwards"})
        $(this).find(".hover_line1").css({"animation":"hover_line_move1 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line2").css({"animation":"hover_line_move2 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line3").css({"animation":"hover_line_move3 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line4").css({"animation":"hover_line_move4 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line_top").css({"animation":"line_tb_move 1s ease-out forwards"})
        $(this).find(".hover_line_bottom").css({"animation":"line_tb_move 1s ease-out forwards"})
    }, function(){
        $(this).find("img").css({"opacity":"1"})
        $(this).find("h3").stop().fadeOut()
        $(this).find("h3").css({"animation":"none", "opacity":"0"})
        $(this).find(".hover_line").css({"animation":"none"})
        $(this).find(".hover_line1").css({"animation":"none"})
        $(this).find(".hover_line2").css({"animation":"none"})
        $(this).find(".hover_line3").css({"animation":"none"})
        $(this).find(".hover_line4").css({"animation":"none"})
        $(this).find(".hover_line_top").css({"animation":"none"})
        $(this).find(".hover_line_bottom").css({"animation":"none"})
    })
})// 제이커리끝

$(window).scroll(function(){
    var h = $(window).scrollTop();
    console.log(h)

    if(h >= 800){
        $(".project_cont").css({"opacity":"1"})
    }else{
        $(".project_cont").css({"opacity":"0"})
    }

    if(h >= 950){
        $(".project_design .pro_design_img img").css({"transform":"translateX(0)","opacity":"1"})
        $(".project_mockup div img").css({"transform":"translateX(0)","opacity":"1"})
        $(".sonic").css({"opacity":"1","top":"25px"})
        $(".koopa").css({"right":"36%","opacity":"1"})
        $(".pro_design_img a").fadeIn("slow")
    }else{
        $(".project_design .pro_design_img img").css({"transform":"translateX(20px)","opacity":"0"})
        $(".project_mockup div img").css({"transform":"translateX(20px)","opacity":"0"})
        $(".sonic").css({"opacity":"0","top":"0"})
        $(".koopa").css({"right":"38%","opacity":"0"})
        $(".pro_design_img a").fadeOut("slow")
    }

    if(h >= 1590){
        $(".team_left, .team_right").css({"opacity":"1"})
    }else{
        $(".team_left, .team_right").css({"opacity":"0"})
    }

    if(h >= 1690){
        $(".team_icon1, .team_icon2").css({"transform":"scale(1)"})
    }else{
        $(".team_icon1, .team_icon2").css({"transform":"scale(0)"})
    }

    if(h >= 3000){
        $(".fin1").fadeIn()
        $(".fin2").delay(200).fadeIn()
        $(".fin3").delay(400).fadeIn()
    }
})