$(function () {
    $('.webb select').change(function() {  // select 요소의 값이 변경되면
        let selectVal = [];      // 선택된 값을 저장할 배열 생성
        $('.webb select').each(function() { // 모든 select 요소에 대해 반복문 실행
            selectVal.push($(this).val()); // 선택된 값 배열에 해당 값을 추가
        });
        $('.webb select').not(this).find('option').each(function() { // 현재 선택된 select 요소를 제외한 나머지 select 요소들의 option 요소를 찾음
        if ($.inArray($(this).val(), selectVal) !== -1) { // 선택된 값 배열에 해당 option의 값이 존재한다면
            $(this).prop('disabled', true); // 해당 option을 비활성화 처리
        } else {
            $(this).prop('disabled', false); // 아니라면 해당 option을 활성화 처리
        }
        });
    });
});