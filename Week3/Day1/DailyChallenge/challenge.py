# Instructions : Old MacDonald’s Farm
# Take a look at the following code and output:
# File: market.py

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())
# Output

# McDonald's farm

# cow : 5
# sheep : 2
# goat : 12

#     E-I-E-I-0!


# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

# Create a class called Farm. How should it be implemented?
# Does the Farm class need an __init__ method? If so, what parameters should it take?
# How many methods does the Farm class need?
# Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
# Test your code and make sure you get the same results as the example above.
# Bonus: nicely line the text in columns as seen in the example above. Use string formatting.


# Expand The Farm
# Add a method called get_animal_types to the Farm class. This method should return a sorted list of all the animal types (names) in the farm. With the example above, the list should be: ['cow', 'goat', 'sheep'].

# Add another method to the Farm class called get_short_info. This method should return the following string: “McDonald’s farm has cows, goats and sheeps.”. The method should call the get_animal_types function to get a list of the animals.
# Note : In English the plural form of the word “sheep” is sheep. But for the purpose of the exercise, let’s say that if there is more than 1 animal, an “s” should be added at the end of the word.


class Farm:
    def __init__(self, name: str) -> None:
        self.name = name
        self.animals: dict[str, int] = {}
        self.tab: int = 0

    def add_animal(self, animal_name: str, amount: int = 1) -> None:
        if animal_name not in self.animals:
            self.animals[animal_name] = amount
        else:
            self.animals[animal_name] += amount
        self.tab = max(self.tab, len(animal_name))

    def get_info(self) -> None:
        print(f"{self.name}'s farm\n")
        for animal_name, amount in self.animals.items():
            print(f"{animal_name:<{self.tab}} : {amount}")
        print("\n")
        print("    E-I-E-I-0!")

    def get_animal_types(self) -> list[str]:
        return list(sorted(self.animals.keys()))

    def get_short_info(self) -> None:
        animals: list[str] = self.get_animal_types()
        if len(animals) == 0:
            print(f"{self.name}'s farm doesn't have any animals")
            return
        if len(animals) == 1:
            print(f"{self.name}'s farm only has {animals[0]}")
            return
        print_str = f"{self.name}'s farm has "
        for animal in animals[:-2]:
            print_str += animal + "s, "
        print_str += animals[-2] + "s and " + animals[-1] + "s."
        print(print_str)


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.get_info()

macdonald.get_short_info()
