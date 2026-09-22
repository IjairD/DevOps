const {
    nomePortfolio,
    tituloPortfolio,
    tecnologias,
    anoAtual,
    quantidadeTecnologias
} = require("./script");

test("deve retornar o nome correto do portfólio", () => {
    expect(nomePortfolio()).toBe("Ijair Delani");
});

test("deve retornar o título correto da página", () => {
    expect(tituloPortfolio()).toBe("Ijair Delani - Portfólio");
});

test("deve conter Java na lista de tecnologias", () => {
    expect(tecnologias()).toContain("Java");
});

test("deve conter JavaScript na lista de tecnologias", () => {
    expect(tecnologias()).toContain("JavaScript");
});

// Testes unitários do projeto DevOps

test("deve possuir quatro tecnologias cadastradas", () => {
    expect(quantidadeTecnologias()).toBe(4);
});
