$(function () {
    let clearSW = false;
    let sw = false;
    let position, x, y;
    let penWidth = 1;
    let oldColor, oldWidth;
    let penColor = '#000';
    let can = document.querySelector('.canv');
    let context = can.getContext('2d');
    $('.opt').click(function () {
        $(this).next().toggle();
    });
    $('select').change(function () {
      penWidth=$('select>option:selected').val();
    });
    let bgImage = new Image();
    bgImage.src = "images/dai1.jpg";
    bgImage.onload = function() {
        context.globalAlpha = 0.1;
        context.drawImage(bgImage, 0, 0, can.width, can.height);
    };
    $('.colorChange').on('change', function () {
      penColor = $(this).val();
    });
    $('.backChange').on('change', function () {
      $('.canvas_area').css('background',$(this).val());
    });
    
    $(document).ready(function() {
        $('.draw_option button').click(function() {
            bgImage.src = "images/dai" + Math.round(Math.random()*5+1) +".jpg";
            context.clearRect(0, 0, can.width, can.height);
            bgImage.onload = function() {
            context.drawImage(bgImage, 0, 0, can.width, can.height);
            };
        });
        $('.clear').click(function() {
            context.clearRect(0, 0, can.width, can.height);
            bgImage.onload = function() {
            context.drawImage(bgImage, 0, 0, can.width, can.height);
            };
        });
    });
    $(can).on({
        mouseenter: function(event) {
            window.scrollTo(0, 0);
        },
        mousedown: function(event) {
            sw = true;
            window.scrollTo(0, 0);
            position = $(this).offset();
            x = event.clientX - position.left;
            y = event.clientY - position.top;
            context.beginPath();
            context.moveTo(x, y);
        },
        mousemove: function(event) {
            if (sw) {
                window.scrollTo(0, 0);
            position = $(this).offset();
            x = event.clientX - position.left;
            y = event.clientY - position.top;
            context.lineWidth = penWidth;
            context.strokeStyle = penColor;
            context.lineTo(x, y);
            context.stroke();
            }
        },
        mouseup: function(event) {
            sw = false;
        }
});
//리뷰 슬라이드 구현 함수
let review_index = 0;
reviewSlider(review_index);
$('.right_review').click(function () {
    review_index++;
    reviewSlider(review_index);
});
$('.left_review').click(function () {
    review_index--;
    reviewSlider(review_index);
});
function reviewSlider(review_index) {
    if(review_index < 3 && review_index > 0) {
        $('.right_review').fadeIn(500);
        $('.left_review').fadeIn(500);
    }
    if(review_index == 3) {
        $('.right_review').fadeOut(500);
    }
    if(review_index == 0) {
        $('.left_review').fadeOut(500);
    }
    $('.reviewImg div').animate({
        left : -(review_index*688)
    },'fast');
}
// 이미지 선택별 리뷰창 보이기
let div_index = 0;
$('.reviewImg div').click(function () {
    div_index = $(this).index();
    $('.reviewText').hide();
    $('.reviewText').eq(div_index).show();
});
//리뷰 등록 이벤트  
$('.goreview').click(function () {
    let reviewText = $('textarea').val();
    $('textarea').val('');
    let newDiv = $('<div></div>');
    newDiv.append('<p>' + reviewText + '</p>');
    $('.reviewText').eq(div_index).find('.inner').prepend(newDiv);
});


});