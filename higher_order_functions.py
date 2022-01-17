addition = lambda val_1, val_2: val_1 + val_2



def calculate(value_1, value_2, operation):
    return operation(value_1, value_2)


def divisor(x):
    def dividend(y):
        return y / x

    return dividend


print(calculate(1, 2, addition))
divide = divisor(2)

print(divide(10))
