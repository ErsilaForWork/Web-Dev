#Merge the tools task

letters = [0] * 26

def merge_the_tools(string, k):
    for i in range(0, len(string), k):
        chunk = string[i:i + k]
        seen = set()
        unique_chars = []

        for ch in chunk:
            if ch not in seen:
                seen.add(ch)
                unique_chars.append(ch)

        print("".join(unique_chars))

merge_the_tools(input(), int(input()))