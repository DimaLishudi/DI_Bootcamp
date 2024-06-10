# 🌟 Exercise 1: Cats
# Instructions
# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


def FindOldestCat(cats: list[Cat]) -> Cat:
    return max(cats, key=lambda cat: cat.age)


cats: list[Cat] = [
    Cat("Alice", 0),
    Cat("Bobby", 5),
    Cat("Daisy", 2),
]

oldest: Cat = FindOldestCat(cats)
print(f"The oldest cat is {oldest.name} and is {oldest.age} years old.")

# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.


class Dog:
    def __init__(self, name: str, height: int) -> None:
        self.name: str = name
        self.height: int = height

    def bark(self) -> None:
        print(f"{self.name} goes woof!")

    def jump(self) -> None:
        print(f"{self.name} jumps {self.height*2} cm high!")


def PrintDogDetails(dog: Dog, title: str = ""):
    print(f"{title} info: name = {dog.name}, height = {dog.height}cm")


davids_dog: Dog = Dog("Rex", 50)
PrintDogDetails(davids_dog, "David's dog")
davids_dog.bark()
davids_dog.jump()

sarahs_dog: Dog = Dog("Teacup", 20)
PrintDogDetails(sarahs_dog, "Sarah's dog")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger!")
elif sarahs_dog.height > davids_dog.height:
    print(f"{sarahs_dog.name} is bigger!")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are equal in size!")


# 🌟 Exercise 3 : Who’s The Song Producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven


class Song:
    def __init__(self, lyrics: list[str]) -> None:
        self.lyrics: list[str] = lyrics
    

def sing_me_a_song(song: Song):
    print(*song.lyrics, sep="\n")


stairway: Song = Song(["There's a lady who's sure",
                       "all that glitters is gold",
                       "and she's buying a stairway to heaven"])
sing_me_a_song(stairway)


# Exercise 4 : Afternoon At The Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }


# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)


class Zoo:
    def __init__(self, zoo_name: str) -> None:
        self.name: str = zoo_name
        self.animals: list[str] = []

    def add_animal(self, new_animal: str) -> None:
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self) -> None:
        print(*self.animals)

    def sell_animal(self, animal_sold: str) -> None:
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self) -> None:
        groups: dict[int, list[str]] = {}
        self.animals.sort()
        group_counter: int = 1
        prev_first_char: str = ""
        for animal in self.animals:
            if prev_first_char == animal[0]:
                # same group
                groups[group_counter].append(animal)
                continue
            # proceed to next group
            prev_first_char = animal[0]
            group_counter += 1
            groups[group_counter] = [animal]

        # I'm not sure what exactly is expected in this method (and get_groups)
        # So here I create groups and store them in private field
        # and in get_groups I simply print pre-calculated _groups value
        self._groups: dict[int, list[str] | str] = {
            key: values if len(values) > 1 else values[0]
            for key, values in groups.items()
        }

    def get_groups(self) -> None:
        print(self._groups)


ramat_gan_safari: Zoo = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Giraffe")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()
