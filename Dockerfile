FROM nginx:1.28-alpine-slim

# Create non-root user and group
RUN addgroup -S astro && adduser -S astro -G astro

# Remove default files
RUN rm -rf /usr/share/nginx/html/*

# Copy static files
COPY dist/ /usr/share/nginx/html/

# Copy secure nginx config, which is owned by root
COPY nginx.conf /etc/nginx/nginx.conf

# become astro user so you are rootless
RUN chown -R astro:astro /usr/share/nginx/html

EXPOSE 80

# Default command remains
