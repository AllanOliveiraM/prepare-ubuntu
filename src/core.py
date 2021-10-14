from os import system
from time import sleep

from .outputs import call_execution_error, call_execution_warning


def clear():
    system('clear')


def system_exec_command(command: str, required: bool = True, bypass_if_error: bool = False):
    try:
        result = system(command)

        if (result != 0):
            raise Exception(result)

    except Exception as error:
        if not bypass_if_error:
            if required:
                call_execution_error(
                    f'The "{command}" command cannot be executed.\n'
                    + 'The command is marked as necessary to continue,'
                    + ' for this reason the execution was interrupted.\n'
                    + "If you're sure what you're doing, run it manually."
                    + '\n\n'
                    + f'System exit: {error}'
                )

            else:
                call_execution_warning(
                    f'The "{command}" command cannot be executed.\n'
                    + "The command is registered as optional, so it"
                    + " will be ignored. If you're sure what you're"
                    + " doing, run it manually."
                    + '\n\n'
                    + f'System exit: {error}'
                )


def system_exec_shell_script(script_name, message=None, required: bool = True, bypass_if_error: bool = False):
    if message:
        print(message)
        sleep(2)

        system_exec_command(f'. ./src/scripts/{script_name}.sh', required=required, bypass_if_error=bypass_if_error)

        clear()
    else:
        system_exec_command(f'. ./src/scripts/{script_name}.sh', required=required, bypass_if_error=bypass_if_error)
