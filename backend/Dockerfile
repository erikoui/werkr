FROM node:lts AS development

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /api

ARG PORT=80
ENV PORT $PORT 
EXPOSE $PORT 5432

COPY package.json /api/package.json
COPY package-lock.json /api/package-lock.json
RUN npm ci

COPY . /api

CMD ["node", "src/index.js"]