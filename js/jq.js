$(document).ready(function () {
    $('.nav__burger').click(function () {
        $('.burger').toggleClass('burger--active');
        $('.nav__burger').toggleClass('nav__burger--active');
    })
    // 漢堡選單開啟

    $('.rulelist li .rulelist__btn').click(function () {
        $(this).siblings().toggle();
        $(this).toggleClass('rulelist__btn--active');
        $(this).parent().siblings().find('img').hide();
        $(this).parent().siblings().find('.rulelist__btn').removeClass('rulelist__btn--active');
    })
    // 注意事項開啟

    var timeOut = setTimeout("$('.kv__left').addClass('kv_left--ready');", 2);
    var timeOut2 = setTimeout("$('.kv__right').addClass('kv_right--ready');", 2);
    // 背景待文件開啟完成再做動畫

    var timeOut3 = setTimeout("$('.kv__people').attr('data-ani','delay')", 100);
});

$(document).ready(function () {

    $('.js__burger').click(function (event) {
        event.preventDefault();

        $('.burger').removeClass('burger--active');
        $('.nav__burger').removeClass('nav__burger--active');

        var target = this.dataset.num;

        // 取得目標區塊的y座標
        var target_top = $('.' + target).offset().top;
        // 取得body物件 這種寫法在各瀏覽器上最保險
        var b_top = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

        // 移動捲軸有動畫效果
        b_top.animate({
            scrollTop: target_top - 30
        }, 800);

    });

})


