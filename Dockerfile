FROM node:alpine as thanksforthis
WORKDIR /var/app
COPY package.json ./
RUN yarn
COPY ./ ./
RUN yarn build


FROM nginx
EXPOSE 80
COPY --from=thanksforthis /var/app/build /usr/share/nginx/html