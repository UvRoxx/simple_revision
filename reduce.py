# Reduce
# reduce() = This helps to reduce the iterable to a single cumulative value.
# performs function on first two elements and repeats the process unitl 1 value remains
# reduce (function,iterable)
import functools

letters = "HELLO".split()  # so considering we have an array of strings

reduced_list = functools.reduce(lambda a, b: a + b, letters)
print(letters)
