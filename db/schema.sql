USE CRUD_NOTE_TAKER_db;


CREATE TABLE notes (
    id int NOT NULL AUTO_INCREMENT,
    Title varchar(30) NOT NULL,
    Body TEXT(500) NOT NULL,
    PRIMARY KEY(id)
);

