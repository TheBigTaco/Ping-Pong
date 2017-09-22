# Ping Pong

#### A program that replaces multiples of 3 5 and 15 with ping, pong, and ping-pong respectively.

##### _09/22/17_

#### By Adam Titus

## Description
A website that allows a user to input a number and see all multiples of 3 5 and 15 changed to ping, pong, and ping pong respectively. It also has a hangman game attached to it, that allows users to input letters one at a time and guess a pre-set word of my choosing.

``Viewable at TheBigTaco.github.io/Ping-Pong``

## Installation Requirements
* Clone this repository to the location of your choice
* Navigate to this location using terminal, gitbash, or something similar.
* Open it in your favored text editor
* Must have a working internet connection

## Known Bugs
The Hangman game currently will let you win by submitting the correct letters 8 times, even if it's the same letter multiple times.

## Specs

|Behavior|Input|Output|
|--------|-----|------|
|Will ignore non-numbers|Hello, there.| "Please enter a number"|
|Will count up to the inputed number| 4 | 1,2,3,4|
|Will replace multiples of 3 with the word ping| 3 | 1,2,ping|
|Will replace multiples of 5 with the word pong| 5 | 1,2,ping,4,pong|
|Will replace multiples of 15 with the words ping-pong| 15 | 1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,ping-pong|

## Technologies Used
This app was built with Atom, Terminal, Github, Bootstrap, and jQuery.

### Contact Me
You can reach me at adamtitus76@gmail.com.

### License
This is licensed under the MIT license. If you find a way to monetize this please contact me.

Copyright (c) 2017 **Adam Titus**
