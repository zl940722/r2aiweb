FROM node:12-alpine
LABEL maintainer="r2.ai"

ENV PROJECT_DIR=/portal

WORKDIR $PROJECT_DIR

COPY package.json $PROJECT_DIR/package.json

RUN yarn config set registry https://registry.npm.taobao.org \
&& yarn --production

COPY . $PROJECT_DIR

CMD yarn start
