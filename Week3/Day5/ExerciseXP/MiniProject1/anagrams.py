from anagram_checker import AnagramChecker
import pathlib
import typing as tp


class InputError(Exception):
    def __init__(self, message: str) -> None:
        super().__init__(message)


# Constants!
HISTORY_CMD: str = "print_history"
STOP_CMD: str = "exit"
SPECIAL_WORDS: set[str] = {HISTORY_CMD, STOP_CMD}


class AnagramUI:
    def __init__(self, word_list_filename: str | None = None) -> None:
        if word_list_filename is None:
            word_list_filename = str(
                pathlib.Path(__file__).parent / "sowpods.txt"
            )
        self.checker = AnagramChecker(word_list_filename)
        # we can save user history, just in case
        self.history: list[str] = []

    def display_menu(self) -> None:
        print("\n" + "=" * 30 + "\n")
        print("Welcome to the Anagram Checker!")
        print("1. Enter your word to generate all possible anagrams")
        print(f'2. Enter "{HISTORY_CMD}" to print your history')
        print(f'3. Enter "{STOP_CMD}" to exit the program')
        print("\n" + "=" * 30 + "\n")

    @staticmethod
    def get_input() -> str:
        word: str = input("Enter your word: ").strip().lower()
        if word not in SPECIAL_WORDS and not word.isalpha():
            raise InputError("Non-alphabetic word")
        return word

    @staticmethod
    def display_enumerated(sequence: tp.Iterable[tp.Any]) -> None:
        for i, element in enumerate(sequence, start=1):
            print(f"{i}. {element}")

    def display_history(self) -> None:
        print("Here are your last 10 queries:")
        self.display_enumerated(self.history[-10:])

    def display_anagrams(self, word) -> None:
        self.history.append(word)
        if not self.checker.is_valid_word(word):
            print("Hmmm, what a strange word you gave me.")
            print("But I'll look for anagrams anyway!\n")
        else:
            print("Looks like you gave me a nice valid english word!")
        anagrams: list[str] = self.checker.get_anagrams(word)
        if len(anagrams) == 0:
            print("I couldn't find any anagrams. Perhaps try another word?")
        else:
            print("Here are your anagrams:")
            self.display_enumerated(sorted(anagrams))

    def process_word(self, word: str) -> None:
        if word == HISTORY_CMD:
            self.display_history()
        elif word == STOP_CMD:
            self._running = False
        else:
            self.display_anagrams(word)

    def run(self) -> None:
        self._running = True
        while self._running:
            self.display_menu()
            try:
                self.process_word(self.get_input())
            except InputError:
                print("Incorrect user input, please try again")
            except EOFError:
                # new line after input string
                print()
                self._running = False
        print("\nThanks for using Anagram Checker!")


if __name__ == "__main__":
    AnagramUI().run()
