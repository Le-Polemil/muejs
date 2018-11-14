# based on a pre-existing node 10 image
FROM node:latest

# creator
MAINTAINER Cobelt Dierk <cobelt60@gmail.com>

ENV APP_PATH=/app/muejs
ENV NODE_MODULES_BIN=$APP_PATH/node_modules/.bin

# set working directory
RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

# add `/app/muejs/node_modules/.bin` to $PATH
ENV PATH $NODE_MODULES_BIN:$PATH

# Install vim
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get -y -q install curl vim build-essential && \
	  rm -rf /var/lib/apt/lists/*

# Install node && yarn
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install nodejs yarn



# Insall node_modules first to use cache
COPY ./package.json $APP_PATH/package.json
RUN cd $APP_PATH && yarn

# Copy all sources in INSTALL_PATH
COPY ./ ./

EXPOSE 80

# start app
CMD ["yarn", "start"]