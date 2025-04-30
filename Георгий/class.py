class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


    def hello(self):
        print(f'Меня зовут {self.name}, Мне {self.age} лет.')

person = Person('Чебурашка' , 16)
person.hello()

