$(function () {
    let sw = false;
    let index=0;
    $('.tab_manu li').on('click',function(event) {
        event.preventDefault();
        index = $(this).index();
        $('.tab_manu li a').css('color','#434343');
        $('.tab_manu li a').eq(index).css('color','rgb(0,213,100)');
        $('.maincontent_img ul').css('display','none');
        $('.maincontent_img ul').eq(index).css('display','flex');
    });

    //투표하기
    let voteval;
        $('.voteOk').click(function() {
            voteval = $('#voteMenu input:checked').val();
            //$('.whatVote').html('투표완료 : ' + voteval).css('color','rgb(0, 100, 213)');
            alert(voteval + '\n이달의 베스트 웹툰 투표가 완료되었습니다.\n ');
        });

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
            $('head').append('<link rel="stylesheet" href="css/indexDark.css">');
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
            //메인 메뉴 
            $('.tab_manu li a').css('color','#fff');
            $('.tab_manu li a').eq(index).css('color','rgb(0,213,100)');
            $('.tab_manu li').on('click',function() {
                $('.tab_manu li a').css('color','#fff');
                $('.tab_manu li a').eq(index).css('color','rgb(0,213,100)');
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
            //메인 메뉴
            $('.tab_manu li a').css('color','#434343');
            $('.tab_manu li a').eq(index).css('color','rgb(0,213,100)');
            $('.tab_manu li').on('click',function() {
                 $('.tab_manu li a').css('color','#434343');
                 $('.tab_manu li a').eq(index).css('color','rgb(0,213,100)');               
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


   
    
    
    