# Challenge 1 : Sorting
# Instructions
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

in_string: str = input("Enter comma-separated string sequence: ")
# I don't see how list comprehension could help here
# this solution seems to be the most elegant
strings: list[str] = in_string.split(',')
strings.sort()
print(','.join(strings))


# Challenge 2 : Longest Word
# Instructions
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"


def FindLongestWord(str_sequence: str) -> str:
    return max(str_sequence.split(), key=lambda s: len(s))


print("Examples:")
print(FindLongestWord("Margaret's toy is a pretty doll."))
print(FindLongestWord("A thing of beauty is a joy forever."))
print(FindLongestWord("Forgetfulness is by all means powerless!"))
print()
print(FindLongestWord(input("Enter your string sequence: ")))