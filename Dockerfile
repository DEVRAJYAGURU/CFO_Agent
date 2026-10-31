# Production-ready lightweight NGINX Alpine image for Dexpense
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy Dexpense application files
COPY . /usr/share/nginx/html/

# Expose HTTP port 80 inside container
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
