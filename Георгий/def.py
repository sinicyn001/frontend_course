# #def         -DEclare Function - "Объявить функцию"
# #hello       - имя функции
# #(name)      - список аргументов,поступающих на вход функции при её вызову
# #тело функции- это весь код,который идёт после двоеточия

# def hello():
#     print('helloSPB')

# hello() #Вызов функции

# def privet(name):
#     print('hello', name)

# privet(name='misha')

# #Функции арифмитических операций
# def sum(a, b):
#     print(a+b)

# sum(4, 5)

# def raznost(a,b):
#     result_loc = a - b
#     return result_loc

# result_glob = raznost(5, 4)
# print(result_glob)

# def ym(a, b):
#     print(a*b)

# ym(4, 5)

# def ym(a, b):
#     result_loc = a * b
#     return result_loc

# result_glob1 = ym(5, 4)
# print(result_glob1)

# def delenue(a, b):
#     print(a/b)

# delenue(4, 5)

#numbers = [4, 7, 1, 9, 7, 3, 5, 2]
#print (max(numbers))
#print (min(numbers))

students = ['Георгий', 'Миша', 'Дима']
students.append('Алиса')
students.remove('Миша')
for i in students:
    print(i)
    if i == 'Дима':
        students.remove(i)

print(students)