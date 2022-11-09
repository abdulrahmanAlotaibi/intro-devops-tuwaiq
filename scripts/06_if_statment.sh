#!/bin/bash

# This is a different way of having string
read -p "What is your first word? " word1
read -p "What is your second word ? " word2

if [[ "${word1}" == "${word2}" ]] ; then
    echo "Words are the same"
else
    echo "Words are not the same"
fi