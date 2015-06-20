
var nginx_flavor={
	"nginx" : { 
		  "from": {
		 	 "sheet_id" : "101",
		 	 "image_id" : "428b411c28f0",
		 	 "value": 'FROM ubuntu:latest'
		  },
		  "run": {
		 	 "sheet_id" : "201",
		 	 "image_id" : "428b411c28f0",
		 	 "value": 'RUN \
			  add-apt-repository -y ppa:nginx/stable && \
		 	 apt-get update && \
		 	 apt-get install -y nginx && \
		 	 rm -rf /var/lib/apt/lists/* && \
		 	 echo "\ndaemon off;" >> /etc/nginx/nginx.conf && \
		 	 chown -R www-data:www-data /var/lib/nginx'
		  },
		  "volume": {
		 	 "sheet_id" : "301",
		 	 "image_id" : "428b411c28f0",
		 	 "value": 'VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]'
		  },
		  "workdir" : {
		  	"sheet_id" : "401",
		  	"image_id" : "428b411c28f0",
		  	"value": "WORKDIR /etc/nginx
		  	"
		  },
		  "cmd" : {
		  	"sheet_id" : "501",
		  	"image_id" : "428b411c28f0",
		  	"value": 'CMD ["nginx"]'
		  }
		  "expose" : {
		  	"sheet_id : "601",
		  	"image_id" : "428b411c28f0",
		  	"value" : 'EXPOSE 80'
		  },
		    "expose" : {
		  	"sheet_id : "602",
		  	"image_id" : "428b411c28f0",
		  	"value" : 'EXPOSE 80'
		  }

		}
}



