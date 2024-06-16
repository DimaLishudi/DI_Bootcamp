# Instructions
# Part 1 : Quizz :
# Answer the following questions

# Q1: What is a class?
# A1: Class can be defined as a custom type, or a code structuring unit.
#     Class definition defines its fields and methods.
#     These are ordinary variables and functions, but bound to the namespace of
#     the corresponding class.

# Q2: What is an instance?
# A2: Instance is an object of type, defined by corresponding class. Instance
#     initializes class fields and can call class methods.

# Q3: What is encapsulation?
# A3: Encapsulation is a pattern, which separates implementation of some
#     functionality and its interface. This allows user to keep using the
#     same API even if developer changes the implementation

# Q4: What is abstraction?
# A4: Abstraction is elevation of code structure to a higher level: instead of
#     dealing with particular implementation details, abstraction allows
#     programmer to deal with semantic meaning of some entity. This allows
#     for a complexity step-up: very complex programms (looking from the
#     ground up) may be written with fairly simple code thanks to abstractions.

# Q5: What is inheritance?
# A5: Inheritance is a declaration of some class as an extension of another.
#     Its implements semantic meaning of subset: if class A inherits from B,
#     then objects of A are a subset of objects of B. This means that A can
#     do everything, that objects B can; and (optionally) some more.
#     This can be implemented by overriding parent function

# Q6: What is multiple inheritance?
# A6: Multiple inheritance occurs, when class inherits from multiple parent
#     classes simultaneously - semantically objects of that class are subset of
#     multiple other classes at once.
#     In general, inheritance can described by some directed acyclic graph

# Q7: What is polymorphism?
# A7: Polymorhpish is a pattern of using the same code (syntax) with same
#     meaning for different entities (like objects of different classes)
#     which leads to different implementations of that semantic meaning.
#     For example - different overrides of parent method, when inheriting

# Q8: What is method resolution order or MRO?
# A8: Due to possibility of complex inheritance graphs, parent classes may
#     override the same methods. If child class calls super().method() python
#     needs a way to prioritise parent classes over each other,
#     i.e. define Method Resolution Order


# Part 2: Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

from enum import Enum, auto
from random import shuffle

class Suit(Enum):
    HEARTS = "hearts"
    DIAMONDS = "diamonds"
    CLUBS = "clubs"
    SPADES = "spades"


class Rank(Enum):
    ACE = 'A'
    TWO = '2'
    THREE = '3'
    FOUR = '4'
    FIVE = '5'
    SIX = '6'
    SEVEN = '7'
    EIGHT = '8'
    NINE = '9'
    TEN = '10'
    JACK = 'J'
    QUEEN = 'Q'
    KING = 'K'


class Card:
    def __init__(self, suit: Suit, rank: Rank) -> None:
        self.suit = suit
        self.rank = rank

    def __str__(self) -> str:
        return f"{self.rank.value} of {self.suit.value}"


class Deck:
    def __init__(self) -> None:
        self.cards: list[Card] = []

    def deal(self) -> Card | None:
        if len(self.cards) == 0:
            return None
        return self.cards.pop()

    def shuffle(self) -> Card:
        self.cards.clear()

        for suit in Suit:
            for rank in Rank:
                self.cards.append(Card(suit, rank))
        shuffle(self.cards)
        return self.cards.pop()


if __name__ == "__main__":
    deck: Deck = Deck()
    print(deck.deal())

    deck.shuffle()
    while True:
        card: Card | None = deck.deal()
        if card is None:
            print("\nNo more cards, time to reshuffle")
            break
        else:
            print(card, end=", ")
    deck.shuffle()
    print(deck.deal())
    print(deck.deal())
