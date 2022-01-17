# Reduce
# reduce() = This helps to reduce the iterable to a single cumulative value.
# performs function on first two elements and repeats the process unitl 1 value remains
# reduce (function,iterable)
import functools

letters = "HELLO".split()  # so considering we have an array of strings

reduced_list = functools.reduce(lambda a, b: a + b, letters)
print(letters)
#  We can also use it for something more practical like calculating a factorial
factorial = [1, 2, 3, 4, 5]
result = functools.reduce(lambda a, b: a * b, factorial)
print("Result:", result)
