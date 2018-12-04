DROP DATABASE IF EXISTS bebsburgers;
CREATE DATABASE bebsburgers;
USE bebsburgers;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  devoured TINYINT DEFAULT false,
  PRIMARY KEY(id)
);

INSERT INTO burgers (name) VALUES ('cheeseburger');
SELECT * FROM burgers;