FROM httpd:2.4
COPY docker-dist/ /usr/local/apache2/htdocs/
EXPOSE 80
