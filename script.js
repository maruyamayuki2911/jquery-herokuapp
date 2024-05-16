$(function () {
    // カルーセル
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 4000,
        arrows: false,
        fade: true,
        speed: 1500,
    });

    // リンクホバー時に不透明アニメーション
    $('a').on('mouseenter', function () {
        $(this).animate({ opacity: 0.5 }, 400);
    });

    $('a').on('mouseleave', function () {
        $(this).animate({ opacity: 1.0 }, 400);
    });


    // 画像ホバー時に不透明アニメーション
    $('#works-img1').on('mouseenter', () => {
        $('#works-img1').animate({ opacity: 0.5 }, 400);
    });

    $('#works-img1').on('mouseleave', () => {
        $('#works-img1').animate({ opacity: 1.0 }, 400);
    });

    $('#works-img2').on('mouseenter', () => {
        $('#works-img2').animate({ opacity: 0.5 }, 400);
    });

    $('#works-img2').on('mouseleave', () => {
        $('#works-img2').animate({ opacity: 1.0 }, 400);
    });

    $('#works-img3').on('mouseenter', () => {
        $('#works-img3').animate({ opacity: 0.5 }, 400);
    });

    $('#works-img3').on('mouseleave', () => {
        $('#works-img3').animate({ opacity: 1.0 }, 400);
    });

    //---TOPボタンアニメーション---
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 100) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });

    // ---ページ内リンクをなめらかに---
    $('a[href^="#"]').on('click', function () {
        // $(this).attr('href')でリンク先を取得
        const href = $(this).attr('href');
        //取得したリンクが"#"か判定
        let target
        if (href == '#') {
            target = $('html');
        } else {
            target = $(href);
        }
        // .offset().topでトップからの位置を取得
        let position = target.offset().top;
        $('html,body').animate({ scrollTop: position }, 500);
    });


    // ---セクションを超えたときにフェードイン---
    $(window).on('scroll', function(){
        // $(window).scrollTop()でスクロール量を取得
        let scrollAmount = $(window).scrollTop();
        // $(window).height()でウィンドウ（ブラウザの表示エリア）の高さを取得
        let windowHeight = $(window).height();
        // 繰り返し処理
        $('section').each(function(){
            // section要素の位置を取得（ページの上端からの距離）
            let section = $(this).offset().top;
            // スクロール量がある位置に達したらクラス追加(section要素の100px前に)
            if (scrollAmount > section - windowHeight + 100) {
                $(this).addClass('fadeIn');
            } 
        });
    });

    
    
    // --モーダル表示--
    $('.works img').on('click',function(){
        let imgSrc = $(this).attr('src');
        $('.modal-img').attr('src',imgSrc);
        $('.modal').fadeIn();
        return false
    });

    // --モーダル閉じる--
    $('.close-btn').on('click',function(){
        $('.modal').fadeOut();
        return false
    });
});