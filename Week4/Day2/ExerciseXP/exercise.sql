-- 🌟 Exercise 1 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.

-- Use SQL to get the following from the database:
-- 1. All items, ordered by price (lowest to highest).
SELECT * FROM items
ORDER BY price ASC;

-- 2. Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items
WHERE price >= 80
ORDER BY price DESC;

-- 3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name FROM customers
ORDER BY first_name ASC
LIMIT 3;

-- 4. All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers
ORDER BY last_name DESC;



-- 🌟 Exercise 2 : Dvdrental Database
-- Instructions
-- 1. In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer;

-- 2. Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT (first_name, last_name) as full_name FROM customer;

-- 3. Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT create_date FROM customer;

-- 4. Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT * FROM customer ORDER BY first_name ASC;

-- 5. Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id, title, description, release_year, rental_rate
FROM film ORDER BY rental_rate DESC;

-- 6. Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT address, phone
FROM address
WHERE district = 'Texas';

-- 7. Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * FROM film
WHERE film_id = 15 OR film_id = 150;

-- 8. Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id, title, description, length, rental_rate FROM film
WHERE Upper(title) LIKE Upper('%Star Wars%');
-- looks like there are no star wars films in the database

-- 9. No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, length, rental_rate FROM film
WHERE Upper(title) LIKE Upper('%St%');

-- 10. Write a query which will find the 10 cheapest movies
-- I order by rate, then alphabetically
SELECT title, rental_rate FROM film
ORDER BY (rental_rate, title) 
FETCH FIRST 20 ROWS ONLY;

-- 11. Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT title, rental_rate FROM film
ORDER BY (rental_rate, title) 
OFFSET 10 ROWS
FETCH FIRST 10 ROWS ONLY;

-- 12. Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT first_name, last_name, amount, payment_date, payment_id FROM
customer JOIN payment ON customer.customer_id = payment.customer_id
GROUP BY (customer.customer_id, payment_id);

-- 13. You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT film.film_id, title, description FROM
film LEFT JOIN inventory ON film.film_id = inventory.film_id
WHERE inventory_id IS NULL
ORDER BY film.film_id;
-- order by just to make it easier to check

-- 14. Write a query to find which city is in which country.
SELECT city, country FROM
city JOIN country ON city.country_id = country.country_id
ORDER BY city;
