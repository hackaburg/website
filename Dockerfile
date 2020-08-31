FROM node:lts as build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

ARG GOOGLE_MAPS_API_KEY
ENV GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}

COPY . ./

EXPOSE 8080
CMD ["yarn", "serve:production"]