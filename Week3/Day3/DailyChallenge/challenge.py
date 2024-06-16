import math

# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles


class Circle:
    def __init__(self) -> None:
        """
            Initializes circle of zero size (i.e. a dot)
            For non-trivial circles use one of the factory methods
            or manually set radius/diameter
        """
        self.__radius: float = 0.
        return

    @classmethod
    def WithRadius(cls, radius: float) -> "Circle":
        circle = cls()
        circle.radius = radius
        return circle

    @classmethod
    def WithDiameter(cls, diameter: float) -> "Circle":
        circle = cls()
        # Diameter/radius logic is encapsulated in properties blow
        circle.diameter = diameter
        return circle

    @property
    def radius(self) -> float:
        return self.__radius

    # I'm not sure if setters are required in this task
    # But I did them, as it seems logicals
    @radius.setter
    def radius(self, radius: float) -> None:
        self.__radius = radius

    @property
    def diameter(self) -> float:
        return self.__radius * 2

    @diameter.setter
    def diameter(self, diameter: float) -> None:
        self.__radius = diameter / 2

    def CalcArea(self) -> float:
        return math.pi * self.radius**2

    def __str__(self) -> str:
        return f"Circle with radius {self.radius}"

    def __repr__(self) -> str:
        return str(self)

    def __add__(self, other: "Circle") -> "Circle":
        return Circle.WithRadius(self.radius + other.radius)

    def __lt__(self, other: "Circle") -> bool:
        return self.radius < other.radius

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Circle):
            raise TypeError(f"Cannot compare Circle and {type(other)}")
        return math.isclose(self.radius, other.radius)


# let's try this out
if __name__ == "__main__":
    c0 = Circle()
    c1 = Circle.WithDiameter(9)
    c2 = Circle.WithRadius(4.5)
    print(c0)
    # Circle with radius 0
    print(c1 + c2)
    # Circle with radius 9
    print(c1 == c2)
    # True
    print(c1 == c0)
    # False
    print(c1 > c0)
    # True
    c0.diameter = 10
    print(c1 > c0)
    # False

    circles: list[Circle] = [c0, c1, c2]
    circles.sort()
    print(*circles)
