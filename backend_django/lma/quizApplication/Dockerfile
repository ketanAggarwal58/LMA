FROM python:3.8.3-buster

# Updating all the linux packages.
RUN apt-get update

# Upgrading the Pip version
RUN pip3 install --upgarde pip

ENV PYTHONUNBUFFERED=1

#  Adding an working directory
WORKDIR /app

ADD . /app

# Making a copy of Requirements.txt file
COPY ./requirements.txt /app/ 

# Add all the python dependies 
RUN pip install -r requirements.txt

# Making a copy of whole application.
COPY . /app

# Exposing the Port number 8000
EXPOSE 8000