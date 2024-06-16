import pathlib
# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.


# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.

# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.


# Now, use the provided the_stranger.txt file and try using the class you created above.


class Text:
    def __init__(self, text: str) -> None:
        self.words: list[str] = text.split()

    @classmethod
    def from_file(cls, filename: str) -> "Text":
        with open(filename) as f:
            return Text(f.read())

    def CalculateFrequency(self, word: str) -> float:
        return self.words.count(word) / len(self.words)

    def GetMostCommonWord(self) -> str:
        # Set, so we do not recalculate count (O(n)) for each repetition
        return max(set(self.words), key=self.words.count)

    def GetUniqueWords(self) -> list[str]:
        return list(set(self.words))

    # This method will help to test our functionality
    def DisplaySomeInfo(self, word="is") -> None:
        print(f"Frequency of '{word}':", self.CalculateFrequency(word))
        print("Most frequent word:", self.GetMostCommonWord())
        print("Some of the unique words:", self.GetUniqueWords()[:10])
        print("\n" + "=" * 30 + "\n")


if __name__ == "__main__":
    text = Text("Today, is a happy day. Truly a wonderful sight!")
    text.DisplaySomeInfo()

    filename = str(pathlib.Path(__file__).parent / "the_stranger.txt")
    text = Text.from_file(filename)
    text.DisplaySomeInfo()
