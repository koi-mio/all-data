from math import pi
import sys
import random
from enum import Enum

name = "Alice"
greeting = f"Hello, {name:<10}. You are 30 years old."
print(greeting)


greeting = f"Hello, {name:>10}. You are 30 years old."
print(greeting)

greeting = f"Hello, {name:^10}. You are 30 years old."
print(greeting)


text = "hello world"
formatted_text = f"Original: {text}, Capitalized: {text.capitalize()}"
print(formatted_text)


person = {"name": "Alice", "age": 30}
greeting = f"Hello, {person['name']}. You are {person['age']} years old."
print(greeting)


print(pi)
print(sys.float_info)
print(random.normalvariate)
print(random)
print(Enum.__call__)
