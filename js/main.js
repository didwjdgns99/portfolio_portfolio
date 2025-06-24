$(document).ready(function(){
    


    $('.header a').mouseenter(function(){
        $(this).addClass('active')
        // $(this).parent().children().removeClass('active');
    });

    $('.header a').mouseleave(function(){
        $(this).removeClass('active')
        // $(this).parent().children().removeClass('active');
    });

    $('.por_list a').mouseenter(function(){
        $(this).addClass('active');
    });

    $('.por_list a').mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.miu_click').click(function(){
        $('.miumiu_por').addClass('active');
    });

    $('.esc').click(function(){
        $('.miumiu_por').removeClass('active')
    });

    $('.cors_click').click(function(){
        $('.cors_por').addClass('active');
    });

    $('.esc_cors').click(function(){
        $('.cors_por').removeClass('active')
    });

    $('.logi_click').click(function(){
        $('.logi_por').addClass('active');
    });

    $('.esc_logi').click(function(){
        $('.logi_por').removeClass('active')
    });

    $('.hera_click').click(function(){
        $('.hera_por').addClass('active');
    });

    $('.esc_hera').click(function(){
        $('.hera_por').removeClass('active')
    });

    $('.tax_click').click(function(){
        $('.tax_por').addClass('active');
    });

    $('.esc_tax').click(function(){
        $('.tax_por').removeClass('active')
    });
    $('.postech_click').click(function(){
        $('.postech_por').addClass('active');
    });

    $('.esc_postech').click(function(){
        $('.postech_por').removeClass('active')
    });
    




    $('.re_click').click(function(){
        $('.re_por').addClass('active');
    });

    $('.esc_re').click(function(){
        $('.re_por').removeClass('active')
    });

    $('.contact_btn').click(function(){
        $('.contact_txt').addClass('active');
        $('.contact_bg').addClass('active');
    });

    $('.close').click(function(){
        $('.contact_txt').removeClass('active');
        $('.contact_bg').removeClass('active');
    });
});