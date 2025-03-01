const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, bem-vindo à minha API!');
});

app.get('/receitas', (req, res) => {
    res.json([
        {
            "id": 1,
            "titulo": "Bolo de Chocolate",
            "descricao": "Um bolo simples e delicioso, perfeitos para qualquer ocasião."
        },
        {
            "id": 2,
            "titulo": "Feijoada",
            "descricao": "Um prato tradicional brasileiro feito com feijão preto e várias carnes."
        },
        {
            "id": 3,
            "titulo": "Lasanha",
            "descricao": "Um prato italiano clássico feito com camadas de massa, molho de tomate, queijo e carne ou legumes."
        },
        {
            "id": 4,
            "titulo": "Cuscuz com Ovo",
            "descricao": "Um prato simples e saboroso feito com cuscuz de milho cozido no vapor, acompanhado de ovos cozidos ou fritos."
        },
        {
            "id": 5,
            "titulo": "Brigadeiro",
            "descricao": "Um doce brasileiro tradicional feito com leite condensado, chocolate em pó e manteiga, enrolado em granulado."
        }
    ])
});

app.get('/musicas', (req, res) => {
    res.json([
        {
            "id": 1,
            "titulo": "Abracadabra",
            "artista": "Lady Gaga",
            "descricao": "Uma música pop eletrizante que combina batidas dançantes e vocais poderosos de Lady Gaga."
        },
        {
            "id": 2,
            "titulo": "Take Me Away",
            "artista": "The Driver Era",
            "descricao": "Uma música indie-pop com uma vibe relaxante e melodia cativante, típica do estilo do The Driver Era."
        },
        {
            "id": 3,
            "titulo": "I'm Not in Love",
            "artista": "10cc",
            "descricao": "Um clássico dos anos 70 com harmonias vocais únicas e uma produção inovadora para a época."
        },
        {
            "id": 4,
            "titulo": "Strategy (feat. Megan Thee Stallion)",
            "artista": "TWICE",
            "descricao": "Uma colaboração energética entre o grupo de K-pop TWICE e a rapper Megan Thee Stallion, com um ritmo contagiante."
        },
        {
            "id": 5,
            "titulo": "I Miss You",
            "artista": "Björk",
            "descricao": "Uma música experimental e emocional que combina elementos eletrônicos e vocais expressivos de Björk."
        }
    ])
});

app.listen(3000, () => {
    console.log('Servidor rodando na URL http://localhost:3000');
});