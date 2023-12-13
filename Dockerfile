FROM node:lts AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

RUN mv build/index.html build/2023.html
FROM ratisbonacoding/nginx-cloudflare-cache
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
