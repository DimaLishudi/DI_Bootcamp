import typing as tp
# 🌟 Exercise 1: Currencies
# Instructions


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self) -> str:
        out: str = str(self.amount) + " " + self.currency
        if self.amount != 1:
            out += "s"
        return out

    def __repr__(self) -> str:
        return str(self)

    def __int__(self) -> int:
        return self.amount

    def AddInteger(self, other: int) -> int:
        return self.amount + other

    def AddCurrency(self, other: "Currency") -> int:
        if self.currency != other.currency:
            raise TypeError(
                "Cannot add between Currency type "
                f"<{self.currency}> and <{other.currency}>"
            )
        return self.amount + other.amount

    # I am not sure why we should return only amount
    # instead of new Currency instance
    # But I did as instructions said
    def __add__(self, other: "int | Currency") -> int:
        match other:
            case int():
                return self.AddInteger(other)
            case Currency():
                return self.AddCurrency(other)
            case _:
                raise TypeError(
                    f"Currency does not support addition with {type(other)}"
                )

    def __radd__(self, other: "int | Currency") -> int:
        return self + other

    def __iadd__(self, other: "int | Currency") -> tp.Self:
        self.amount = self + other
        return self


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)
print(str(c1))
print(int(c2))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
try:
    print(c1 + c3)
except Exception as e:
    print(e)


# 🌟 Exercise 2: Import
# Instructions
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function
# Hint: You can use the the following syntaxes:

from func import AddNumbers

print(AddNumbers(3, -5.5))


# 🌟 Exercise 3: String Module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

import string
import random

random_str = ''.join(random.choices(string.ascii_letters, k=5))
print(random_str)


# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

from datetime import datetime, timedelta


def DisplayCurrentDate() -> None:
    print(datetime.today())


DisplayCurrentDate()


# Exercise 5 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).


def DisplayTimeUntilNewYear() -> None:
    now: datetime = datetime.now()
    # datetime(now.year)
    next_new_year: datetime = now.replace(now.year + 1, 1, 1, 0, 0, 0, 0)
    time_until: timedelta = next_new_year - now
    # sadly, I coudln't find analogue of strftime for timedelta
    print("the 1st of January is in", time_until)


DisplayTimeUntilNewYear()

# Exercise 6 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.


def CalculateLifeTimeInMinutes(birth_str: str):
    birth_date: datetime = datetime.strptime(birth_str, "%M.%d.%Y")
    diff = datetime.now() - birth_date
    minutes: int = round(diff.total_seconds() / 60)
    print(f"You've lived a total of {minutes} minutes in your life!")


CalculateLifeTimeInMinutes("22.08.2001")


# Exercise 7 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker


def FillUsersWithFakeData(users: list[dict[str, str]], num: int = 10):
    fake = Faker()
    users += [{
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code(),
        } for _ in range(num)]


users: list[dict[str, str]] = []
print(*users, sep="\n")
print("="*20)
FillUsersWithFakeData(users)
print(*users, sep="\n")
print("="*20)
FillUsersWithFakeData(users, 5)
print(*users, sep="\n")
print("="*20)
