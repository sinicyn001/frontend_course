print("Привет мир! Я пишу свою первую программу")
print(52)
print(True)

name = 'Георгий'
print('Привет', name)
print('Пошли',name)
print('Погнали',name)

string = 'букварь'
integer = 45
print(string, integer, 'руб.')

game_name = input('Введите название вашей любимой игры: ')
print('Ого вы в числе многих людей которые играют в эту игру:', game_name)


student_name = input('Введите имя ученика: ')
print(student_name)

if student_name == 'Миша':
    print('Такой ученик есть в группе')
elif student_name == ('Георгий'):
    print('Ну Георгий у нас точно есть')
elif student_name == 'Витя':
    print('Витя присутствует')
else:
    print('Такого ученика нет')


a = int(input ('Введите первое число: '))
b = int(input ('Введите второе число: '))
print(a+b)

if a > b:
    print('Число',a, 'больше числа', b)
else:
    print('Число',b, 'больше числа', a)
