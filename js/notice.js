$(function () {
    //다른 페이지에서 공지사항을 클릭 후 넘어왔을 때
    let hash = window.location.hash;
    $(hash);
    $(hash).children('dd').show();
    $(hash).children('.open').show();
    //공지사항
    let btnSW = false;
    $('dt').click(function() {
        $('dt').not(this).next().hide();
        $('dt').not(this).siblings('.open').hide();
        $(this).next().toggle();
        $(this).siblings('.open').toggle();
        btnSW=false;
        $('.imgdd').css({
            overflow : 'hidden',
            height : '500px'
        });
        $('#noticeArea .open').html('펼쳐보기');
    });
    $('#noticeArea .open').click(function () {
        btnSW =! btnSW;
        if(btnSW) {
            $(this).html('모아보기');
            $(this).prev().css({
                overflow : 'visible',
                height : 'auto'
            });
        }else {
            $(this).html('펼쳐보기');
            $(this).prev().css({
                overflow : 'hidden',
                height : '500px'
            });
        }
    });

    let sw = false;
    let rankIndex=0;
    $('.timeRankh4 > h4').click(function (event) {
        event.preventDefault();
        rankIndex = $(this).index();
        $('.allRank').hide();
        $('.allRank').eq(rankIndex).show();
        $('.timeRankh4 > h4').css('background-color', '#fff');
        $('.timeRankh4 > h4 a').css('color', '#434343');
        $(this).css('background-color', 'rgb(0, 213, 100)');
        $(this).find('a').css('color', '#fff');
    });

    $('#changeLight').hover(function () {
        $(this).css({
            backgroundColor : 'rgb(64,64,64)',
            color : '#fff'
        });
    }, function () {
        $(this).css({
            backgroundColor : '#fff',
            color : '#555'
        });
    });

    $('#changeLight').click(function() {
        sw =!sw;
        if(sw) {
            $('head').append('<link rel="stylesheet" href="css/noticeDark.css">');
            $(this).html('라이트 모드로 보기');
            $(this).css({
                backgroundColor : 'rgb(52, 54, 56)',
                color : 'rgb(194, 201, 210)'
            });
            $('#changeLight').hover(function () {
                $(this).css({
                    backgroundColor : 'rgb(83,87,92)',
                    color : '#fff'
                });
            }, function () {
                $(this).css({
                    backgroundColor : 'rgb(52, 54, 56)',
                    color : 'rgb(194, 201, 210)'
                });
            });
            //인기급상승
            $('.timeRankh4 > h4').css('background-color', 'rgb(30,31,32)');
            $('.timeRankh4 > h4').eq(rankIndex).css('background-color', 'rgb(0,213,100)');
            $('.timeRankh4 > h4 a').css('color', '#fff');
            $('.timeRankh4 > h4').click(function () {
                $('.timeRankh4 > h4').css('background-color', 'rgb(30,31,32)');
                $(this).css('background-color', 'rgb(0, 213, 100)');
                $('.timeRankh4 > h4').find('a').css('color', '#fff');
            });
            //다크모드 버튼
        } else {
            $('head').children('link').last().remove(); 
            $('#changeLight').html('다크 모드로 보기');  
            $(this).css({
                backgroundColor : '#fff',
                color : '#555'
            });
            $('#changeLight').hover(function () {
                $(this).css({
                    backgroundColor : 'rgb(64,64,64)',
                    color : '#fff'
                });
            }, function () {
                $(this).css({
                    backgroundColor : '#fff',
                    color : '#555'
                });
            });
            //인기급상승
            $('.timeRankh4 > h4').css('background-color', '#fff');
            $('.timeRankh4 > h4').eq(rankIndex).css('background-color', 'rgb(0,213,100)');
            $('.timeRankh4 > h4 a').css('color', '#434343');
            $('.timeRankh4 > h4 a').eq(rankIndex).css('color','#fff');
            $('.timeRankh4 > h4').click(function () {
                $('.timeRankh4 > h4').css('background-color', '#fff');
                $(this).css('background-color', 'rgb(0, 213, 100)');
                $('.timeRankh4 > h4 a').css('color', '#434343');
                $(this).find('a').css('color', '#fff');
            });
        }  
    });
});