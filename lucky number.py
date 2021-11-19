'''import random
my_lucky_num = input('Enter 5 digit number to try your luck: ')
length_num = len(my_lucky_num)
if length_num == 3:
    list = []
    for i in range(5):
        list.append(random.randrange(1,10))
    for i in range(len(list)):
        draw_seq = int(i) + 1
        print( 'Draw ',draw_seq,": ", end=" ")
        print(list[i])
    x = ''
    for each in list:
        x += str(each)
        draw_num = int(x)
    lucky_num = int(my_lucky_num)
    print('Draw Number: ', draw_num)
    print('Your Number: ', lucky_num)
    if draw_num == lucky_num:
        print('Congratulations! You are a winner.')
    else:
        print('Sorry! Try your luck next time.')
else:
    print('Invalid number. Please try with 5 digits.')'''


amount=0
for i in range(1,4):
    num=input('enter the num: ')
    for j in range(1,2):
        if num[0]=="7":
            amount+=50
        elif num[2]=="7":
            amount+=50
        elif num[4]=="7":
            amount+=50
        else:
            amount=0
    if amount==0:
        print("No")
    else:
        print("YES")

