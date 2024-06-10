# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

from enum import Enum

BOARD_SIZE = 3

class Cell(Enum):
    Empty = 0
    O = 1
    X = 2


def display_horizontal_border():
    print('*' * 13)


def display_horizontal_line():
    print("*" + '-' * 11 + "*")


def cell_str(cell: Cell) -> str:
    match cell:
        case Cell.Empty:
            return " "
        case Cell.O:
            return "O"
        case Cell.X:
            return "X"


def display_board(board: list[list[Cell]]):
    print("\nTIC TAC TOE")
    display_horizontal_border()
    for i, row in enumerate(board):
        if i != 0:
            display_horizontal_line()
        row_str: str = "*"
        for j, cell in enumerate(row):
            if j != 0:
                row_str += "|"
            row_str += " " + cell_str(cell) + " "
        row_str += "*"
        print(row_str)
    display_horizontal_border()
    print()


def register_player_input(board: list[list[Cell]], player: Cell) -> bool:
    '''
        Takes player input and updates board accordingly
        returns False on incorrect input
    '''
    print(f"Player {cell_str(player)}'s turn...\n")
    row: int = int(input("Enter row: "))
    col: int = int(input("Enter column: "))
    if 1 <= row <= BOARD_SIZE and\
       1 <= col <= BOARD_SIZE and\
       board[row - 1][col - 1] == Cell.Empty:
        board[row - 1][col - 1] = player
        return True
    return False


def check_row_win(board: list[list[Cell]], row_num: int) -> bool:
    first_cell = board[row_num][0]
    if first_cell == Cell.Empty:
        return False
    for cell in board[row_num][1:]:
        if cell != first_cell:
            return False
    return True


def check_col_win(board: list[list[Cell]], col_num: int) -> bool:
    first_cell = board[0][col_num]
    if first_cell == Cell.Empty:
        return False
    for row in board[1:]:
        if row[col_num] != first_cell:
            return False
    return True


def check_main_diagonal(board: list[list[Cell]]) -> bool:
    first_cell = board[0][0]
    if first_cell == Cell.Empty:
        return False
    for i in range(1, BOARD_SIZE):
        if first_cell != board[i][i]:
            return False
    return True


def check_anti_diagonal(board: list[list[Cell]]) -> bool:
    first_cell = board[0][BOARD_SIZE - 1]
    if first_cell == Cell.Empty:
        return False
    for i in range(1, BOARD_SIZE):
        if first_cell != board[i][BOARD_SIZE - 1 - i]:
            return False
    return True


def check_win(board: list[list[Cell]]) -> bool:
    for i in range(BOARD_SIZE):
        if check_row_win(board, i) or check_col_win(board, i):
            return True
    return check_main_diagonal(board) or check_anti_diagonal(board)


def play() -> None:
    board: list[list[Cell]] = [
        [Cell.Empty for _ in range(BOARD_SIZE)] for _ in range(BOARD_SIZE)
    ]
    cell_order: list[Cell] = [Cell.X, Cell.O]
    turn: int = 0

    print("Welcome to TIC TAC TOE!\n")
    display_board(board)
    for turn in range(BOARD_SIZE * BOARD_SIZE):
        player: Cell = cell_order[turn % 2]
        while not register_player_input(board, player):
            print("Bad input, try again")
        display_board(board)
        if check_win(board):
            print(f"\nPlayer {cell_str(player)} wins!!!\n")
            return
    print("TIE!")
    return


if __name__ == "__main__":
    play()
