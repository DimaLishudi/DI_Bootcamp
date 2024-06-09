# 🌟 Exercise 1 : Favorite Numbers
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers: set[int] = {2, 22, 222}
first: int = 1
last: int = 37
my_fav_numbers.add(first)
my_fav_numbers.add(last)
my_fav_numbers.remove(last)

friend_fav_numbers: set[int] = {2, 7, 100}
our_fav_numbers: set[int] = my_fav_numbers | friend_fav_numbers


# 🌟 Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

print("No, it is not, as tuples are immutable in python. "
      "But it is possible to create new tuple with desired values.")


# 🌟 Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

basket: list[str] = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.pop(0)
basket.pop(-1)
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)


# 🌟 Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?

# probably a better idea to use numpy here instead
float_seq: list[float] = [x / 2 for x in range(3, 11)]
print(float_seq)


# 🌟 Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for num in range(1, 21):
    print(num, end=" ")
print()
for num in range(2, 21, 2):
    print(num, end=" ")
print()


# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

author_name: str = "Dmitrii"
while True:
    user_name: str = input("Enter your name: ")
    if author_name == user_name:
        break


# 🌟 Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

favourite_fruits: list[str] = input("Enter your favourite fruit(s), "
                                    "separated by a single space: ").split(" ")
input_fruit: str = input("Enter a name of any fruit: ")
if input_fruit in favourite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")


# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

topping_price: float = 2.5
total_price: float = 10
toppings: list[str] = []
stop_word: str = "quit"

while True:
    cur_topping: str = input(f"Enter a topping for your pizza ('{stop_word}' to finalize pizza): ")
    if cur_topping == stop_word:
        break
    toppings.append(cur_topping)
    total_price += topping_price

print("Your pizza toppings:", *toppings)
print("Total price:", total_price)


# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.


def CalcTicketPrice(age: int) -> int:
    if age < 3:
        return 0
    if age <= 12:
        return 10
    else:
        return 15


total_cost: int = 0
stop_word: str = "quit"
while True:
    cur_input: str = input("Enter a family member's age ('quit' to stop): ")
    if cur_input == stop_word:
        break
    age: int = int(cur_input)
    total_cost += CalcTicketPrice(age)


print("Tickets for the whole family will be:", total_cost)

# Teenager part

teenager_names: list[str] = input("Enter teenagers' names (separated by "
                                  "a single space): ").split()
# we need a copy, as we'll be deleting names while iterating over them
# or write a little more complex code (see Exe 10)
permitted_names = teenager_names.copy()

for name in teenager_names:
    teen_age: int = int(input(f"Enter age of {name}: "))
    if teen_age < 16 or teen_age > 21:
        permitted_names.remove(name)

print("Permitted teenagers:", *permitted_names)


# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:


sandwich_orders: list[str] = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
    "Pastrami sandwich", "Egg sandwich",
    "Chicken sandwich", "Pastrami sandwich"
]

removed_sandwich: str = "Pastrami sandwich"

idx: int = 0
while idx < len(sandwich_orders):
    if sandwich_orders[idx] == removed_sandwich:
        sandwich_orders.pop(idx)
        # no need to advance idx
    else:
        idx += 1

finished_sandwiches: list[str] = []

while len(sandwich_orders) != 0:
    finished_sandwiches.append(sandwich_orders.pop(0))

for sandwich in finished_sandwiches:
    print("I made your", sandwich)
