let a: number = 1;
let b: number = 1;
let c: number = 1;
let d: number = 1;
let e: number = 1;
let x: number = 1;
let y: number[];
let z: number = 1;
let w: number = 1;
let i: number = 1;
let m: number = 1;
let n: number = 1;
let o: number = 1;

let memory_stack: any[] = [];

let input = document.querySelector<HTMLInputElement>('input')!;

function inputElement(): void {
    input.value = " ";
}


function equalElement(): void {
    if (input.value.indexOf("yroot") !== -1) {
        let y: string[] = yroot(input.value);
        ythrroot(Number(y[0]), Number(y[1]));
    }
    if ((input.value.indexOf("logy") !== -1)) {
        let y: string[] = logy(input.value);
        logx_base_y(Number(y[0]), Number(y[1]));
    }
    try {
        input.value = eval(input.value);
    } catch (e) {
        input.value = "Error!";
    }
}




function expressionValue(value: string) {
    input.value += value;
}






function yroot(value: string) {
    let m = value.search("yroot");
    let n = value.substring(0, m);
    let o = value.substring(m + 5, value.length);
    return [o, n]
}
function ythrroot(val1: number, val2: number) {
    input.value = Math.pow(val2, 1 / val1).toString();
}





function logy(value: string) {
    let m = value.search("logy");
    let n = value.substring(0, m);
    let o = value.substring(m + 4, value.length);
    return [o, n]
}
function logx_base_y(num1: number, num2: number) {
    input.value = (Math.log(num1) / Math.log(num2)).toString();
}





function cr(): void {
    (document.getElementById('clear') as HTMLButtonElement).disabled = false;
    (document.getElementById('recall') as HTMLButtonElement).disabled = false;
}

function changeDropdown(val1: string, val2: string): void {
    if (d == 1) {
        for (let x of <any>document.getElementsByClassName(val1)) {
            x.style.display = "inline-block";
        }

        for (let x of <any>document.getElementsByClassName(val2)) {
            x.style.display = "none";
        }
        d = 0;
    } else {
        for (let x of <any>document.getElementsByClassName(val2)) {
            x.style.display = "inline-block";
        }
        for (let x of <any>document.getElementsByClassName(val1)) {
            x.style.display = "none";
        }
        d = 1;
    }
}






function ElementValue(value: string) {

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
            let z = value.search("yroot");
            let y = value.substring(0, z);
            let x = value.substring(z + 5, value.length);
            return [x, y]
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
            let number = Number(input.value);
            if (number == 0 || number == 1) {
                input.value = "1";
            }
            else if (number > 1) {
                for (let i = number - 1; i > 1; i--) {
                    number = number * i;
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

            cr()
            if (memory_stack.length == 1) {
                memory_stack.push(parseInt(input.value));
            }

            else {

                memory_stack[memory_stack.length - 1] += parseInt(input.value);
            }
            break;
        }


        case 'memory_sub': {

            cr()
            if (memory_stack.length == 0) {
                memory_stack.push((-1) * parseInt(input.value));
            }
            else {
                memory_stack[memory_stack.length - 1] -= parseInt(input.value);
            }
            break;
        }


        case 'memory_store': {

            cr()
            if (memory_stack.length == 0) {
                memory_stack.push(parseFloat(input.value));
            }

            else {
                console.log("add")
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
                document.querySelector<HTMLButtonElement>('degree')!.innerHTML = "RAD";
                i = 0;
            }
            else {
                document.querySelector<HTMLButtonElement>('degree')!.innerHTML = "DEG";
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
            input.value += 0
        }




        case 'sin': {
            if (i == 1) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }

            break;
        } case 'cos': {
            if (i) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }

            break;
        } case 'tan': {
            if (i) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }

            break;
        } case 'cosec': {
            if (i) {
                input.value = (1 / Math.sin(Math.PI / 180 * Number(input.value))).toString();
            }
            else {
                input.value = (1 / Math.sin(Number(input.value))).toString();
            }

            break;
        } case 'sec': {
            if (i) {
                input.value = (1 / Math.cos(Math.PI / 180 * Number(input.value))).toString();
            }
            else {
                input.value = (1 / Math.cos(Number(input.value))).toString();
            }

            break;
        } case 'cot': {
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
        } case 'cos _inverse': {
            if (i) {
                input.value = (180 / Math.PI * Math.acos(Number(input.value))).toString();
            }
            else {
                input.value = Math.acos(Number(input.value)).toString();
            }

            break;
        } case 'tan_inverse': {
            if (i) {
                input.value = (180 / Math.PI * Math.atan(Number(input.value))).toString();
            }
            else {
                input.value = Math.atan(Number(input.value)).toString();
            }

            break;
        } case 'cosec_inverse': {
            if (i) {
                input.value = (180 / Math.PI * (Math.asin(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.asin(Number(input.value))).toString();
            }

            break;
        } case 'sec_inverse': {
            if (i) {
                input.value = (180 / Math.PI * (Math.acos(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.acos(Number(input.value))).toString();
            }

            break;
        } case 'cot_inverse': {
            if (i) {
                input.value = (180 / Math.PI * (Math.atan(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.atan(Number(input.value))).toString();
            }

            break;
        }





        case 'sinh': {
            let result = ((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / 2).toString();
            input.value = result;


            break;
        } case 'cosh': {

            let result = ((Math.exp(Number(input.value)) + Math.exp(Number(-input.value))) / 2).toString();
            input.value = result;

            break;
        } case 'tanh': {
            let result = (((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / (Math.exp(Number(input.value)) + Math.exp(Number(-input.value)))) * ((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / 2)).toString();
            input.value = result;

            break;
        } case 'cosech': {
            let result = (2 / (Math.exp(Number(input.value)) - Math.exp(Number(-input.value)))).toString();
            input.value = result;

            break;
        } case 'sech': {
            let result = (2 / (Math.exp(Number(input.value)) + Math.exp(Number(-input.value)))).toString();
            input.value = result;
            break;
        } case 'coth': {
            let result = ((Math.exp(Number(input.value)) + Math.exp(Number(-input.value))) / (Math.exp(Number(input.value)) - Math.exp(Number(-input.value)))).toString();
            input.value = result;

            break;
        }





        case 'sinh_inverse': {
            let result = (Math.log(Number(input.value) + Math.sqrt(Math.pow(Number(input.value), 2) + 1))).toString();
            input.value = result;

            break;
        } case 'cosh_inverse': {
            let result = (Math.log(Number(input.value) + Math.sqrt(Math.pow(Number(input.value), 2) - 1))).toString();
            input.value = result;

            break;
        } case 'tanh_inverse': {
            let result = (0.5 * Math.log((1 + Number(input.value)) / (1 - Number(input.value)))).toString();
            input.value = result;

            break;
        } case 'cosech_inverse': {
            let result = (Math.log(1 / Number(input.value) + Math.sqrt(1 / Math.pow(Number(input.value), 2) + 1))).toString();
            input.value = result;

            break;
        } case 'sech_inverse': {
            let result = (Math.log(1 / Number(input.value) + Math.sqrt(1 / Math.pow(Number(input.value), 2) - 1))).toString();
            input.value = result;
            break;
        } case 'coth_inverse': {
            let result = (0.5 * Math.log((Number(input.value )+ 1) / (Number(input.value) - 1))).toString();
            input.value = result;

            break;
        }
    }
}


document.addEventListener('keydown', function (event) 
{  var key: string = event.key; if (!isNaN(Number(key)) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.')
 { input.value += key; } 
 else if 
 (key === "Backspace" || key === "Delete") { let len = input.value.length; input.value = input.value.slice(0, Number(len) - 1); } 
 else if 
 (key === 'Enter') { equalElement() } });