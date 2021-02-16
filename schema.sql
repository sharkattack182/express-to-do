CREATE DATABASE to_do_db;

USE to_do_db;

CREATE TABLE to_dos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    note_name VARCHAR(50),
    note_content VARCHAR(150)
);

INSERT INTO to_dos (note_name, note_content)
VALUES ("Wake Up", "Get out of bed and start the morning routine."),("Morning Routine", "Shower, Brush Teeth, Get Dressed, Make Breakfast");


SELECT * FROM to_dos;