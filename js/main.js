// ▼ 【navbar】漢堡按鈕 ▼
$('#btnMenu').click(function () {
    $(this).children('div').toggleClass('active');
    $(this).nextAll().slideToggle(500);
    $('#navBg').toggleClass('open');
    $(".nav-top").toggleClass('open');
});
$('#navBg').click(function () {
    $(this).removeClass('open');
    $('#btnMenu').children('div').removeClass('active');
    $('.nav-top').removeClass('open');
});
// ------------------------------------------------------
// Footer back To Top ▼
$('#topBtn').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 300);
});
// ------------------------------------------------------
//  Footer 右下角聯繫泡泡 
$('.js-btn-talk').click(function () {
    $(this).prevAll().toggleClass('d-none');
    $('.contact-circle').prevAll().css('border', '1px solid #eee');
});
// ------------------------------------------------------
// 表單送出後提示
function formAlert() {
    var isPass = true;

    if (isPass) {
        $('#bookingModal').modal('hide');
        $('#overlay').modal('show');
        setTimeout(function () {
            $('#overlay').modal('hide');
            location.href = './';
        }, 3000);
    }

    return false;
}