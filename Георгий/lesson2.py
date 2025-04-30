'''print('Цикл range с двумя аргументами')
for i in range(10, 20):
    print(i)

print('Цикл range с тремя аргументами')
for i in range(10, 20, 2):
    print(i)'''

'''povtor = 10
for i in range(povtor):
    print(i)

povtor2 = int(input('Введите количевство повторений цикла: '))
for i in range(povtor2):
    print(i)'''

'''a = 0
while True:
    a = a+1
    print(a)
    if a == 200:
        break #остановка цикла

b = 0
while b<100:
    b = b+1
    print(b)'''


'''a=0
while True:
    a=a+1
    print(a)
    if a == 10:
        break '''


'''for i in range (10):
    print (i)'''


'''a = 0
while a < 11:
    a=a+1
    print (a)
    
    if a==1:
        print ('Понедельник')
    elif a == 2:
        print ('Вторник')
    elif a == 3:
        print ('Среда')
    elif a == 4:
        print ('Четверг')
    elif a == 5:
        print ('Пятница')
    elif a == 7:
        print ('Cуббота')
    elif a == 8:
        print ('Воскресенье')'''
"""names = ['Ivan', 'Nastya', 'Masha', 45]
print (names)


#Индексы     0        1     2       3
cities = ['Moscow', 'SPB','EKB','Rostov']
print(cities)
print(cities[2])
print(names[2])

#Добавление в конец
cities.append('Kazan')
print (cities)
cities.append('Volgograd')
print(cities)


#Удаление по индексу
del cities [2]
print (cities)

#Удаление с конца
cities.pop (3)
print(cities)
print('Удалённый эл.', cities[3])"""

'''users = ('Misha', 'Vitya', 'Gosha')
print(users)

my_list = ['mersedes', 'bmw', 'renault', 'hundai', 'honda', 'cherry']
razmer = len(my_list)
print('Размер списка my_list', razmer)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
#Количевство эл. в списке
print(len(numbers))
#Максимальный эл. в списке
print(max(numbers))
#Максимальный эл. в списке
print(max(numbers))

#insert метод для добавление новых элементов под определённый индекс
numbers.insert(3, 'Новое значение под индексом 3')
print(numbers)'''
'''#                         0                                   1                   2      3
#            0[0]       0[1]      0[2]           1[0]       1[1]      1[2]      
fruits = [[ 'Яблоко', 'Груша', 'Апельсин',], ['Клубника', 'Малина', 'Черника'], 'Дыня', 'Арбуз']
print('Вывод всего списка', fruits)
print('Вывод индекса 0 из списка', fruits[0])
print('Вывод индекса 1 из списка', fruits[1])
print('Вывод индекса 2 из списка', fruits[2])
print('Вывод индекса 3 из списка', fruits[3])'''

'''names = ['Mike', 'Jany', 'Destini']
for name in names:
    print(name)

print('Пример 2.')
fruits = [[ 'Яблоко', 'Груша', 'Апельсин',], ['Клубника', 'Малина', 'Черника'], 'Дыня', 'Арбуз']
for fruit in fruits:
    print(fruit)
    #Вывод каждого элемента из под списка
    for i in fruit:
        print(i)

foods = ['Каша','Омлет','Яичница']
for food in foods:
    print(food)'''

'''users = ['vanya', 'паша', 'гриша', 'гоша', 'маша', 'георгий']
for user in users:
    print(user)

    if user == 'георгий':
        print('Этого пользователя не удалять!')

    if user == 'паша':
        users.remove(user)
        print('Удалён пользователь', user)
        print(users)

    if user == 'маша':
        print('Маша привет')

print(users)'''
#                0            1              2            3            4                               5
passwords = ['vj4dks32s9','a2kenaswq4kg4','jdjwn2o58','345jw','djwu3hduahw','dahs3y4r732yr723yr7q3yra7yr73wyf7rywa3r7fyaw3f7twy38f5y3a87y32f87ryw7']
for password in passwords:
    print(password)
    dlina = len(password)
    if dlina < 8 or dlina > 32:
        passwords.remove(password)
        print('Удалён пароль')
print(passwords)





    

    











    

