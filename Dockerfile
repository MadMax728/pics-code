FROM node:latest

RUN mkdir -p /app/picstgraph_web

WORKDIR /app/picstgraph_web

# Install app dependencies
COPY package.json /app/picstgraph_web

#RUN npm cache clean --force && npm install
RUN npm install


# Bundle app source
COPY . /app/picstgraph_web

# Build the built version
EXPOSE 8080

#RUN npm run serve

CMD ["npm", "run", "start"]