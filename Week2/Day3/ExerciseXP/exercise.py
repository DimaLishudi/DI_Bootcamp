# 🌟 Exercise 1 : Convert Lists Into Dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method

import typing as tp

keys: list[str] = ['Ten', 'Twenty', 'Thirty']
values: list[int] = [10, 20, 30]
result_dict: dict[str, int] = {key: val for key, val in zip(keys, values)}

print(result_dict)

# 🌟 Exercise 2 : Cinemax #2
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).


def CalcTicketPrice(age: int) -> int:
    if age < 3:
        return 0
    if age <= 12:
        return 10
    else:
        return 15


name_list: list[str] = input("Enter names of the family members "
                             "separated by spaces: ").split()
# a bit of classic python functional programming
age_list: list[int] = list(map(
    int,
    input("Enter ages of the family members "
          "separated by spaces (in the same order): ").split()
))

assert len(name_list) == len(age_list), "number of ages != number of names"

family_ages: dict[str, int] = {name: age for name, age in zip(name_list, age_list)}
family_costs: dict[str, int] = {}
total_cost: int = 0


for name, age in family_ages.items():
    price: int = CalcTicketPrice(age)
    family_costs[name] = price
    total_cost += price

print(family_costs)
print("Family's total cost:", total_cost)

# Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green


# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
# 3. Change the number of stores to 2.
# 4. Print a sentence that explains who Zaras clients are.
# 5. Add a key called country_creation with a value of Spain.
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# 7. Delete the information about the date of creation.
# 8. Print the last international competitor.
# 9. Print the major clothes colors in the US.
# 10. Print the amount of key value pairs (ie. length of the dictionary).
# 11. Print the keys of the dictionary.
# 12. Create another dictionary called more_on_zara with the following details:

# creation_date: 1975 
# number_stores: 10 000


# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# 14. Print the value of the key number_stores. What just happened ?


# It is possible to list all possible types here instead of tp.Any
# but it's not really practical
# IMO you should simply use python dataclasses instead of a dict here
brand: dict[str, tp.Any] = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"],
    },
}

brand["number_stores"] = 2

# Sentence that explains Zara clients - I assume it's about clothes type?
joined_clothes: str = ", ".join(brand["type_of_clothes"])
print(brand["name"], "produces clothes for", joined_clothes)

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(list(brand.keys()))

more_on_zara: dict[str, int] = {
    "creation_date": 1975,
    "number_stores": 10_000,
}
brand.update(more_on_zara)
print("number_stores value got updated:", brand["number_stores"])


# Exercise 4 : Disney Characters
# Instructions
# Use this list :

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :

# #1/

# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/ 

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
# The characters, which names start with the letter “m” or “p”.


# iterable, so it works with filter
def BuildDictA(names: tp.Iterable[str]) -> dict[str, int]:
    out: dict[str, int] = {}
    for i, name in enumerate(names):
        out[name] = i
    return out


def BuildDictB(names: tp.Iterable[str]) -> dict[int, str]:
    out: dict[int, str] = {}
    for i, name in enumerate(names):
        out[i] = name
    return out


def BuildDictC(names: tp.Iterable[str]) -> dict[str, int]:
    out: dict[str, int] = {}
    for i, name in enumerate(sorted(names)):
        out[name] = i
    return out


users: list[str] = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
disney_users_A: dict[str, int] = BuildDictA(users)
disney_users_B: dict[int, str] = BuildDictB(users)
disney_users_C: dict[str, int] = BuildDictC(users)

disney_users_A_without_i: dict[str, int] = BuildDictA(
    filter(lambda string: "i" in string, users)
)

disney_users_A_starting_m_p: dict[str, int] = BuildDictA(
    filter(
        lambda string:
            string.lower().startswith("m") or
            string.lower().startswith("p"),
        users
    )
)

print(disney_users_A)
print(disney_users_B)
print(disney_users_C)
print(disney_users_A_without_i)
print(disney_users_A_starting_m_p)
