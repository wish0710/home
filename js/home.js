$(function(){
    $(".con2-mun li").on("click", function(){
        let i = $(this).index();
        $(".con2-canmoa li").hide();
        $(".con2-canmoa li").eq(i).show();
        $(".con2-mun li").removeClass("pofo");
        $(this).addClass("pofo");
    });

    $(".menu-button").on("click",function(){
            $(".one-pink").stop().animate({"width":"70%"},600,function(){
                $(".one-blue").stop().animate({"width":"65%"},600,function(){
                    $(".one-yellow").stop().animate({"width":"55%"},600,function(){
                            $(".one-red").stop().animate({"width":"80%"},600,function(){
                                $(".one-green").stop().animate({"width":"75%"},600,function(){
                                    $(".one-purple").stop().animate({"width":"70%"});
                            });
                        });
                    });
                });
            });
    });

    let baseline = -200;
    let con1 = $(".miniroom").offset().top + baseline;
    let con2 = $(".say").offset().top + baseline;
    let con3 = $("#Skill").offset().top + baseline;
    let con4 = $(".con2-portfolio").offset().top + baseline;
    let con5 = $(".con3-portfolio2").offset().top + baseline;
    let con6 = $(".con4-contact").offset().top + baseline;
    // console.log(con1,con2,con3,con4,con5,con6);
    $(".content-box").on("scroll",function(){
        let scroll = $(this).scrollTop();
        if(scroll >= con2 && scroll < con3){
            $(".one-pink").stop().animate({"width":"70%"},600,function(){
                $(".one-blue").stop().animate({"width":"65%"},600,function(){
                    $(".one-yellow").stop().animate({"width":"55%"},600,function(){
                            $(".one-red").stop().animate({"width":"80%"},600,function(){
                                $(".one-green").stop().animate({"width":"75%"},600,function(){
                                    $(".one-purple").stop().animate({"width":"70%"});
                            });
                        });
                    });
                });
            });
        } else {
            $(".one-pink, .one-blue, .one-yellow, .one-red, .one-green, .one-purple").css({"width":"0%"});
        }
    });
});