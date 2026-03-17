#Intro to sets

def average(array):
    unique = set(array)

    summ = sum(unique)

    return summ / len(unique)