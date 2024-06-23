-- 🌟 Exercise 1 : Bootcamp
-- Instructions
-- For this exercise, you will have to find some requests on your own!



-- Create
-- Create a database called bootcamp.
-- Create a table called students.
-- Add the following columns:
-- id
-- last_name
-- first_name
-- birth_date
-- The id must be auto_incremented.
-- Make sure to choose the correct data type for each column.
-- To help, here is the data that you will have to insert. (How do we insert a date to a table?)


-- DROP DATABASE IF EXISTS bootcamp;
-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


DROP TABLE IF EXISTS students;

CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	last_name VARCHAR(64) NOT NULL,
	first_name VARCHAR(64) NOT NULL,
	birth_date DATE NOT NULL
);

-- Insert
-- Insert the data seen above to the students table. Find the most efficient way to insert the data.
-- Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).

INSERT INTO students
	(first_name, last_name, birth_date)
VALUES
	('Marc',   'Benichou', '02/11/1998'),
    ('Yoan',   'Cohen',    '03/12/2010'),
    ('Lea',    'Benichou', '27/07/1987'),
	('Amelia', 'Dux',      '07/04/1996'),
    ('David',  'Grez',     '14/06/2003'),
	('Omer',   'Simpson',  '03/10/1980');

INSERT INTO STUDENTS
	(first_name, last_name, birth_date)
VALUES
	('Dmitrii', 'Lishudi', '22/08/2001');

-- Select
-- Fetch all of the data from the table.
SELECT * FROM students;
-- Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students;
-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
SELECT first_name, last_name FROM students
WHERE id = 2;
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' AND first_name = 'Marc';
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' OR first_name = 'Marc';
-- It was not specified in instructions, so I search case-insensintive here
-- Fetch the students whose first_names contain the letter a.
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a%';
-- Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name FROM students
WHERE first_name ILIKE 'a%';
-- Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a';
-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name, last_name FROM students
WHERE first_name ILIKE 'a_%';sssssssssssssssssssssssssssssssss
-- Fetch the students whose id’s are equal to 1 AND 3 .
-- I'm really not sure why we use AND instead of OR here
SELECT first_name, last_name FROM students
WHERE id = 1 AND id = 3;
-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * FROM students
WHERE birth_date >= '1/01/2000';