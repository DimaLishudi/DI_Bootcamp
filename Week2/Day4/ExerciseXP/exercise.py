import random
from enum import Enum

# Exercise 1 : What Are You Learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

def display_message():
    print("I'm learning python and javascript in this course!")


display_message()


# 🌟 Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.


def favourite_book(title: str):
    print(f"One of my favourite books is {title}.")


favourite_book("Alice in Wonderland")


# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.


def describe_city(city: str, country: str = "Israel"):
    print(f"{city} is in {country}")


describe_city("Reykjavik", "Iceland")
describe_city("Holon")

# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.


def CheckLuck(guessed_number: int):
    assert 1 <= guessed_number <= 100, "number should be between 1 and 100"
    random_number: int = random.randint(1, 100)
    if guessed_number == random_number:
        print("Success!")
    else:
        print(f"Bad guess: {guessed_number} is not {random_number}")


CheckLuck(int(input("Enter a number between 1 and 100: ")))


# 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Call the function, in order to make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.


def make_shirt(size: str = "large", text: str = "I love python"):
    print(f"The size of the shirt is {size} and the text is {text}")


make_shirt()
make_shirt("medium")
make_shirt("Hello world")
make_shirt(text="Your advertisment could be here")


# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.


magician_names: list[str] = ['Harry Houdini', 'David Blaine', 'Criss Angel']


def show_magicians(magicians: list[str]):
    print(*magicians, sep="\n")


def make_great(magicians: list[str]):
    for i in range(len(magicians)):
        magicians[i] = "the Great " + magicians[i]


make_great(magician_names)
show_magicians(magician_names)


# 🌟 Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.


class Season(Enum):
    WINTER = 1
    SPRING = 2
    SUMMER = 3
    AUTUMN = 4


def get_season() -> Season:
    while True:
        season_str: str = input("Please enter current season (Winter, Spring, Summer or Autumn): ").lower()
        if season_str == "winter":
            return Season.WINTER
        if season_str == "spring":
            return Season.SPRING
        if season_str == "summer":
            return Season.SUMMER
        if season_str == "autumn" or season_str == "fall":
            return Season.AUTUMN
        print("Incorrect season, please try again")


def get_random_temp(season: Season) -> float:
    low: float = -10
    high: float = 40
    match season:
        case Season.WINTER:
            low = -10
            high = 16
        case Season.SPRING:
            low = 0
            high = 26
        case Season.SUMMER:
            low = 10
            high = 36
        case Season.SPRING:
            low = 0
            high = 26
    return random.uniform(low, high)


def main() -> None:
    temp: float = get_random_temp(get_season())
    print(f"The temperature right now is {temp} degrees Celsius")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp < 16:
        print("Quite chilly! Don’t forget your coat")
    elif temp < 24:
        print("Perfect wheather, if you ask me")
    elif temp < 32:
        print("Quite hot! Consider using sunscreen")
    elif temp < 40:
        print("Quite hot! Be careful of heatstroke")


# 🌟 Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.


data: list[dict[str, str]] = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def RunQuizForUser(quiz_data: list[dict[str, str]]) -> list[tuple[int, str]]:
    print("Time for a Star Wars quiz!")
    incorrect_answers: list[tuple[int, str]] = []
    for idx, instance in enumerate(quiz_data):
        question: str = instance["question"]
        answer: str = instance["answer"]
        print(question)
        user_answer: str = input("Your answer: ")
        if answer != user_answer:
            incorrect_answers.append((idx, user_answer))
    return incorrect_answers


def DisplayResults(quiz_data: list[dict[str, str]],
                   incorrect_answers: list[tuple[int, str]]):
    num_correct: int = len(quiz_data) - len(incorrect_answers)
    print(f"\nCorrect answers: {num_correct}/{len(quiz_data)}")
    if num_correct == len(quiz_data):
        print("Good work!")
        return
    print("Your mistakes:\n")
    for idx, user_answer in incorrect_answers:
        print("Question:", quiz_data[idx]["question"])
        print("Answer:", quiz_data[idx]["answer"])
        print("Your answer:", user_answer)
        print()


DisplayResults(data, RunQuizForUser(data))
