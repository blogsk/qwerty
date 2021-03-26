$(document).ready(function(){
$(".maslo").knob({
	'angleArc':360 ,
	'min':0,
	'max':70
});
$(".tacho").knob({
	'angleArc': 360 ,
	'min':0,
	'max':8000
});
$(".speed").knob({
	'angleArc':360 ,
	'min':0,
	'max':320
});
});



function clock(){
	var $s = $(".second"),
	$m = $(".minute"),
	$h = $(".hour");
	d = new new Date(),
	s = d.getSeconds(),
	m = d.getMinutes(),
	h = d.getHours();
	$s.val(s).trigger("change");
	$m.val(m).trigger("change");
	$h.val(h).trigger("change");
	setTimeout("clock()", 1000)
}