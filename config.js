/* =========================================================================================
   ✦ GUSTAVO MARTINS TATTOO — CONFIGURAÇÕES DE DADOS E IMAGENS ✦
   =========================================================================================
   
   COMO ALTERAR:
   - Para trocar uma foto: altere o caminho dentro de "imagem"
   - Para alterar o WhatsApp ou Instagram: altere o bloco ESTUDIO_CONFIG abaixo
   - Para adicionar mais artes ao catálogo: adicione um item à lista CATALOGO_FLASH
   ========================================================================================= */

const ESTUDIO_CONFIG = {
    nome: "GUSTAVO MARTINS",
    subtitulo: "TATTOO",
    slogan: "ARTE QUE MARCA. ESTILO QUE PERMANECE.",
    telefoneWhatsapp: "5551989487632",
    instagramUser: "@martinsgustj2",
    instagramLink: "https://www.instagram.com/martinsgustj2/",
    enderecoResumido: "Viamão - RS | Estúdio Privado com Hora Marcada"
};

// 1. CATÁLOGO DE ARTES DISPONÍVEIS (FLASH)
const CATALOGO_FLASH = [
    {
        id: 1,
        tag: "#01",
        titulo: "Fine Line Mão",
        imagem: "images/Flash/WhatsApp Image 2026-09-02 at 23.42.57.jpeg",
        descricao: "Arte autoral exclusiva pronta para tatuar na mão, pulso ou pescoço."
    },
    {
        id: 2,
        tag: "#02",
        titulo: "Flash Exotérica",
        imagem: "images/Flash/WhatsApp Image 2026-09-02 at 23.42.56 (1).jpeg",
        descricao: "Composição ornamental detalhada em preto puro."
    },
    {
        id: 3,
        tag: "#03",
        titulo: "Flash com Free Hand",
        imagem: "images/Flash/WhatsApp Image 2026-09-02 at 23.49.35.jpeg",
        descricao: "Botânica sombria com geometria fina e detalhes pontilhados."
    },
    {
        id: 4,
        tag: "#04",
        titulo: "Arcano Baphomet Dark",
        imagem: "images/Flash/WhatsApp Image 2026-09-02 at 23.49.37.jpeg",
        descricao: "Arte mística com forte presença, contraste e sombreamento denso."
    },
    {
        id: 5,
        tag: "#05",
        titulo: "Blackwork Adaga",
        imagem: "images/Flash/WhatsApp Image 2026-09-02 at 23.49.37 (5).jpeg",
        descricao: "Adaga clássica com sombras sólidas e alto contraste."
    }
];

// 2. CATEGORIAS DE ESTILOS PRINCIPAIS
const CATEGORIAS_SITE = [
    {
        id: "blackwork",
        nome: "BLACKWORK",
        descricao: "Contraste marcante, sombras densas e presença imponente na pele.",
        imagem: "images/Fechamentos/WhatsApp Image 2026-09-02 at 23.49.36 (2).jpeg",
        icone: "fa-solid fa-gem"
    },
    {
        id: "pescoco",
        nome: "PESCOÇO",
        descricao: "Linhas anatômicas, arte expressiva e impacto visual único.",
        imagem: "images/pescoco/pescoco-1.jpeg",
        icone: "fa-solid fa-bolt"
    },
    {
        id: "exoterica",
        nome: "EXOTÉRICA",
        descricao: "Símbolos arcanos, estética mística medieval e composições sombrias.",
        imagem: "images/WhatsApp Image 2026-09-02 at 23.42.56.jpeg",
        icone: "fa-solid fa-skull"
    },
    {
        id: "fineline",
        nome: "FINE LINE",
        descricao: "Traços delicados, elegância minimalista e precisão milimétrica.",
        imagem: "images/Flash/WhatsApp Image 2026-09-02 at 23.42.57.jpeg",
        icone: "fa-solid fa-feather-pointed"
    },
    {
        id: "fechamento",
        nome: "FECHAMENTOS",
        descricao: "Projetos de grande escala pensados exclusivamente para a anatomia do corpo.",
        imagem: "images/Fechamentos/WhatsApp Image 2026-09-02 at 23.42.57 (4).jpeg",
        icone: "fa-solid fa-shield-halved"
    }
];

// 3. PORTFÓLIO / TRABALHOS REALIZADOS
const PORTFOLIO_TRABALHOS = [
    {
        titulo: "Adaga & Fechamento Blackwork",
        categoria: "blackwork",
        categoriaLabel: "BLACKWORK",
        imagem: "images/Fechamentos/WhatsApp Image 2026-09-02 at 23.49.36 (2).jpeg"
    },
    {
        titulo: "Pescoço Free Hand Sombreado",
        categoria: "pescoco",
        categoriaLabel: "PESCOÇO / FREE HAND",
        imagem: "images/pescoco/pescoco-1.jpeg"
    },
    {
        titulo: "Figura Mística & Halos Arcanos",
        categoria: "exoterica",
        categoriaLabel: "EXOTÉRICA",
        imagem: "images/WhatsApp Image 2026-09-02 at 23.42.56.jpeg"
    },
    {
        titulo: "Lettering & Arte na Mão",
        categoria: "lettering",
        categoriaLabel: "LETTERING / MÃO",
        imagem: "images/Free Hand/WhatsApp Image 2026-09-02 at 23.42.57 (1).jpeg"
    },
    {
        titulo: "Lettering Vintage Perna",
        categoria: "lettering",
        categoriaLabel: "LETTERING",
        imagem: "images/Lettering/WhatsApp Image 2026-09-02 at 23.49.37 (6).jpeg"
    },
    {
        titulo: "Skate Dark & Arte Ornamental",
        categoria: "exoterica",
        categoriaLabel: "EXOTÉRICA / DARK",
        imagem: "images/WhatsApp Image 2026-09-02 at 23.49.37 (2).jpeg"
    },
    {
        titulo: "Fechamento de Braço Completo",
        categoria: "fechamento",
        categoriaLabel: "FECHAMENTO",
        imagem: "images/Fechamentos/WhatsApp Image 2026-09-02 at 23.49.36 (3).jpeg"
    },
    {
        titulo: "Pescoço Ornamental Floral",
        categoria: "pescoco",
        categoriaLabel: "PESCOÇO",
        imagem: "images/pescoco/pescoco-2.jpeg"
    },
    {
        titulo: "Lettering Chicano Exclusivo",
        categoria: "lettering",
        categoriaLabel: "LETTERING",
        imagem: "images/Lettering/WhatsApp Image 2026-09-02 at 23.49.37 (7).jpeg"
    }
];

// 4. FEED DO INSTAGRAM
const INSTAGRAM_POSTS = [
    {
        titulo: "Post Instagram: Pescoço Free Hand",
        imagem: "images/pescoco/pescoco-1.jpeg"
    },
    {
        titulo: "Post Instagram: Lettering Vintage",
        imagem: "images/Lettering/WhatsApp Image 2026-09-02 at 23.49.37 (6).jpeg"
    },
    {
        titulo: "Post Instagram: Arte na Mão",
        imagem: "images/Free Hand/WhatsApp Image 2026-09-02 at 23.42.57 (1).jpeg"
    },
    {
        titulo: "Post Instagram: Fechamento Blackwork",
        imagem: "images/Fechamentos/WhatsApp Image 2026-09-02 at 23.49.36 (2).jpeg"
    },
    {
        titulo: "Post Instagram: Figura Mística",
        imagem: "images/WhatsApp Image 2026-09-02 at 23.42.56.jpeg"
    },
    {
        titulo: "Post Instagram: Skate Dark Ornamental",
        imagem: "images/WhatsApp Image 2026-09-02 at 23.49.37 (2).jpeg"
    }
];
