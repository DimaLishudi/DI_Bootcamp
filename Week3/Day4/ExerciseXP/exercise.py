import random
import pathlib

# 🌟 Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

# Download this word list

# Save it in your development directory.

# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.

# Take the random words and create a sentence (using a python method), the sentence should be lower case.

# Create a function called main which will:

# Print a message explaining what the program does.

# Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.


def get_words_from_file(filename: str | None = None) -> list[str]:
    if filename is None:
        filename = str(pathlib.Path(__file__).parent / "sowpods.txt")

    result: list[str] = []
    with open(filename) as f:
        for line in f:
            result.append(line.strip())
    return result


def get_random_sentence(length: int,
                        words: list[str] = get_words_from_file()) -> str:
    return " ".join(random.choices(words, k=length))


def main() -> None:
    print("This program generates random sentences")
    length: int = int(input(
        "How many words should your "
        "random sentece have (2 to 20)?: "
    ))
    if length < 2 or length > 20:
        print("Invalid input")
        exit(1)
    print(get_random_sentence(length).lower())


if __name__ == "__main__":
    print(get_random_sentence(6).lower())
    main()


# # 🌟 Exercise 2: Working With JSON
# # Instructions
# import json

# sampleJson = """{
#    "company":{
#       "employee":{
#          "name":"emma",
#          "payable":{
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""


# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.


import json

sampleJson = """{
   "company":{
      "employee":{
         "name":"emma",
         "payable":{
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

info = json.loads(sampleJson)
print("Salary:", info["company"]["employee"]["payable"]["salary"])
# You can write some string instead like "22.08.2001"
info["company"]["employee"]["birth_date"] = None

with open("./company_info.json", mode="w") as f:
    json.dump(info, f)
