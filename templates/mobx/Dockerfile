FROM node:latest

# OS Foundations
ENV ROOT /home/www
RUN apt-get update && \
    apt-get dist-upgrade -y && \
    apt-get install apt-utils nginx htop vim -y && \
    mkdir -p $ROOT
WORKDIR $ROOT

# Prepare Application Sources
COPY ./package*.json $ROOT/
COPY ./src $ROOT/src
COPY ./public $ROOT/public

# Setup Application
ENV NODE_ENV development
RUN npm install && npm run build
ENV NODE_ENV production
RUN rm -r package* node_modules *.html

CMD [ "nginx", "-g", "daemon off;" ]
EXPOSE 80 443

