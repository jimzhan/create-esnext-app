FROM node:latest

# Environment
ENV ROOT /home/www
ENV TEMP /tmp/www

# OS Foundations
RUN apt-get update && \
    apt-get dist-upgrade -y && \
    apt-get install apt-utils nginx htop vim -y && \
    mkdir -p $ROOT && mkdir -p $TEMP && mkdir -p /home/etc

# Prepare Application Sources
COPY ./.bashrc $HOME/
COPY ./package*.json $TEMP/
COPY ./src $TEMP/src
COPY ./public $TEMP/public
COPY ./etc/nginx.conf /home/etc/

# Setup Application
WORKDIR $TEMP
ENV NODE_ENV development
RUN npm install && npm run build
ENV NODE_ENV production
RUN cp $TEMP/dist/* $ROOT/ && rm -rf $TEMP

WORKDIR $ROOT
EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;", "-c", "/home/etc/nginx.conf" ]

