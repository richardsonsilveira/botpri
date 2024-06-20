// Função para automatizar os votos na enquete incorporada
async function automatizarVotos() {
    const iframe = document.getElementById('enqueteFrame');
    
    // Verificar se o iframe foi carregado
    if (!iframe) {
        console.error('Erro: iframe não encontrado.');
        return;
    }

    // Acessar o conteúdo do iframe
    const iframeContent = iframe.contentWindow.document;
    
    try {
        // Selecionar a opção de voto dentro do iframe (exemplo)
        const opcao = iframeContent.getElementById('opt-6733');
        if (opcao) {
            opcao.click();
            console.log('Opção selecionada dentro do iframe.');
        } else {
            console.error('Opção não encontrada dentro do iframe.');
            return;
        }

        // Aguardar um segundo para o clique ser registrado
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Submeter a enquete dentro do iframe (exemplo)
        const botaoVotar = iframeContent.querySelector('.btn-votar');
        if (botaoVotar) {
            botaoVotar.click();
            console.log('Voto registrado com sucesso dentro do iframe.');
        } else {
            console.error('Botão de votar não encontrado dentro do iframe.');
            return;
        }

        // Aguardar alguns segundos para garantir que o voto seja registrado
        await new Promise(resolve => setTimeout(resolve, 3000));

    } catch (error) {
        console.error(`Erro ao automatizar votos dentro do iframe: ${error}`);
    }
}

// Função para manipular o clique do botão
function iniciarAutomacao() {
    automatizarVotos(); // Chama a função de automatização
}

// Associar o clique do botão à função de iniciar automação
const btnAutomatizar = document.getElementById('btnAutomatizar');
btnAutomatizar.addEventListener('click', iniciarAutomacao);
