FROM node:14.16.0 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i --only=development
RUN npm i g rimraf
COPY . .
RUN npm run build

FROM node:14.16.0-alpine as prod
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i --only=production
COPY . .
COPY --from=build /usr/src/app/dist ./dist
CMD ["npm", "run", "start:prod"]

#docker build -t employee-service
#docker run -p 3000:3000 --name employee -d employee-service