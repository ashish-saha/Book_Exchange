$(function() {
    $('#login-form-link').click(function(e) {
    	$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
});
function hideorg()
{

    document.getElementById("org").style.visibility="hidden";
    document.getElementById("SU").style.visibility="visible";

}

function hideSU()
{
    //document.getElementById("SU").style.visibility="hidden";
    document.getElementById("org").style.visibility="visible";

}
