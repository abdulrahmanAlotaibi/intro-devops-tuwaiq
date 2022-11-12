#!/bin/bash

# Add needed packages to following list in order to install
declare -a packages=( "tldr" "cmatrix" )
# Add your shortcuts to following list in order to use it in terminal
declare -a aliass=( "cmx='cmatrix'" "hn='hostname'" )


function install_packages(){

    for package in ${packages[@]} 
    do
    # Installing package
    sudo apt install $package
    done
}


function create_shortcuts(){

    # Moving to home directory
    cd ~
    # Adding new line to .bashrc file
    echo "" >> .bashrc

    for i in ${aliass[@]}
    do
    # Adding new alias to .bashrc file 
        echo alias $i >> .bashrc
    done
}

# Invoke functions
install_packages
create_shortcuts
