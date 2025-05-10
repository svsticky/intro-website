FROM nginx:1.28-alpine-slim

ARG BUILD_NUMBER=notset

# Create non-root user and group
RUN addgroup -S astro && adduser -S astro -G astro

# Remove default files
RUN rm -rf /usr/share/nginx/html/*

# Copy static files
COPY dist/ /usr/share/nginx/html/
RUN echo ${BUILD_NUMBER} > /usr/share/nginx/html/version.txt

# Copy secure nginx config, which is owned by root
COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /var/cache/nginx/client_temp /run && \
    chown -R astro:astro /var/cache/nginx /run

# become astro user so you are rootless
USER astro

EXPOSE 8080

# Default command remains
