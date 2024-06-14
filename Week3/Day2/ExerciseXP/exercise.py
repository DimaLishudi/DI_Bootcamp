import typing as tp

# 🌟 Exercise 1 : Pets
# Instructions
# Using this code:

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


# Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# Take all the cats for a walk, use the walk method.

# I don't override anything in Siamese class
class Siamese(Cat):
    pass


def print_separator_line():
    print("=" * 30)


# we don't want this code to execute on import
if __name__ == "__main__":
    all_cats: list[Cat] = [Bengal("Alice", 0),
                           Chartreux("Bobby", 1),
                           Siamese("Charlie", 2)]

    sara_pets = Pets(all_cats)
    sara_pets.walk()
    print_separator_line()


# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# Create 3 dogs and run them through your class.

class Dog:
    def __init__(self, name: str, age: int, weight: float) -> None:
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self) -> None:
        print(f"{self.name} is barking")

    def run_speed(self) -> float:
        return self.weight / self.age * 10

    def power(self) -> float:
        return self.run_speed() * self.weight

    def fight(self, other_dog: "Dog") -> str:
        winner_name: str = ""
        power: float = self.power()
        other_power: float = other_dog.power()
        if power > other_power:
            winner_name = self.name
        elif power < other_power:
            winner_name = other_dog.name
        else:
            winner_name = "friendship"
        return winner_name + " won the fight"


if __name__ == "__main__":
    dogs: list[Dog] = [Dog("Alice", 1, 2.5),
                       Dog("Bobby", 3, 7.2),
                       Dog("Charlie", 8, 12.)]

    for dog in dogs:
        dog.bark()
        print(f"{dog.name} speed:", dog.run_speed())
        for other_dog in dogs:
            print(f"{dog.name} vs {other_dog.name}:", dog.fight(other_dog))
    print_separator_line()
# Exercise 3 - separate file


# Exercise 4 : Family
# Instructions
# Create a class called Family and implement the following attributes:

# members: list of dictionaries
# last_name : (string)

# Implement the following methods:

# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ details.

# Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ]

class Family:
    def __init__(self, members: list[dict[tp.Any, tp.Any]], last_name: str) -> None:
        self.members = members
        self.last_name = last_name

    def born(self, **newborn_info) -> None:
        self.members.append(newborn_info)
        print(f"Congratulations to the {self.last_name} on their new baby!")

    # I added this nice helper methods
    @staticmethod
    def member_has_name(member: dict[tp.Any, tp.Any], name: str) -> None:
        return "name" in member and member["name"] == name

    @staticmethod
    def member_is_18(member: dict[tp.Any, tp.Any]) -> None:
        return "age" in member and member["age"] >= 18

    def is_18(self, name: str) -> bool:
        for member in self.members:
            if self.member_has_name(member, name) and self.member_is_18(member):
                return True
        return False

    def family_presentation(self) -> None:
        print(f"Presentation on the {self.last_name} family:")
        for member in self.members:
            print(member)


if __name__ == "__main__":
    smiths: Family = Family(
        [
            {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
            {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
        ], "Smith"
    )

    smiths.born(name="Jake", age=0, gender="male", is_child=True)
    print(
        smiths.is_18("Jake"),
        smiths.is_18("Sarah"),
        smiths.is_18("Alice"),
    )
    smiths.family_presentation()
    print_separator_line()


# Exercise 5 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)


# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.


# Add a method called incredible_presentation which :

# Print a sentence like “*Here is our powerful family **”
# Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)


# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#     ]

# Call the incredible_presentation method.

# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.

# Call the incredible_presentation method again.

class PowerError(Exception):
    def __init__(self, message: str) -> None:
        super().__init__(message)


class TheIncredibles(Family):
    # no need to override __init__
    def use_power(self, name: str) -> None:
        for member in self.members:
            if not self.member_has_name(member, name):
                continue
            if self.member_is_18(member, name):
                print(f"{name} uses his amazing power: {member['power']}")
            else:
                raise PowerError(f"{name} is not 18 year old yet")
        raise PowerError(f"{name} is not part of {self.last_name} family")

    def incredible_presentation(self) -> None:
        print("Here's our powerful family")
        # could use super() instead, but there's no need
        self.family_presentation()


if __name__ == "__main__":
    incredibles: TheIncredibles = TheIncredibles(
        [
            {
                'name': 'Michael',
                'age': 35,
                'gender': 'Male',
                'is_child': False,
                'power': 'fly',
                'incredible_name': 'MikeFly'
            },
            {
                'name': 'Sarah',
                'age': 32,
                'gender': 'Female',
                'is_child': False,
                'power': 'read minds',
                'incredible_name': 'SuperWoman'
            }
        ], "Incredibles"
    )

    incredibles.incredible_presentation()
    incredibles.born(name="Baby Jack", age=0, power="UnknownPower")
    incredibles.incredible_presentation()
