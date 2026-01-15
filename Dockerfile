FROM httpd:2.4
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
