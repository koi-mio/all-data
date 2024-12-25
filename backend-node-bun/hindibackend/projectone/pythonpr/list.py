# fruits = ["apple", "pinapple ", "banana ", " cherry"]


# fruits[3] = "orange"
# fruits.append("cheery")
# fruits.insert(1, "graphs")
# more_fruits = ["mongo", "kiwi"]
# fruits.extend(more_fruits)
# popped_fruits = fruits.pop(0)
# # fruits.remove("cheery")
# print(fruits[0])
# print(fruits[1])
# print(fruits[2])
# print(fruits[3])
# print(fruits)


fruits = ["apple", "banana", "cherry", "pinapple", "orange", "apple"]
print(fruits.index("pinapple"))
print(fruits.count("appple"))
print(fruits)


numbers = [90, 78, 99, 97, 2, 3, 4, 5, 6, 7, 9, 8, 12, 34, 56, 67, 89, 1, 0]
numbers.sort()
print(numbers)

numbers.reverse()
print(numbers)


numbers.remove(0)
print(numbers)


squares = [x**2 for x in range(10)]
print(squares)


even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)


fav_fruite = ["apple", "banana", "pinapple", "kivi", "cherrry", "orange"]

first_fruit = fav_fruite[0]
last_fruit = fav_fruite[-1]

print(f"First fruit : {first_fruit}")
print(f"Last fruit : {last_fruit}")


numbers = [1, 2, 3, 4, 5]

numbers.append(6)

numbers.insert(0, 0)

more_numbers = [7, 8, 9]
numbers.extend(more_numbers)

print(numbers)


numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

index_of_5 = numbers.index(5)

count_of_5 = numbers.count(5)

numbers.sort()

numbers.reverse()

print(f"Index of 5: {index_of_5}")
print(f"Count of 5: {count_of_5}")
print(f"Sorted and reversed list: {numbers}")


fruits_set = {"apple", "banana", "cherry"}

print("apple" in fruits_set)
print("orange" in fruits_set)

person = {"name": "Alice", "age": 25, "is_student": True}

name = person["name"]
age = person["age"]

print(f"Name: {name}")
print(f"Age: {age}")


fruits_set1 = {"apple", "banana", "cherry"}
fruits_set2 = {"banana", "grape", "orange"}

union_set = fruits_set1.union(fruits_set2)
print(union_set)

intersection_set = fruits_set1.intersection(fruits_set2)
print(intersection_set)

difference_set = fruits_set1.difference(fruits_set2)
print(difference_set)
symmetric_difference_set = fruits_set1.symmetric_difference(fruits_set2)
print(symmetric_difference_set)


fruits_set = {"apple", "banana", "cherry"}
numbers_set = {1, 2, 3, 4, 5}
mixed_set = {1, "apple", True, 3.14}

print("apple" in fruits_set)
print(6 in numbers_set)

person = {"name": "Alice", "age": 25, "is_student": True}

person = dict(name="Alice", age=25, is_student=True)

person = {"name": "Alice", "age": 25, "is_student": True}

print(person["name"])
print(person["age"])
print(person["is_student"])


person = {"name": "Alice", "age": 26, "is_student": True}

print(person.keys())

print(person.values())

print(person.items())
person.clear()
print(person)

person = {"name": "Alice", "age": 26, "is_student": True}
person_copy = person.copy()
print(person_copy)

person.update({"address": "123 Main St", "is_student": False})
print(person)


person = {"name": "Alice", "age": 25, "is_student": True}

person["age"] = 26

person["address"] = "123 Main St"

person.update({"is_student": False, "occupation": "Engineer"})

print(person)
person = {
    "name": "Alice",
    "age": 26,
    "is_student": False,
    "address": "123 Main St",
    "occupation": "Engineer",
}


print("Keys:", person.keys())
print("Values:", person.values())
print("Items:", person.items())

del person["is_student"]
print(person)
person.clear()
print(person)
