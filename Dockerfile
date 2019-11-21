FROM node:12-alpine
LABEL maintainer="r2.ai"

ENV PROJECT_DIR=/portal
WORKDIR $PROJECT_DIR

COPY . $PROJECT_DIR
RUN yarn config set registry https://registry.npm.taobao.org \
&& yarn --production

CMD npm start
