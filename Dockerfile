FROM node:lts AS build

WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install

COPY . ./
RUN npm build

FROM ratisbonacoding/nginx-cloudflare-cache
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
