CREATE DATABASE 'burgers_db';
USE 'burgers_db';

CREATE TABLE 'burgers'(
	'id' Int(10) AUTO_INCREMENT NOT NULL,
	'burger_name' VARCHAR(200) NOT NULL,
	'devoured' BOOLEAN(10) NOT NULL,
	'date' TIMESTAMP(20) NOT NULL,

	PRIMARY KEY ('id') );

