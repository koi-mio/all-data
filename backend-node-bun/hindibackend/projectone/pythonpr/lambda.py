lambda arguments: expression


add = lambda x, y: x + y
print(add(5, 3))

numbers = [1, 2, 3, 4, 5]
squared = map(lambda x: x**2, numbers)
print(list(squared))

number = [1, 2, 3, 4, 5, 6, 7]
evens = filter(lambda x: x % 2 == 0, number)
print(list(evens))


pairs = [(1, "one"), (2, "two"), (3, "three"), (4, "four")]
sorted_pairs = sorted(pairs, key=lambda x: x[1])
print(sorted_pairs)


def squared(num):
    return num * num


print(squared(2))
print(squared(90909090))
print(squared(78787))
print(squared(5))


def funcBuilder(x):
    return lambda y: x + y


addTen = funcBuilder(1000)
addTwenty = funcBuilder(8798)

print(addTen(23452345))
print(addTwenty(435634))


class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def move(self):
        print("move   along ..........")


my_car = Vehicle(" audio", "madslisur")
print(my_car.make)
print(my_car.model)
my_car.move()
