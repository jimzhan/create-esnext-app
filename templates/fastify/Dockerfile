FROM keymetrics/pm2:latest-alpine

# Setup Environment
ENV NODE_ENV development
ENV NPM_CONFIG_LOGLEVEL warn
ENV HOME /home/www

# Prepare Application Sources
RUN mkdir -p $HOME
WORKDIR $HOME
COPY ./p*.json $HOME/
COPY ./src $HOME/src

# Setup Application
RUN npm install
RUN npm run build
RUN rm -r src
RUN npm prune --production

CMD [ "pm2-runtime", "start", "pm2.json" ]

