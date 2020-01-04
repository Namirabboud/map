function lineDistance(x, y, x0, y0){
	return Math.sqrt((x -= x0) * x + (y -= y0) * y);
}

function drawLine(a, delay, width) {
	var size = document.getElementById(a.attr('id')).getBoundingClientRect();
	var cx = a.offset().left + size.width/2;
	var cy = a.offset().top + size.height/2;

	var b = $('.point_b');
	var c = $('.point_a');

	c.offset({top: cy, left: cx});

	var pointA = c.offset();

	b.offset({top: pointA.top, left: pointA.left - width });

	var pointB = b.offset();
	var pointAcenterX = a.width() / 2;
	var pointAcenterY = a.height() / 2;
	var pointBcenterX = b.width() / 2;
	var pointBcenterY = b.height() / 2;
	var angle = Math.atan2(pointB.top - pointA.top, pointB.left - pointA.left) * 180 / Math.PI;
	var distance = lineDistance(pointA.left, pointA.top, pointB.left, pointB.top);

	var line = $('.line');
	line.width('0');

	// Set Angle
	line.css('transform', 'translateX(-100%)');

	// Set Width
	line.stop(true, true).delay(delay).animate({width: distance});

	// Set Position
	line.css('position', 'absolute');

	line.offset({top: pointA.top + pointAcenterY, left: pointA.left + pointAcenterX});
}

$(document).ready(function(){
	$('.branches_numbers').find('.vew-branches-btn').hide();

	$('.st15:not(.active)').click(function(){
		var section = $(this);

		$(this).addClass('active');

		$('.st15').not($(this)).removeClass('active');

		var id = $(this).attr('id');

		if(id == 'BAALBAK' || id == 'HERMEL' || id == 'RASHAYYA' || id == 'HASBAYYA')
			width = 250;

		else if(id == 'TYRE' || id == 'SAIDA')
			width = 150;
		else
			width = 200;

		drawLine(section, '0.3', width);

		$('.kazaa-name').html(id);
	});

	//trigger beirut first
	$('.st15#BEIRUT').trigger('click');
})
