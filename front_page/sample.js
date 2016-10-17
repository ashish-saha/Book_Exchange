$( document ).ready(function() {
    if ($( window ).width() < 1645) {
    $('#S3').css('left', ($( window ).width() - 1000 + 4) / 2);
    }
    if ($( window ).width() < 1000) {

    }
    else if ($( window ).width() < 500) {

    }
});

$( window ).resize(function() {
    if ($( window ).width() < 1645) {
    $('#S3').css('left', ($( window ).width() - 1000 + 4) / 2);
    }
    if ($( window ).width() < 1000) {

    }
    else if ($( window ).width() < 500) {

    }
});