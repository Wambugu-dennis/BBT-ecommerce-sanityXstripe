    # this fuction loads the contents of a file into a list of lines in the file.
def load_file(filename):
    with open(filename, 'r') as f:
        lines = f.readlines()
    return lines


    # this function lets the user to navigate the lines of the file. 
    # It also checks the error condition and the exit keyword condition.
def navigate_file(lines):  
    # looping through  
    while True:
        # show number of lines in file
        print("Your file has", len(lines), "lines.") 
        line_num_str = input("Enter desired line number or 'exit' to quit: ")
        # if input is "exit", convert string entered to lower case and exit program.
        if line_num_str.lower() == 'exit': 
            break
        # checking whether the entered line number is a an int and number is >1 and <=number of lines in file. 
        try:
            line_num = line_num_str.isdigit()
            if line_num < 1 or line_num > len(lines):
                raise ValueError
        except ValueError:
            print("Invalid input. The line number must be between 1 and", len(lines))
        else:
            print(lines[line_num - 1])


def main():
    # Prompt the user for a filename and navigates the corresponding file. You can supply a path.
    filename = input("Enter filename: ")
    lines = load_file(filename)
    navigate_file(lines)

if __name__ == '__main__':
    main()
