#! /bin/bash


#create list of library
#create list of Aliase

function installPackages(){

    #for each in the library list install it.
    echo "install git..."
    sudo apt install git
}

function createShortcuts(){
    #for each in the Aliase create it.
    echo "adding alias abdulrahman => ls -a"
     alias abdulrahman="ls -a" >> ~/.profile
     
}
installPackages
createShortcuts


