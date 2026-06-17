document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const mensagemDiv = document.getElementById('mensagem');

    // DESENVOLVEDOR A: CAPTURE O VALOR DO INPUT DE EMAIL AQUI
    const email = document.getElementById('email').value;


    // DESENVOLVEDOR B: CAPTURE O VALOR DA SENHA E FAÇA A VALIDAÇÃO DE TAMANHO AQUI
    const campoSenha = document.getElementById('senha');
    const senhaErro = document.getElementById('senhaErro'); // Elemento span que criamos no HTML
    const senhaValor = campoSenha.value;

    // Reseta os estilos de erro a cada tentativa de envio
    campoSenha.classList.remove('erro');
    if (senhaErro) {
        senhaErro.textContent = '';
    }

    // Validação: se a senha tiver menos de 6 caracteres
    if (senhaValor.length < 6) {
        // Adiciona a classe .erro (borda vermelha) ao input
        campoSenha.classList.add('erro');
        
        // Exibe a mensagem em vermelho na tela
        if (senhaErro) {
            senhaErro.textContent = "A senha deve ter pelo menos 6 caracteres.";
        } else {
            // Caso não tenha o span no HTML, usa a div de mensagem genérica
            mensagemDiv.innerText = "A senha deve ter pelo menos 6 caracteres.";
            mensagemDiv.style.color = "red";
        }
        
        // O return impede que o código continue e exiba a mensagem de sucesso abaixo
        return;
    }
    

    // LÓGICA DE EXIBIÇÃO
    // Ambos os alunos precisarão ajustar esta mensagem conforme suas respectivas tarefas
    mensagemDiv.innerText = `Usuário ${nome} cadastrado com sucesso!`;
    mensagemDiv.style.color = "green";
});