from abc import abstractmethod, ABC

class Animal(ABC):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @abstractmethod
    def make_sound(self):
        pass

    def make_sound_n_times(self, n):
        for i in range(n):
            self.make_sound()

    def __str__(self):
        return f"{self.name} is {self.age} years old"

class Dog(Animal):

    def __init__(self, name, age, number_of_bones_eaten = 0):
        super().__init__(name, age)
        self.number_of_bones_eaten = number_of_bones_eaten

    def make_sound(self):
        print("Woof!")

    def eat_bone(self):
        self.number_of_bones_eaten+=1

    def __str__(self):
        return f"{self.name} is {self.age} years old and has eaten {self.number_of_bones_eaten} bones"

class Cat(Animal):

    def __init__(self, name, age, number_of_mice_eaten = 0):
        super().__init__(name, age)
        self.number_of_mice_eaten = number_of_mice_eaten

    def make_sound(self):
        print("Meow!")

    def eat_mouse(self):
        self.number_of_mice_eaten+=1

    def __str__(self):
        return f"{self.name} is {self.age} years old and has eaten {self.number_of_mice_eaten} mice"
