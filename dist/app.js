"use strict";
function generatePassword(length, options) {
    var characterSet = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "1234567890",
        symbols: "!@#$%^&*"
    };
    var validCharacters = "";
    if (options.uppercase) {
        validCharacters += characterSet.uppercase;
    }
    if (options.lowercase) {
        validCharacters += characterSet.lowercase;
    }
    if (options.numbers) {
        validCharacters += characterSet.numbers;
    }
    if (options.symbols) {
        validCharacters += characterSet.symbols;
    }
    if (validCharacters.length === 0) {
        return "";
    }
    var password = "";
    for (var i = 0; i < length; i++) {
        password = password + validCharacters[Math.floor(Math.random() * validCharacters.length)];
    }
    return password;
}
var text = document.getElementById('password');
var len = document.getElementById('length');
var upper = document.getElementById('upper');
var lower = document.getElementById('lower');
var numbers = document.getElementById('numbers');
var symbols = document.getElementById('symbols');
function onClick() {
    text.innerHTML = generatePassword(parseInt(len.value), { uppercase: upper.checked, lowercase: lower.checked, numbers: numbers.checked, symbols: symbols.checked });
}
onClick();
