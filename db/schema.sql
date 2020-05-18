
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(50) NOT NULL,
  devoured BOOLEAN default false, 
  PRIMARY KEY (id)
);

-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("tofu burger", false);

-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("cheeseburger", false);

