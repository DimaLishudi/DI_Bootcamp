# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.
# Examples

# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]


def GenerateMultiples(number: int, length: int) -> list[int]:
    if number == 0:
        return [0 for _ in range(length)]
    sign: int = 1 if number > 0 else -1
    return list(range(number, number * length + sign, number))


# print("Examples:")
# for example_num, example_len in [(7, 5), (12, 10), (17, 6)]:
#     print(GenerateMultiples(example_num, example_len))

number: int = int(input("Enter a number: "))
length: int = int(input("Enter sequence length: "))
print(GenerateMultiples(number, length))


# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).


def RemoveDuplicates(string: str) -> str:
    if len(string) <= 1:
        return string
    prev_char: str = string[0]
    output: str = prev_char
    for char in string[1:]:
        if char == prev_char:
            continue
        prev_char = char
        output += char
    return output


# print("Examples:")
# for example_str in ["ppoeemm", "wiiiinnnnd", "ttiiitllleeee"]:
#     print(RemoveDuplicates(example_str))
print(RemoveDuplicates(input("Enter a string: ")))
