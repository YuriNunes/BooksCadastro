async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = "";
    try{
            var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            var consultaCEPConvertida = await consultaCEP.json();
            if(consultaCEPConvertida.erro){
                throw Error('CEP INVÁLIDO!')
            }
            

            var cidade = document.getElementById('cidade')
            var logradouro = document.getElementById('endereco')
            var estado = document.getElementById('estado')
            var bairro = document.getElementById('bairro')
            var tel = document.getElementById('telefone')

            tel.value = consultaCEPConvertida.ddd
            cidade.value = consultaCEPConvertida.localidade;
            logradouro.value = consultaCEPConvertida.logradouro;
            bairro.value = consultaCEPConvertida.bairro;
            estado.value = consultaCEPConvertida.uf;

            console.log(consultaCEPConvertida);
            return consultaCEPConvertida;
    }catch(erro){
        mensagemErro.innerHTML = `<p>CEP Inválido: Tente novamente!</p>`
        console.log(erro)
    }
}

const cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))

