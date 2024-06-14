import typing as tp

# Instructions :
# Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

# The Pagination class will accept 2 parameters:

# items (default: None): It will contain a list of contents to paginate.
# pageSize (default: 10): The amount of items to show in each page.
# So for example we could initialize our pagination like this:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")

# p = Pagination(alphabetList, 4)


# The Pagination class will have a few methods:

# getVisibleItems() : returns a list of items visible depending on the pageSize
# So for example we could use this method like this:

# p.getVisibleItems() 
# # ["a", "b", "c", "d"]
# You will have to implement various methods to go through the pages such as:
# prevPage()
# nextPage()
# firstPage()
# lastPage()
# goToPage(pageNum)

class Pagination():
    def __init__(self, items: list[tp.Any] = [], pageSize: int | float = 10):
        pageSize = int(pageSize)
        self.items = items
        self.pageSize = pageSize
        self.cur_page = 1
        # division rounding up
        self.num_pages = (len(self.items) + self.pageSize - 1) // self.pageSize
        # we should have at least 1 page
        self.num_pages = max(self.num_pages, 1)

    def getVisibleItems(self) -> list[tp.Any]:
        start: int = (self.cur_page - 1) * self.pageSize
        end: int = min(start + self.pageSize, len(self.items))
        return self.items[start:end]

    def prevPage(self) -> tp.Self:
        if self.cur_page > 1:
            self.cur_page -= 1
        return self

    def nextPage(self) -> tp.Self:
        if self.cur_page < self.num_pages:
            self.cur_page += 1
        return self

    def firstPage(self) -> tp.Self:
        self.cur_page = 1
        return self

    def lastPage(self) -> tp.Self:
        self.cur_page = self.num_pages
        return self

    def goToPage(self, page: int | float) -> tp.Self:
        page = int(page)
        if page <= 0:
            self.cur_page = 1
        else:
            self.cur_page = min(page, self.num_pages)
        return self


# Example from instructions
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())
# ["a", "b", "c", "d"]

p.nextPage()

print(p.getVisibleItems())
# ["e", "f", "g", "h"]

p.lastPage()

print(p.getVisibleItems())
# ["y", "z"]

# Chaining
print(p.firstPage().nextPage().getVisibleItems())
# ["e", "f", "g", "h"]
