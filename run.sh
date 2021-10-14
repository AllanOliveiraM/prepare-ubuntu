echo "This script needs superuser permissions.\n"

sudo python3 main.py

echo "Running shell steps..."

usermod -s /usr/bin/zsh $(whoami)
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

echo "
Run 'nano ~/.zshrc' and add append zsh-autosuggestions & zsh-syntax-highlighting to plugins() like this:

plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
"
