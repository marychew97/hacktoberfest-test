$(function() {

    $('.box div').addClass('bg-secondary');
    
    $('#coba_klik').on('click', function() {
        $('.box').toggle();
    });
});