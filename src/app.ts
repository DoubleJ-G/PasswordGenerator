interface passwordOptions {
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean
}

function generatePassword( length: number, options: passwordOptions): string{ 

    const characterSet = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "1234567890",
        symbols: "!@#$%^&*"
    }

    let validCharacters: string = ""; 

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

    let password = "";
    for (var i = 0; i < length; i++) {
        password = password + validCharacters[Math.floor(Math.random()*validCharacters.length)];
    }

    return password;

}


const text = document.getElementById('password')!;
const len = document.getElementById('length')! as HTMLInputElement;
const upper = document.getElementById('upper')! as HTMLInputElement;
const lower = document.getElementById('lower')! as HTMLInputElement;
const numbers = document.getElementById('numbers')! as HTMLInputElement;
const symbols = document.getElementById('symbols')! as HTMLInputElement;

function onClick() { 
    text.innerHTML = generatePassword(parseInt(len.value), {uppercase: upper.checked, lowercase: lower.checked, numbers: numbers.checked, symbols: symbols.checked});
}

onClick();