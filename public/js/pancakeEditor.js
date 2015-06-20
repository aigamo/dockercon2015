
var pancakeJs = {
		
		// edit for your environment
		endpoint : "http://localhost:8080",
		
		getSheet : function(){
			
		},
		
		getNginxFlavor : function(){
			$.getJSON(this.endpoint + "/data/nginx_flavor.json", function(json){
				console.log(json);
				  alert("JSON Data: " + json.nginx.from.value);
				});
			
		},
		
		parseJson : function(json){
			
		}

	
}

pancakeJs.getNginxFlavor();




