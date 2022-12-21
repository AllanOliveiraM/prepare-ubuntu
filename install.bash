#!/bin/bash

echo "Installing core dependencies..."

sudo apt update

sudo apt install curl git -y

echo "Installing NVM..."

curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

install() {
    echo "Installing correct node version..."

    nvm install v18.12.1

    nvm use v18.12.1

    nvm alias default v18.12.1

    echo "Installing YARN"

    sudo npm install -g yarn

    yarn

    clear

    yarn start
}

echo "NPM version:"

if npm -v; then
    install
else
    echo "NPM Not found."

    echo "Installing core NodeJs and NPM..."

    sleep 2

    sudo /bin/sh -c 'apt install -y aptitude'

    sudo aptitude safe-upgrade -y

    sudo aptitude update

    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

    sudo apt install -y nodejs

    sudo aptitude install npm -y

    install
fi
