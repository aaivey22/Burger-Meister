
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(30) NOT NULL,
  devoured boolean default false, 
  PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("tofu burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("cheeseburger", false);

