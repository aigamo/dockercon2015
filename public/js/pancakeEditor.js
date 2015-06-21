var pancakeJs = {

	// edit for your environment
	endpoint : "http://localhost:8080",

	init : function() {
		this.getRunSheet();
		this.getNginxFlavor();
		this.sortablePlugin();
	},

	getRunSheet : function() {
		$.ajax({
			url : this.endpoint + "/data/from_sheet.json",
		}).done(
				function(data) {
					$.each(data.from, function(i, val) {
						$(sheet_ul).append(
								$("<li class=" + val.sheet_name + ">"
										+ val.value + "</li>"));
					});
					$("ul.droptrue").sortable({
						connectWith : "ul"
					});
				}).fail(function(data) {
		});

	},
	getNginxFlavor : function() {
		$.ajax({
			url : this.endpoint + "/data/nginx_flavor.json",
		}).done(
				function(data) {
					$.each(data.nginx, function(i, val) {
						$(flavor_ul).append(
								$("<li class=" + val.sheet_name + ">"
										+ val.value + "</li>"));
					});
					$("ul.droptrue").sortable({
						connectWith : "ul"
					});	
				}).fail(function(data) {
			console.log(data);
		});

	},
	sortablePlugin : function() {
		$("ul.droptrue").sortable({
			connectWith : "ul"
		});

		$("#sheet_ul, #flavor_ul, #editor_ul").disableSelection();
	}

}

pancakeJs.init();
