FROM node:latest

# Environment
ENV ROOT /home/www
ENV TEMP /tmp/www

# OS Foundations
RUN apt-get update && \
    apt-get dist-upgrade -y && \
    apt-get install apt-utils nginx htop vim net-tools -y && \
    mkdir -p $ROOT && mkdir -p $TEMP

# Prepare Application Sources
COPY ./package*.json $TEMP/
COPY ./src $TEMP/src
COPY ./public $TEMP/public

# Setup Application
WORKDIR $TEMP
ENV NODE_ENV development
RUN npm install && npm run build
ENV NODE_ENV production
RUN cp $TEMP/dist/* $ROOT/ && rm -rf $TEMP

WORKDIR $ROOT
EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]

