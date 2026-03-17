This document explains how the database for the portfolio contact form was set up using MariaDB (XAMPP) and connected to a Node.js backend.


## Stop already running apache
isfandyarkhan@imian:/$ sudo systemctl stop apache2

## Then start apache again
isfandyarkhan@imian:/$ sudo /opt/lampp/lampp start

## Start MariaDB (XAMPP)
isfandyarkhan@imian:~$  cd /opt/lampp/bin
isfandyarkhan@imian:/opt/lampp/bin$  ./mysql -u root -p

## database
CREATE DATABASE portfolio;
USE portfolio;

## Create Table (contacts)
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

## Verify table
SHOW TABLES;
DESCRIBE contacts;
SELECT * FROM contacts;

## Create Node.js + Express backend in project folder
mkdir portfolio-backend
cd portfolio-backend
npm init -y
npm install express mariadb cors body-parser dotenv

## then create server,js file inside portfolio-backend

## then run in terminal 
isfandyarkhan@imian:~/my-portfolio/portfolio-backend$ node server.js

## to test if backend is running 
First type: isfandyarkhan@imian:~/my-portfolio/portfolio-backend$ node server.js
Then this will appear: Server running at http://localhost:5000 , click this link it will display portfolio backend running.

## I also created .env file to keep my credentials safe.
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
PORT=
