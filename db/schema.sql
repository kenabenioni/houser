CREATE TABLE houses (
  house_id SERIAL PRIMARY KEY,
  property_name varchar(40),
  address varchar(40),
  city varchar(40),
  state varchar(40),
  zip INTEGER
);

INSERT INTO houses (property_name, address, city, state, zip)
VALUES ('duplex', '551 S Weird St.','Orem', 'UT', 84608);


