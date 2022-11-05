FROM node:18
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

ARG PORT=8000
ENV PORT=${PORT}

EXPOSE $PORT
CMD ["npm", "start"]