let input = document.getElementById('input');
let h1 = document.getElementById('h1');
let erro = document.getElementById('h1erro');
let erroh2 = document.getElementById('h2erro');
let btn1 = document.getElementById('btn1');


function semNum() {
    let valorInput = input.value;
    let leninput = valorInput.length;

    if(leninput !== 8) {
         
        erro.innerHTML = 'Número inválido';
        erroh2.innerHTML = 'Digite apenas números';

    }
    else if((valorInput !=="") && (valorInput !==null) && (valorInput !== undefined)){

        document.getElementById('btn').type = "submit";
        console.log("com valor");
    }
    else {

        erro.innerHTML = 'Número inválido'; 
        erroh2.innerHTML = 'Digite apenas números';     
    }
};

