var pancakeJs = {

	// edit for your environment
	endpoint : "http://localhost:8080",

	init : function() {
		this.getRunSheet();
		this.getNginxFlavor();
	},

	getRunSheet : function(){
		$.ajax({
			url : this.endpoint + "/data/from_sheet.json",
		}).done(function(data) {
			var sheetTag = "<ul>";
			$.each(data.from, function(i, val) {
				$(sheet_ul).append($("<li class="+val.sheet_name+">" + val.value + "</li>"));
			});
		}).fail(function(data) {
			console.log(data);
		});
		
	},
	getNginxFlavor : function() {
		$.ajax({
			url : this.endpoint + "/data/nginx_flavor.json",
		}).done(function(data) {
			console.log(data);
			var sheetTag = "<ul>";
			$.each(data.nginx, function(i, val) {
				$(flavor_ul).append($("<li class="+val.sheet_name+">" + val.value + "</li>"));
			});
		}).fail(function(data) {
			console.log(data);
		});

	},

	showFlavorSheets : function(data) {

	}

}

pancakeJs.init();
