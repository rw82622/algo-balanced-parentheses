def balance_parens(arg):
    #initialize your variables(PARENTHESIS, RESULT)
    paranthesis = []
    result = ''
    # iterate through every character in ARG
    for c in range(len(arg)):
        # alpha-numeric characters get added to RESULT immediately
        if arg[c].isalnum():
            result += arg[c]
        # add '(' to RESULT and PARENTHESIS only if there's a closing parenthesis in the remainder of ARG
        elif arg[c] == '(' and ')' in arg[c+1:]:
            paranthesis.append([len(result), arg[c]])
            result += arg[c]
        # add ')' to RESULT and pop PARENTHESIS only if PARENTHESIS isn't empty
        elif arg[c] == ')' and len(paranthesis) > 0:
            result += arg[c]
            paranthesis.pop()
    # After the for loop, remove extra '(' if there's one
    if len(paranthesis) == 1:
        index_to_pop = paranthesis[0][0]
        result = result[0:index_to_pop] + result[index_to_pop+1:]
    return result