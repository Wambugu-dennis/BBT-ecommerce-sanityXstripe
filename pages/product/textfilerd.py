# prompt user for filename
filename = input("Enter filename: ")

# load file into program
with open(filename, 'r') as f:
    lines = f.readlines()

# enter loop to navigate file
while True:
    # print number of lines in file
    print("This file has", len(lines), "lines.")

    # prompt user for line number
    line_num_str = input("Enter a line number (or 'exit' to quit): ")

    # exit case
    if line_num_str.lower() == 'exit':
        break

    # error case: input is not an integer or 'exit'
    if not line_num_str.isdigit():
        print("Invalid input. Please enter an integer or 'exit'.")
        continue

    # convert input to integer
    line_num = int(line_num_str)

    # error case: input is out of range
    if line_num < 1 or line_num > len(lines):
        print("Invalid input. Line number must be between 1 and", len(lines))
        continue

    # output corresponding line
    print(lines[line_num - 1])
