DROP DATABASE IF EXISTS suggestions;

CREATE DATABASE suggestions;

USE suggestions;


CREATE TABLE stock_info ( 
id INT AUTO_INCREMENT PRIMARY KEY,
stock_name VARCHAR(255),
analyst_buy VARCHAR(255),
current_stock_price VARCHAR(255),
price_change VARCHAR(255),
url_link VARCHAR(255)
);

CREATE TABLE related_stocks (
id INT AUTO_INCREMENT PRIMARY KEY,
stock_id INT,
other_stock_id INT,
FOREIGN KEY (stock_id) REFERENCES stock_info(id)
FOREIGN KEY (other_stock_id) REFERENCES stock_info (id)
)




-- mysql -u root < schema.sql

