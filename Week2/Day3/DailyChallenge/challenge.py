# Instructions
# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.
# Examples

# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }

# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}

# I assume grapes should also have "e": [4], "s": [5]


# In practice I'd use defaultdict here
def DictifyWord(word: str) -> dict[str, list[int]]:
    letter_idx_dict: dict[str, list[int]] = {}
    for i, letter in enumerate(word):
        if letter not in letter_idx_dict:
            letter_idx_dict[letter] = [i]
        else:
            letter_idx_dict[letter].append(i)
    return letter_idx_dict


print("Examples:")
for word in ["dodo", "froggy", "grapes"]:
    print(DictifyWord(word))
print(DictifyWord(input("Enter your word: ")))

# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

# Examples

# The key is the product, the value is the price

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"

# ➞ ["Bread", "Fertilizer", "Water"]

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100" 

# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# # In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# # instead you can by the Spoon that is $2

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1" 

# ➞ "Nothing"


def ParseMoney(string_price: str) -> int:
    return int(string_price.removeprefix("$").replace(",", ""))


def ParseItems(string_items: dict[str, str]) -> dict[str, int]:
    price_items: dict[str, int] = {}
    for item_name, str_price in string_items.items():
        price_items[item_name] = ParseMoney(str_price)
    return price_items


def FindAffordableItems(items: dict[str, int], wallet: int) -> list[str] | str:
    affordable_items: list[str] = []
    for name, price in items.items():
        if wallet >= price:
            wallet -= price
            affordable_items.append(name)
    if len(affordable_items) == 0:
        return "Nothing"
    affordable_items.sort()
    return affordable_items


example_items: list[tuple[dict[str, str], str]] = [
    ({
        "Water": "$1",
        "Bread": "$3",
        "TV": "$1,000",
        "Fertilizer": "$20"
    }, "$300"),
    ({
        "Apple": "$4",
        "Honey": "$3",
        "Fan": "$14",
        "Bananas": "$4",
        "Pan": "$100",
        "Spoon": "$2"
    }, "$100"),
    ({
        "Phone": "$999",
        "Speakers": "$300",
        "Laptop": "$5,000",
        "PC": "$1200"
    }, "$1"),
]

for items, wallet in example_items:
    print(FindAffordableItems(ParseItems(items), ParseMoney(wallet)))
