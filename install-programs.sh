sudo rm /etc/apt/preferences.d/nosnap.pref
sudo apt-get update
sudo apt-get upgrade

sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386 gdebi-core wget curl -y

sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update

sudo apt-get install google-chrome-stable -y

sudo apt-get install default-jdk -y

sudo apt install snapd -y

sudo apt-get install nodejs -y

sudo apt-get install npm -y

sudo apt install yarn -y

sudo snap install android-studio --classic

sudo snap install google-cloud-sdk --classic

sudo snap install code --classic

sudo snap install postman

sudo snap install gimp

sudo snap install pycharm-community --classic

sudo snap install spotify

sudo apt install gparted -y

sudo snap install dbeaver-ce

sudo apt-get install cheese -y

sudo snap install discord

sudo apt-get install python3.9 -y

sudo apt install gnome-tweaks -y

sudo apt install zsh -y

sudo usermod -s /usr/bin/zsh $(whoami)

sudo apt install caffeine -y

sudo apt install git -y

sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

echo "Run 'nano ~/.zshrc' and add append zsh-autosuggestions & zsh-syntax-highlighting to plugins() like this

plugins=(git zsh-autosuggestions zsh-syntax-highlighting)"




