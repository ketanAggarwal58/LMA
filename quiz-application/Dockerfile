FROM node:14.17.3

# Updating all the linux packages.
RUN apt-get update

# Adding an working directory
WORKDIR /frontend

COPY package.json package-lock.json ./
RUN npm install 

# Adding all the Node JS dependencies which are used in the application.
RUN npm install

COPY . ./

# Exposing the Port number 3000
EXPOSE 3000

# Running the Frontend Project.
CMD ["npm", "start"]