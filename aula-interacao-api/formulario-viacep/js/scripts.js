const cepInput = document.querySelector("#cep")

cepInput.addEventListener("blur",()=>{

    /*
    sobre a regex|\D/g
    /.../ - delimita a expressão regular

    \D - É o inverso da de \d, ou seja,"qualquer caractere que nao seja digitp" (0 a 9)

    g - É a flag global, que faz a sibtituição ocorrer em todas as ocorrências do texto

    Exemplos:

    se o usuario digita 88.000-000 a função fara '88.000-000'. replace(/\D/g,'')// resultado:'88000000'

    */ 

    const cep = cepInput.value.replace(/\D/g,'')    
    if(cep.length === 8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data =>{
            if(!data.erro){
                document.querySelector("#logradouro").value = data.logradouro
                document.querySelector("#complemento").value = data.logradouro
                document.querySelector("#bairro").value = data.logradouro
                document.querySelector("#cidade").value = data.logradouro
                document.querySelector("#estado").value = data.uf
            } else{
                console.log("cep não encontrada")
            }
        })
    }
})