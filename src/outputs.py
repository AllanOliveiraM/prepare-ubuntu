from datetime import datetime


def save_log_file(data):
    now = datetime.now()
    file = open('execution-logs.txt', 'a')

    new_content = f'''#### {now.month}/{now.day}/{now.year} {now.hour}:{now.minute}:{now.second}

{data}


'''
    file.write(new_content)
    file.close()


def call_execution_error(message):
    out = f'ERROR: {message}'

    save_log_file(out)

    print(out)


def call_execution_warning(message):
    out = f'WARNING: {message}'

    save_log_file(out)

    print(out)
