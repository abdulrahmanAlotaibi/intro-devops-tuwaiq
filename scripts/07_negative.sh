#!/bin/bash

read -p "Enter a number: " num

if [[ $num -gt 0 ]] ; then
    echo "It's a positive number"
elif [[ $num -lt 0 ]] ; then 
    echo "The number is negative number"
elif [[ $num == 0 ]] ; then
    echo "The number is 0"
else
    echo "It's not a number"

fi
