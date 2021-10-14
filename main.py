from src.prepare import update, upgrade, previous_install_clear
from src.core import system_exec_shell_script, system_exec_command, clear
from time import sleep

previous_install_clear()
update()

# Main script

system_exec_shell_script(
    'global-dependencies',
    message='Installing main dependencies...'
)
system_exec_shell_script(
    'keys',
    message='Adding sources keys...'
)
update()
upgrade()

apt_install_packages = [
    'google-chrome-stable',
    'default-jdk',
    'snapd',
    'nodejs',
    'npm',
    'yarn',
    'gparted',
    'cheese',
    'python3.9',
    'gnome-tweaks',
    'gnome-shell-extensions',
    'arc-theme',
    'zsh',
    'caffeine',
    'git',
]

for command in apt_install_packages:
    system_exec_command(f'sudo apt-get install {command} -y')

snap_install_package_commands = [
    'android-studio --classic',
    'google-cloud-sdk --classic',
    'code --classic',
    'postman',
    'gimp',
    'pycharm-community --classic',
    'spotify',
    'discord',
]

for command in snap_install_package_commands:
    system_exec_command(f'sudo snap install {command}')

system_exec_command('mkdir -v ~/.{themes,icons}', bypass_if_error=True)

clear()
print('!!! ATTENTION 1 of 2 !!!: Possible errors or problems have been recorded in the execution-logs.txt file if it exists. Continuing to attention 2 in 5 seconds.')
sleep(5)

clear()
print('!!! ATTENTION 2 of 2 !!!: The following steps need manual attention in their results. Continuing in 5 seconds.')
sleep(5)
