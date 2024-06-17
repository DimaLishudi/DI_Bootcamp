import game
from enum import Enum


class UserCmd(Enum):
    GAME = 'g'
    SCORES = 'x'
    QUIT = 'q'


def try_get_user_menu_choice() -> str:
    print("Rock Paper Scissors")
    print("Menu:")
    print(f"({UserCmd.GAME.value}): Play a new game")
    print(f"({UserCmd.SCORES.value}): Show scores")
    print(f"({UserCmd.QUIT.value}): Quit the game\n")
    return input(": ")


def get_user_menu_choice() -> UserCmd:
    while True:
        user_input: str = try_get_user_menu_choice()
        try:
            return UserCmd(user_input)
        except ValueError:
            print("Invalid command, try again\n")


def print_results(results: dict[game.GameResult, int]) -> None:
    print("\nHere are your game statistics:")
    for result, count in results.items():
        print(f"{result.value}: {count}")
    print()


def play_one(results: dict[game.GameResult, int]) -> None:
    results[game.Game().play()] += 1


def main() -> None:
    results: dict[game.GameResult, int] = {
        result: 0 for result in game.GameResult
    }
    while True:
        cmd: UserCmd = get_user_menu_choice()
        if cmd == UserCmd.QUIT:
            print("\nThank you for playing Rock Paper Scissors!")
            return
        if cmd == UserCmd.SCORES:
            print_results(results)
        if cmd == UserCmd.GAME:
            play_one(results)


if __name__ == "__main__":
    main()
