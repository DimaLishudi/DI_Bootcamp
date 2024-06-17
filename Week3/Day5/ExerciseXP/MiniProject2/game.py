# Part I - Game.Py
# game.py – this file/module should contain a class called Game. It should have 4 methods:
# get_user_move(self) – Ask the user to select an move (rock/paper/scissors). Keep asking until the user has selected one of the moves – use data validation and looping. Return the move at the end of the function.

# get_computer_move(self) – Select rock/paper/scissors at random for the computer. Return the move at the end of the function. Use python’s random.choice() function (read about it online).

# get_game_result(self, user_move, computer_move) – Determine the result of the game.
# Parameters:
# user_move – the user’s chosen move (rock/paper/scissors)
# computer_move – the computer’s chosen (random) move (rock/paper/scissors)
# Return either win, draw, or loss. Where win means that the user has won, draw means the user and the computer got the same move, and loss means that the user has lost.

# play(self) – the function that will be called from outside the class (ie. from rock-paper-scissors.py). It will do 3 things:
# Get the user’s move (rock/paper/scissors) and remember it

# Get a random move for the computer (rock/paper/scissors) and remember it

# Determine the results of the game by comparing the user’s move and the computer’s move
# Print the output of the game; something like this: “You selected rock. The computer selected paper. You lose”, “You selected scissors. The computer selected scissors. You drew!”

# Return the results of the game as a string: win;draw;loss;, where win means that the user has won, draw means the user and the computer got the same move, and loss means that the user has lost.

import random
from enum import Enum, auto


class GameMove(Enum):
    ROCK = "rock"
    PAPER = "paper"
    SCISSORS = "scissors"


class GameResult(Enum):
    WIN = "win"
    LOSE = "lose"
    TIE = "draw"


class Game:
    def get_user_move(self) -> GameMove:
        while True:
            user_input = input(
                "Select (r)ock, (p)aper or (s)cissors: "
            ).strip().lower()
            for move in GameMove:
                if user_input == move.value or user_input == move.value[0]:
                    return move
            print("Incorrect move, try again!\n")

    def get_computer_move(self) -> GameMove:
        return random.choice(list(GameMove))

    def get_game_result(self, user_move: GameMove,
                        comp_move: GameMove) -> GameResult:
        if user_move == comp_move:
            return GameResult.TIE
        if (user_move == GameMove.ROCK and comp_move == GameMove.PAPER) or\
           (user_move == GameMove.PAPER and comp_move == GameMove.SCISSORS) or\
           (user_move == GameMove.SCISSORS and comp_move == GameMove.ROCK):
            return GameResult.LOSE
        return GameResult.WIN

    def play(self) -> GameResult:
        user_move = self.get_user_move()
        comp_move = self.get_computer_move()
        result = self.get_game_result(user_move, comp_move)
        print(f"You chose {user_move.value}. "
              f"Computer chose {comp_move.value}. "
              f"Result: {result.value}\n")
        return result
