function stringToHex(str) {
    var hex = '';
    for(var i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16);
    }
    return hex;
}

function hexToString(hex) {
    var str = '';
    for(var i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

function encrypt() {
    var inputText = document.getElementById('inputText').value;
    var encryptedText = stringToHex(inputText);
    document.getElementById('output').innerHTML = 'Texto Criptografado: ' + encryptedText;
}

function decrypt() {
    var inputText = document.getElementById('inputText').value;
    var decryptedText = hexToString(inputText);
    document.getElementById('output').innerHTML = 'Texto Descriptografado: ' + decryptedText;
}