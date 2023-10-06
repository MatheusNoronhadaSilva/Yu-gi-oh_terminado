'use strict'

async function pegarImagens(){
    const endPoint ='https://db.ygoprodeck.com/api/v7/cardinfo.php?type=spell%20card'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.data
}


function criarTagImg(imagem) {
    const galeria = document.getElementById('cartas');
    const tagImg = document.createElement('img');
    tagImg.src = imagem.card_images[0].image_url;
    tagImg.addEventListener('click', function() {
        // Função a ser executada quando a imagem é clicada
        console.log('Imagem com ID ' + imagem.id + ' foi clicada.');
        const galeria_info = document.getElementById('info_imagem');
        const nome_info = document.getElementById('info_nome')
        const desc_info = document.getElementById('info_desc')
        const tipo_info = document.getElementById('info_tipo')
        const raca_info = document.getElementById('info_raca')
        const raridade_info = document.getElementById('info_raridade')
        const conj_info = document.getElementById('info_conj')

        const imgSelecionada = document.createElement('img');
        const nomeSelecionado = document.createElement('h1')
        const descSelecionado = document.createElement('p')
        const tipoSelecionado = document.createElement('p')
        const racaSelecionado = document.createElement('p')
        const raridadeSelecionado = document.createElement('p')
        const conjSelecionado = document.createElement('p')
        
        nomeSelecionado.textContent = imagem.name
        imgSelecionada.src = imagem.card_images[0].image_url_cropped;
        descSelecionado.textContent = imagem.desc
        tipoSelecionado.textContent = imagem.type
        racaSelecionado.textContent = imagem.race
        raridadeSelecionado.textContent = imagem.card_sets[0].set_rarity
        conjSelecionado.textContent = imagem.card_sets[0].set_name

        nome_info.innerHTML = '';
        galeria_info.innerHTML = ''; // Limpa o conteúdo anterior
        desc_info.innerHTML = ''
        tipo_info.innerHTML = ''
        raca_info.innerHTML = ''
        raridade_info.innerHTML = ''
        conj_info.innerHTML = ''

        nome_info.appendChild(nomeSelecionado)
        galeria_info.appendChild(imgSelecionada);
        desc_info.appendChild(descSelecionado)
        tipo_info.appendChild(tipoSelecionado)
        raca_info.appendChild(racaSelecionado)
        raridade_info.appendChild(raridadeSelecionado)
        conj_info.appendChild(conjSelecionado)
        // Você pode adicionar mais ações aqui para selecionar a imagem
    });
    galeria.appendChild(tagImg);
}

async function carregarFotos() {
    const imagens = await pegarImagens();
    if (imagens !== undefined) {
        imagens.forEach(criarTagImg);
    } else {
        console.log('ERRRRROOOOO');
    }
}

carregarFotos();
