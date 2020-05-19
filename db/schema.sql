DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("tofu burger", false);

-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("cheeseburger", false);

