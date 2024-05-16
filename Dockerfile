FROM node:20.13.1-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD build ./build
ADD public ./public
ADD views ./views
EXPOSE 8080
CMD ["npm", "start"]