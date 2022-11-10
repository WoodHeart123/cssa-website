FROM nginx 
COPY dist/ /usr/share/nginx/dist/
COPY default.conf /etc/nginx/conf.d/default.conf