#!/bin/bash


function installPackages(){
# TODO: Install needed libries
# 1) install brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# 2) install git through brew
brew install git
}

function createShortcuts(){
# TODO: Create aliases and add them to your shell profile (~/.zshrc or ~/.bashrc)
echo 'alias cpu="sysctl -n machdep.cpu.brand_string"' >> ~/.zshrc
echo 'alias myip="curl -s https://icanhazip.com"' >> ~/.zshrc
}

installPackages
createShortcuts