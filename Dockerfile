FROM node:12.18 AS build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

RUN yarn build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
