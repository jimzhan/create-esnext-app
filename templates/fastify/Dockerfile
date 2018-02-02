FROM node:latest

# Setup Environment
ENV ROOT /server
ENV NODE $ROOT/node_modules/.bin

# Prepare Application Sources
RUN mkdir $ROOT
WORKDIR $ROOT
COPY ./package*.json $ROOT/
COPY ./src $ROOT/src

# Setup Application
RUN npm install --silent
ENV NODE_ENV production

RUN $NODE/rimraf $ROOT/dist
RUN $NODE/babel src -d dist
RUN $NODE/rimraf $ROOT/src

CMD [ "node", "dist/main.js" ]

