(function createsvg() {
	// set size of pancake slate
	var svg = d3.select("#example").append("svg").attr({
		width : 640,
		height : 200
	});
	// add drag event
	var drag = d3.behavior.drag().on("drag", function(d, i) {
		d.x += d3.event.dx
		d.y += d3.event.dy
		d3.select(this).attr("transform", function(d, i) {
			return "translate(" + [ d.x, d.y ] + ")"
		})
	});
	var c1 = [ 100, 90, 60 ];

	var circle = svg.selectAll('circle').data([ c1 ]).enter().append('ellipse')
			.attr({
				'cx' : function(d) {
					return d[0];
				},
				'cy' : function(d) {
					return d[1];
				},
				'rx' : function(d) {
					return d[2];
				},
				'ry' : function(d) {
					return d[3];
				}

			}).call(drag);
})();
