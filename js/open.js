$(function(){
    $(".open_door").hover(function(){
        $(".open_port div").css({"opacity":"1"})
        $("div.port_line1").css({"left":"100px"})
        $("div.port_line2").css({"bottom":"40px"})
        $("div.port_line3").css({"right":"100px"})
        $("div.port_line4").css({"top":"50px"})
        $(".open_port h1").css({"text-shadow":"0 0 20px white"})
        $(".door_click h4").css({"animation":"font_opacity 1s infinite linear"})
        $(".door_click img").css({"animation":"arrow_move 1s infinite linear"})
    }, function(){
        $(".open_port div").css({"opacity":"0"})
        $("div.port_line1").css({"left":"0"})
        $("div.port_line2").css({"bottom":"0"})
        $("div.port_line3").css({"right":"60px"})
        $("div.port_line4").css({"top":"10px"})
        $(".open_port h1").css({"text-shadow":"none"})
        $(".door_click h4").css({"animation":"none"})
        $(".door_click img").css({"animation":"none"})
    })

    // var open = setTimeout(function(){
    //     location.href = "full.html"
    // }, 3000)

    $(".open_door").click(function(){
        $(".door_left").css({"animation":"left_rot 1s 1s ease-out forwards"});
        $(".door_right").css({"animation":"right_rot 1s 1s ease-out forwards"});
        $(".open_door").css({"box-shadow":"0 0 20px white"});
        $(".door_click").css({"opacity":"0"});
        $(this).css({"animation":"door_scale 0.3s 2s ease-in forwards"})
        setTimeout(function(){
            location.href = "full.html"
        }, 3000)
    })
})// 제이커리 끝