$(function () {
    let showSW = false;
    let content_index = 0;
    moveSlider(content_index);
    $('.right_control').click(function () {
        content_index++;     
        moveSlider(content_index);
    });
    $('.left_control').click(function () {
        content_index--;     
        moveSlider(content_index);
    });
    
    // 이미지 슬라이드 구현 함수
    function moveSlider(content_index) {
        if(content_index < 2 && content_index > 0) {
            $('.right_control').fadeIn(500);
            $('.left_control').fadeIn(500);
        }
        if(content_index == 2) {
            $('.right_control').fadeOut(500);
        }
        if(content_index == 0) {
            $('.left_control').fadeOut(500);
        }
        $('#contents div').animate({
            top : -(content_index*795)
        },'fast');
    }
    //펼쳐보기 클릭 이벤트
    $('.show_all').click(function () {
        showSW =! showSW;
        if(showSW) {
            $('#contents').css({
                height : '2450px',
                overflow: 'visible',
                marginBottom : '50px'
            });
            $(this).css('top','2440px').html('모아보기');
            $('#contents div').css('top',0);
            $('.left_control,.right_control').css('display','none'); 
        }else {
            $('#contents').css({
                height : '795px',
                overflow: 'hidden',
            });
            $(this).css('top','800px').html('펼쳐보기');
            $('.left_control,.right_control').css('display','block'); 
        }
    });
    //웹소설 슬라이드 구현 함수
    let novel_index = 0;
    novelSlider(novel_index);
    $('.right_novel').click(function () {
        novel_index++;
        novelSlider(novel_index);
    });
    $('.left_novel').click(function () {
        novel_index--;
        novelSlider(novel_index);
    });
    function novelSlider(novel_index) {
        if(novel_index < 3 && novel_index > 0) {
            $('.right_novel').fadeIn(500);
            $('.left_novel').fadeIn(500);
        }
        if(novel_index == 3) {
            $('.right_novel').fadeOut(500);
        }
        if(novel_index == 0) {
            $('.left_novel').fadeOut(500);
        }
        $('#novel li').animate({
            left : -(novel_index*712)
        },'fast');
        $('.novel_button').css('bottom',1);
        $('.novel_button').eq(novel_index).css('bottom',31);
    }
});