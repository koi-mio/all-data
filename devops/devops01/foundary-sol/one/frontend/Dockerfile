FROM node:18.19.1

WORKDIR  /app

COPY . .

RUN npm install  -g http-server 

EXPOSE 5173

CMD ["http-server", "-p", "5173"]



