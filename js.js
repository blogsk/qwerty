$(document).ready(function(){
$(".maslo").knob({
	'angleArc':90 ,
	'angleOffset':-140,
	'min':0,
	'max':70
});
$(".tacho").knob({
	'angleArc': 220 ,
	'angleOffset':-110,
	'min':0,
	'max':8000
});
$(".speed").knob({
	'angleArc':220 ,
	'angleOffset':-110,
	'min':0,
	'max':320
});
$(".benz").knob({
	'angleArc':90 ,
	'angleOffset':50,
	'min':0,
	'max':80,
	'rotation':'anticlockwise'
});
});