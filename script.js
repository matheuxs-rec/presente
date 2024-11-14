const memorias = [
    { data: "26/04/2024", texto: "Nos conhecemos!", imagem: "img1.jpg.png" },
    { data: "15/10/2024", texto: "Começamos a namorar de vrdd em", imagem: "zapzap.jpeg" },
    // Adicione mais momentos aqui
];

const container = document.getElementById("memorias");

memorias.forEach(memoria => {
    const memoriaDiv = document.createElement("div");
    memoriaDiv.classList.add("memoria");

    memoriaDiv.innerHTML = `
        <h3>${memoria.data}</h3>
        <p>${memoria.texto}</p>
        <img src="${memoria.imagem}" alt="${memoria.texto}" style="width: 100%;">
    `;

    container.appendChild(memoriaDiv);
});
