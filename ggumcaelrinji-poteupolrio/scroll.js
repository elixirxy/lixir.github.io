$(document).ready(function() {
  // 마우스 휠 이벤트 리스너 추가
  $('body').on('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta < 0) {
      // 스크롤 다운 시 다음 섹션으로 이동
      $('html, body').animate({
        scrollTop: '+=100vh'
      }, 800);
    } else {
      // 스크롤 업 시 이전 섹션으로 이동
      $('html, body').animate({
        scrollTop: '-=100vh'
      }, 800);
    }
    updateIndicator();
  });

  // 윈도우 스크롤 이벤트 리스너 추가
  $(window).on('scroll', function() {
    updateIndicator();
  });

  function updateIndicator() {
    // 현재 보이는 섹션 계산
    var currentSection = Math.round($(window).scrollTop() / $(window).height()) + 1;

    // 인디케이터 업데이트
    $('.indicator-dot').removeClass('active');
    $('.indicator-dot:nth-child(' + currentSection + ')').addClass('active');
  }

  // 초기 위치 업데이트
  updateIndicator();

  // 페이지 인디케이터를 클릭하여 특정 섹션으로 이동
  function scrollToSection(sectionNumber) {
    $('html, body').animate({
      scrollTop: (sectionNumber - 1) * $(window).height()
    }, 800);
    updateIndicator();
  }
});
