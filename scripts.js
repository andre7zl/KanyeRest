const URL = 'https://api.kanye.rest';

async function chamarapi() {
    const resposta = await fetch(URL);
    if (resposta.status === 200) {
        const dados = await resposta.json();
        console.log(dados.quote);
    } 
}

chamarapi();