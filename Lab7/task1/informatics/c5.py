def solve(n):
    while n > 1:
        n /= 2

    return n == 1
n = int(input())

if solve(n):
    print("YES")
else:
    print("NO")