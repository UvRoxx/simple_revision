# Map function in python
# map() applies a function to each item in an iterable(list,tuple,etc)
# map(function,iterable)
from pprint import pprint

store = [
    ("shirt", 20.00),
    ("pants", 25.00),
    ("jackets", 30.00),
    ("socks", 50.00)
]
# Here we assume this is a a data set with prices in USD and we need to convert them to CAD
convert = lambda data: (data[0], data[1] * 1.2)

converted_rate =list(map(convert, store))
pprint(converted_rate)
