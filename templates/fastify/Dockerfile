FROM node:latest

# Setup Environment
ENV NPM_CONFIG_LOGLEVEL warn
ENV HOME /home/www

# Prepare Application Sources
RUN npm install --global pm2
RUN mkdir -p $HOME
WORKDIR $HOME
COPY ./.bashrc $HOME/
COPY ./package*.json $HOME/
COPY ./process.yml $HOME/
COPY ./src $HOME/src

# Setup Application
ENV NODE_ENV development
RUN npm install
RUN npm run build
RUN npm prune --production
RUN rm -r src

CMD [ "pm2-docker", "start", "process.yml" ]
