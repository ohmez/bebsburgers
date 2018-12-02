DROP DATABASE IF EXISTS bebsburgers;
CREATE DATABASE bebsburgers;
USE bebsburgers;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  devoured TINYINT,
  PRIMARY KEY(id)
);