from time import sleep

from .core import system_exec_command, clear


def previous_install_clear():
    print('Cleaning previous snap files if exists...')

    sleep(2)

    system_exec_command(
        'rm /etc/apt/preferences.d/nosnap.pref', bypass_if_error=True)
    clear()

    system_exec_command(
        'apt autoremove -y', bypass_if_error=True)
    clear()


def update():
    print('Updating repos...')

    sleep(2)

    system_exec_command('apt-get update', bypass_if_error=True)
    clear()

def upgrade():
    print('Upgrating system...')

    sleep(2)

    system_exec_command('apt-get upgrade -y', bypass_if_error=True)
    clear()
