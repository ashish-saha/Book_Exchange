$(document).ready(function () {
	setMiddleSectionPosition();
});

$(window).resize(function () {
	setMiddleSectionPosition()
});

function setMiddleSectionPosition() {
	if ($(window).width() >= 1230 && $(window).width() < 2400) {

		//OPTIONAL 1
		//this is for when background image is keeping aspect ratio (not streching only in width), comment if wanted - also uncomment OPTIONAL 2 part in book.css
		// $('#middleSection').css('height', ($('#mainSection').height() * 0.5) + (($(window).width() - 1250) / 4));
		// $('#middleSection').css('top', 155 - (($(window).width() - 1245) / 8));
		//OPTIONAL 1
	}
	if ($(window).width() >= 758 && $(window).width() < 1230) {
		$('#middleSection').css('left', ($(window).width() - 742) / 2);
		$('#middleSection').css('height', 296);
	}
	if ($(window).width() < 758) {
		$('#middleSection').css('left', ($(window).width() - 248) / 2);
		$('#middleSection').css('height', 296);

	}
}