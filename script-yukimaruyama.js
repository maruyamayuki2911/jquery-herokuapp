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

    // メニュー　リンクのホバー時に不透明度をアニメーション
    $('.home').on('mouseenter', function () {
        $('.home').animate({ opacity: 0.5 }, 400);
    });

    $('.home').on('mouseleave', function () {
        $('.home').animate({ opacity: 1.0 }, 400);
    });

    $('#about-nav').on('mouseenter', function () {
        $('#about-nav').animate({ opacity: 0.5 }, 400);
    });

    $('#about-nav').on('mouseleave', function () {
        $('#about-nav').animate({ opacity: 1.0 }, 400);
    });

    $('#works-nav').on('mouseenter', function () {
        $('#works-nav').animate({ opacity: 0.5 }, 400);
    });

    $('#works-nav').on('mouseleave', function () {
        $('#works-nav').animate({ opacity: 1.0 }, 400);
    });

    // スクロール時にAbout、Worksを表示
    $(document).ready(() => {
        $(window).on('scroll', () => {
            let scrollDistance = $(window).scrollTop();

            console.log(scrollDistance);
            if (scrollDistance > 600) {
                $('.works').addClass('visible');
            }
            else if (scrollDistance > 250) {
                $('.about').addClass('visible');
            }
        });

        $('#about-nav').on('click', () => {
            $('.about').addClass('visible');
            $('.works').addClass('visible');
        });

        $('#works-nav').on('click', () => {
            $('.about').addClass('visible');
            $('.works').addClass('visible');
        });
    });


    //スクロール時にTOPボタンをフェードイン
    $(window).scroll(() => {
        if ($(window).scrollTop() > 100) {
            $('#back-btn').fadeIn();
        } else {
            $('#back-btn').fadeOut();
        }
    });

    // Works画像ホバー時に不透明アニメーション
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


    // リンクをなめらかにスクロール
    $('a[href^="#"]').on('click', (event) => {
        //デフォルトアクションの阻止
        event.preventDefault();   

        // .attr('href')・・・href属性を取得
        let targetId = $(event.target).attr('href');
        let target;

        // href属性に'#'のみの場合、トップへ
        if(targetId == '#'){
            target = $('html');
        //上記以外 
        }else {
            target = targetId;
        }

        // 要素まで距離を取得
        let targetPosition = $(target).offset().top;

        
        $('html,body').animate({
            scrollTop: targetPosition
        }, 500);
    });

});