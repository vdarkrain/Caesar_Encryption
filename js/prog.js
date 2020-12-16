const BIAS = 3;
var value = document.getElementById("value");
var result = document.getElementById("result");
var button = document.getElementsByClassName("cryptButton");

function crypt() {
    let str = value.value;
    let out = "";
    for (var i = 0; i < str.length; i++)
    {
        let code = str.charCodeAt(i);
        code = code + BIAS;
        out += String.fromCharCode(code);
    }
    result.value = out;
}
