FROM node:lts AS build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

ARG GOOGLE_MAPS_API_KEY
ENV GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}

COPY . ./

FROM ratisbonacoding/nginx-cloudflare-cache
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
