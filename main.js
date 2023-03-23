var a = 1;
var b = 1;
var c = 1;
var d = 1;
var e = 1;
var x = 1;
var y;
var z = 1;
var w = 1;
var i = 1;
var m = 1;
var n = 1;
var o = 1;
var memory_stack = [];
var input = document.querySelector('input');
function inputElement() {
    input.value = " ";
}
function equalElement() {
    if (input.value.indexOf("yroot") !== -1) {
        var y_1 = yroot(input.value);
        ythrroot(Number(y_1[0]), Number(y_1[1]));
    }
    if ((input.value.indexOf("logy") !== -1)) {
        var y_2 = logy(input.value);
        logx_base_y(Number(y_2[0]), Number(y_2[1]));
    }
    try {
        input.value = eval(input.value);
    }
    catch (e) {
        input.value = "Error!";
    }
}
function expressionValue(value) {
    input.value += value;
}
function yroot(value) {
    var m = value.search("yroot");
    var n = value.substring(0, m);
    var o = value.substring(m + 5, value.length);
    return [o, n];
}
function ythrroot(val1, val2) {
    input.value = Math.pow(val2, 1 / val1).toString();
}
function logy(value) {
    var m = value.search("logy");
    var n = value.substring(0, m);
    var o = value.substring(m + 4, value.length);
    return [o, n];
}
function logx_base_y(num1, num2) {
    input.value = (Math.log(num1) / Math.log(num2)).toString();
}
function cr() {
    document.getElementById('clear').disabled = false;
    document.getElementById('recall').disabled = false;
}
function changeDropdown(val1, val2) {
    if (d == 1) {
        for (var _i = 0, _a = document.getElementsByClassName(val1); _i < _a.length; _i++) {
            var x_1 = _a[_i];
            x_1.style.display = "inline-block";
        }
        for (var _b = 0, _c = document.getElementsByClassName(val2); _b < _c.length; _b++) {
            var x_2 = _c[_b];
            x_2.style.display = "none";
        }
        d = 0;
    }
    else {
        for (var _d = 0, _e = document.getElementsByClassName(val2); _d < _e.length; _d++) {
            var x_3 = _e[_d];
            x_3.style.display = "inline-block";
        }
        for (var _f = 0, _g = document.getElementsByClassName(val1); _f < _g.length; _f++) {
            var x_4 = _g[_f];
            x_4.style.display = "none";
        }
        d = 1;
    }
}
function ElementValue(value) {
    switch (value) {
        case 'C': {
            input.value = "";
            break;
        }
        case 'x^2': {
            input.value = Math.pow(Number(input.value), 2).toString();
            break;
        }
        case 'x^3': {
            input.value = Math.pow(Number(input.value), 3).toString();
            break;
        }
        case 'square_root': {
            input.value = Math.sqrt(Number(input.value)).toString();
            break;
        }
        case 'cube_root': {
            input.value = Math.pow(Number(input.value), 0.3334).toFixed(1);
            break;
        }
        case 'backspace': {
            input.value = input.value.slice(0, -1);
            break;
        }
        case 'log': {
            input.value = Math.log(Number(input.value)).toString();
            break;
        }
        case 'ylog': {
            var z_1 = value.search("yroot");
            var y_3 = value.substring(0, z_1);
            var x_5 = value.substring(z_1 + 5, value.length);
            return [x_5, y_3];
            break;
        }
        case 'lnx': {
            input.value = Math.log(Number(input.value)).toString();
            break;
        }
        case 'power': {
            input.value = Math.pow(10, Number(input.value)).toString();
            break;
        }
        case 'power_2': {
            input.value = Math.pow(2, Number(input.value)).toString();
            break;
        }
        case 'e_x': {
            input.value = Math.exp(Number(input.value)).toString();
            break;
        }
        case 'floor_fun': {
            input.value = Math.floor(Number(input.value)).toString();
            break;
        }
        case 'ceiling_fun': {
            input.value = Math.ceil(Number(input.value)).toString();
            break;
        }
        case 'factorial': {
            var number = Number(input.value);
            if (number == 0 || number == 1) {
                input.value = "1";
            }
            else if (number > 1) {
                for (var i_1 = number - 1; i_1 > 1; i_1--) {
                    number = number * i_1;
                }
                input.value = number.toString();
            }
            break;
        }
        case 'open_bracket': {
            input.value += "(";
            break;
        }
        case 'close_bracket': {
            input.value += ")";
            break;
        }
        case 'exp': {
            input.value = Math.pow((Math.exp(1)), Number(input.value)).toString();
            break;
        }
        case '**': {
            input.value += value;
            break;
        }
        case 'random': {
            input.value = Math.random().toString();
            break;
        }
        case 'sign_change': {
            input.value = ((-1) * (Number(input.value))).toString();
            break;
        }
        case 'memory_clear': {
            memory_stack = [];
            break;
        }
        case 'memory_recall': {
            input.value = memory_stack[memory_stack.length - 1].toString();
            break;
        }
        case 'memory_add': {
            cr();
            if (memory_stack.length == 1) {
                memory_stack.push(parseInt(input.value));
            }
            else {
                memory_stack[memory_stack.length - 1] += parseInt(input.value);
            }
            break;
        }
        case 'memory_sub': {
            cr();
            if (memory_stack.length == 0) {
                memory_stack.push((-1) * parseInt(input.value));
            }
            else {
                memory_stack[memory_stack.length - 1] -= parseInt(input.value);
            }
            break;
        }
        case 'memory_store': {
            cr();
            if (memory_stack.length == 0) {
                memory_stack.push(parseFloat(input.value));
            }
            else {
                console.log("add");
                memory_stack.push(parseFloat(input.value));
            }
            break;
        }
        case 'pi': {
            if (Number(input.value.substring(-1))) {
                input.value = (Math.PI).toString();
            }
            else {
                input.value += Math.PI;
            }
            break;
        }
        case '%': {
            input.value += value;
            break;
        }
        case 'modulus': {
            input.value = Math.abs(Number(input.value)).toString();
            break;
        }
        case 'x_inverse': {
            input.value = (1 / (Number(input.value))).toString();
            break;
        }
        case 'e': {
            if (Number(input.value.substring(-1))) {
                input.value = (Math.exp(Number(1)).toString());
            }
            else {
                input.value += Math.exp(1);
            }
            break;
        }
        case 'deg': {
            if (i == 1) {
                document.querySelector('degree').innerHTML = "RAD";
                i = 0;
            }
            else {
                document.querySelector('degree').innerHTML = "DEG";
                i = 1;
            }
            break;
        }
        case 'fe': {
            if (w == 1) {
                input.value = Number(input.value).toString();
                w = 0;
            }
            else {
                input.value = Number(input.value).toExponential().toString();
                w = 1;
            }
            break;
        }
        default: {
            input.value += 0;
        }
        case 'sin': {
            if (i == 1) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }
            break;
        }
        case 'cos': {
            if (i) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }
            break;
        }
        case 'tan': {
            if (i) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }
            break;
        }
        case 'cosec': {
            if (i) {
                input.value = (1 / Math.sin(Math.PI / 180 * Number(input.value))).toString();
            }
            else {
                input.value = (1 / Math.sin(Number(input.value))).toString();
            }
            break;
        }
        case 'sec': {
            if (i) {
                input.value = (1 / Math.cos(Math.PI / 180 * Number(input.value))).toString();
            }
            else {
                input.value = (1 / Math.cos(Number(input.value))).toString();
            }
            break;
        }
        case 'cot': {
            if (i) {
                input.value = (1 / (Math.tan(Math.PI / 180 * Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.tan(Number(input.value))).toString();
            }
            break;
        }
        case 'sin_inverse': {
            if (i) {
                input.value = (180 / Math.PI * Math.asin(Number(input.value))).toString();
            }
            else {
                input.value = Math.asin(Number(input.value)).toString();
            }
            break;
        }
        case 'cos _inverse': {
            if (i) {
                input.value = (180 / Math.PI * Math.acos(Number(input.value))).toString();
            }
            else {
                input.value = Math.acos(Number(input.value)).toString();
            }
            break;
        }
        case 'tan_inverse': {
            if (i) {
                input.value = (180 / Math.PI * Math.atan(Number(input.value))).toString();
            }
            else {
                input.value = Math.atan(Number(input.value)).toString();
            }
            break;
        }
        case 'cosec_inverse': {
            if (i) {
                input.value = (180 / Math.PI * (Math.asin(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.asin(Number(input.value))).toString();
            }
            break;
        }
        case 'sec_inverse': {
            if (i) {
                input.value = (180 / Math.PI * (Math.acos(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.acos(Number(input.value))).toString();
            }
            break;
        }
        case 'cot_inverse': {
            if (i) {
                input.value = (180 / Math.PI * (Math.atan(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.atan(Number(input.value))).toString();
            }
            break;
        }
        case 'sinh': {
            var result = ((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / 2).toString();
            input.value = result;
            break;
        }
        case 'cosh': {
            var result = ((Math.exp(Number(input.value)) + Math.exp(Number(-input.value))) / 2).toString();
            input.value = result;
            break;
        }
        case 'tanh': {
            var result = (((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / (Math.exp(Number(input.value)) + Math.exp(Number(-input.value)))) * ((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / 2)).toString();
            input.value = result;
            break;
        }
        case 'cosech': {
            var result = (2 / (Math.exp(Number(input.value)) - Math.exp(Number(-input.value)))).toString();
            input.value = result;
            break;
        }
        case 'sech': {
            var result = (2 / (Math.exp(Number(input.value)) + Math.exp(Number(-input.value)))).toString();
            input.value = result;
            break;
        }
        case 'coth': {
            var result = ((Math.exp(Number(input.value)) + Math.exp(Number(-input.value))) / (Math.exp(Number(input.value)) - Math.exp(Number(-input.value)))).toString();
            input.value = result;
            break;
        }
        case 'sinh_inverse': {
            var result = (Math.log(Number(input.value) + Math.sqrt(Math.pow(Number(input.value), 2) + 1))).toString();
            input.value = result;
            break;
        }
        case 'cosh_inverse': {
            var result = (Math.log(Number(input.value) + Math.sqrt(Math.pow(Number(input.value), 2) - 1))).toString();
            input.value = result;
            break;
        }
        case 'tanh_inverse': {
            var result = (0.5 * Math.log((1 + Number(input.value)) / (1 - Number(input.value)))).toString();
            input.value = result;
            break;
        }
        case 'cosech_inverse': {
            var result = (Math.log(1 / Number(input.value) + Math.sqrt(1 / Math.pow(Number(input.value), 2) + 1))).toString();
            input.value = result;
            break;
        }
        case 'sech_inverse': {
            var result = (Math.log(1 / Number(input.value) + Math.sqrt(1 / Math.pow(Number(input.value), 2) - 1))).toString();
            input.value = result;
            break;
        }
        case 'coth_inverse': {
            var result = (0.5 * Math.log((Number(input.value) + 1) / (Number(input.value) - 1))).toString();
            input.value = result;
            break;
        }
    }
}
document.addEventListener('keydown', function (event) {
    var key = event.key;
    if (!isNaN(Number(key)) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        input.value += key;
    }
    else if (key === "Backspace" || key === "Delete") {
        var len = input.value.length;
        input.value = input.value.slice(0, Number(len) - 1);
    }
    else if (key === 'Enter') {
        equalElement();
    }
});
