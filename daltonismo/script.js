function ativarTema(tema) {
    const body = document.body;
    const container = document.querySelector('.container');
    const botaoVoltar = document.querySelector('.botao-voltar');

    switch (tema) {
        case 'normal':
            body.style.backgroundColor = '#1b347b';
            body.style.color = 'white';
            container.style.backgroundColor = '#0a2463';
            container.style.color = 'white';
            botaoVoltar.style.backgroundColor = '#ffb703';
            botaoVoltar.style.color = '#0a2463';
            break;

        case 'pretoBranco':
            body.style.backgroundColor = '#ffffff';
            body.style.color = '#000000';
            container.style.backgroundColor = '#d3d3d3';
            container.style.color = '#000000';
            botaoVoltar.style.backgroundColor = '#333333';
            botaoVoltar.style.color = '#ffffff';
            break;

        case 'protanopia':
            body.style.backgroundColor = '#2a2a7d';
            body.style.color = 'white';
            container.style.backgroundColor = '#1a1a5d';
            container.style.color = 'white';
            botaoVoltar.style.backgroundColor = '#ff9f00';
            botaoVoltar.style.color = '#1a1a5d';
            break;

        case 'deuteranopia':
            body.style.backgroundColor = '#3b7b7d';
            body.style.color = 'white';
            container.style.backgroundColor = '#2b5d5e';
            container.style.color = 'white';
            botaoVoltar.style.backgroundColor = '#ffc703';
            botaoVoltar.style.color = '#2b5d5e';
            break;

        case 'tritanopia':
            body.style.backgroundColor = '#7d3b7d';
            body.style.color = 'white';
            container.style.backgroundColor = '#5e2b5e';
            container.style.color = 'white';
            botaoVoltar.style.backgroundColor = '#ff8f00';
            botaoVoltar.style.color = '#5e2b5e';
            break;

        case 'monocromatico':
            body.style.backgroundColor = '#2d2d2d';
            body.style.color = '#dcdcdc';
            container.style.backgroundColor = '#444444';
            container.style.color = '#dcdcdc';
            botaoVoltar.style.backgroundColor = '#999999';
            botaoVoltar.style.color = '#333333';
            break;

        default:
            break;
    }
}
