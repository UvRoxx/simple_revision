# Filter
# Filter function creates a collection of elements fromm an iterable for which a function returns true

friends = [
    ("Someone_1", 23),
    ("Someone_2", 63),
    ("Someone_3", 53),
    ("Someone_4", 43),
    ("Someone_5", 23),
    ("Someone_6", 13),
]

teenager = lambda data: data[1] <= 30
filtered_frirends = filter(teenager, friends)
print(list(filtered_frirends))
