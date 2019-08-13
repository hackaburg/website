FROM node:latest AS build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . ./
RUN /app/scripts/build-site-and-subsites.sh

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
