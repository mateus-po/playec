FROM node:20.13.1-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD build ./build
EXPOSE 8080
CMD ["npm", "start"]