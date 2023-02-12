FROM node:18.13-alpine as builder

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

# we copy all "/app" folder
# that we builded to our project to nginx
FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# builder is our "builder" variable that we defined
# "/app/build" is the path of our build
# now our frontend app will run on port 3000 as we defined
COPY --from=builder /app/build /usr/share/nginx/html