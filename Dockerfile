FROM node:12.18 AS build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

ARG GOOGLE_MAPS_API_KEY
ENV GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}

COPY . ./

RUN yarn build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
