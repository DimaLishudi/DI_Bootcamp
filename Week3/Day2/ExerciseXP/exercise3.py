from exercise import Dog
import random

# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.


class PetDog(Dog):
    # Think that *args and **kwargs provide cleaner solution here
    # although you cannot pass trained as positional argument
    def __init__(self, *args, trained: bool = False, **kwargs) -> None:
        super.__init__(*args, **kwargs)
        self.trained = trained

    def train(self) -> None:
        self.trained = True
        self.bark()

    def play(self, *args: "Dog") -> None:
        dog_names: str = self.name
        for dog in args:
            dog_names += " " + dog.name
        print(dog_names, "all play together")

    def do_a_trick(self) -> None:
        if not self.trained:
            return
        print(self.name, random.choice([
            "does a barrel roll",
            "stands on his back legs",
            "shakes your hand",
            "plays dead",
        ]))
