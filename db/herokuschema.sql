USE wrvkq0zxjk6tf1k2;
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  devoured TINYINT DEFAULT false,
  PRIMARY KEY(id)
);
