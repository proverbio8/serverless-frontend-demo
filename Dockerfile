# Stage 1 - Build
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - Run with Nginx
FROM nginx:1.21-alpine
COPY --from=build /app/build /usr/share/nginx/html

#secure nginx configuration
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /var/cache/nginx/ && \
    chown -R nginx:nginx /var/log/nginx/ && \
    chown -R nginx:nginx /etc/nginx/nginx.conf && \
    addgroup nginx root && \
    chmod 777 /var/cache/nginx /var/run/ /var/log/nginx/

USER nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
