from task2.models import Dog, Cat

def make_sound_n_times(n, animal):
    animal.make_sound_n_times(n)

dog1 = Dog("Rex", 5)
dog2 = Dog("Max", 2)
dog3 = Dog("Fido", 1)


cat1 = Cat("Tom", 3)
cat2 = Cat("Jerry", 1)
cat3 = Cat("Tiger", 2)

animals = [dog1, dog2, dog3, cat1, cat2, cat3]

dog1.eat_bone()
dog2.eat_bone()

cat2.eat_mouse()
cat2.eat_mouse()

c = 1
for animal in animals:
    print(f"{c} animal sound: ")
    make_sound_n_times(3, animal)
    c+=1

for animal in animals:
    print(animal)