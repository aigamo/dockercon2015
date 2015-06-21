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
						connectWith : "ul",
						over : function(event, ui) {
							$("#alert_area").empty();
							pancakeJs.validate(ui.item);

						}
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
	},
	validate : function(ui) {
		var fromCheck = 0;
		$.each($("#editor_ul>li"), function(i, val) {
			if ($(val).hasClass("from")) {
				fromCheck++;
				if ($(ui).attr("class").lastIndexOf('from', 0) === 0) {
				}
				if ($(val).text().lastIndexOf('ubuntu', 0) === 0) {

				}

			}
			if ($(val).hasClass("run")) {
				if (fromCheck < 1) {
					pancakeJs.alertMessage("FROM Layer is Empty");
				}
			}
		});
		console.log(fromCheck);

		if (fromCheck > 1) {
			pancakeJs.alertMessage("FROM Layer shoud be Single");
		}

	},
	alertMessage : function(message) {
		$("#alert_area").empty();
		var alertMessage = '<div class="alert alert-danger" role="alert">\
		<span class="glyphicon glyphicon-exclamation-sign"\
			aria-hidden="true"></span> <span class="sr-only">Error:</span>'
				+ message + '</div>'
		$("#alert_area").append(alertMessage);
	},
	clearMessage : function() {
		$("#alert_area").empty();

	}

}

pancakeJs.init();

$("ul.droptrue").on("sortover", function(event, ui) {
});
