server {
	listen 80;
	listen [::]:80;

	root /home/ethan/hw02;

	index index.html;

	server_name hw02.plasticnapkin.com;

	location / {
		try_files $uri $uri/ =404;
	}
}
