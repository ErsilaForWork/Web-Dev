x = int(input())

sum = 0

while x > 0:
    d = x % 10
    sum = sum * 10 + d
    x = x // 10

print(sum)