# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Then, print the first and last characters of the given text.

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod

import random
import typing as tp


def GetInput() -> tp.Optional[str]:
    user_string = input("Please enter a 10-character string: ")
    if len(user_string) < 10:
        print("string not long enough")
        return None
    if len(user_string) > 10:
        print("string too long")
        return None
    print("perfect string")
    return user_string


def PrintAllPrefixes(full_string: str):
    for i in range(len(full_string)):
        print(full_string[:i+1])


def main() -> None:
    # Step 1
    user_input: tp.Optional[str] = GetInput()
    if user_input is None:
        exit(0)
    # Step 2
    print(user_input[0], user_input[len(user_input) - 1])
    print()  # extra newlines to separate steps
    # Step 3
    PrintAllPrefixes(user_input)
    # Step 4
    char_list: list[str] = list(user_input)
    random.shuffle(char_list)
    print()
    print("".join(char_list))


main()
