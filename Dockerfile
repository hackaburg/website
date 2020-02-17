FROM node:latest AS build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

ARG GOOGLE_MAPS_API_KEY
ENV GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}

COPY . ./
RUN /app/scripts/build-site-and-subsites.sh

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
