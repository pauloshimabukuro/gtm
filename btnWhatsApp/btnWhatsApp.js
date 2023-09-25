{
  /* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"> */
}

// Cria um link (elemento "a")
var link = document.createElement("a");
link.href = "https://wa.me/5511950514075"; // Usa o número fornecido de WhatsApp
link.target = "_blank"; // Abre o link em uma nova janela/aba
link.id = "btn-flutuante-whatsapp";

// Cria um botão e adiciona ao link
var btn = document.createElement("button");
btn.style.position = "fixed"; // Fixa a posição do botão
btn.style.bottom = "20px"; // Define a distância do botão ao fundo da página
btn.style.right = "20px"; // Define a distância do botão à direita da página
btn.style.zIndex = "1000"; // Garante que o botão esteja acima de outros elementos
btn.style.padding = "10px"; // Adiciona padding ao botão
btn.style.backgroundColor = "#25D366"; // Adiciona a cor de fundo do WhatsApp ao botão
btn.style.border = "none"; // Remove a borda do botão
btn.style.borderRadius = "50%"; // Adiciona bordas arredondadas ao botão para torná-lo circular
btn.style.cursor = "pointer"; // Muda o cursor ao passar o mouse sobre o botão

// Cria um ícone (elemento "i") e adiciona ao botão
var icon = document.createElement("i");
icon.className = "fab fa-whatsapp"; // Adiciona a classe FontAwesome para o ícone do WhatsApp
icon.style.fontSize = "32px"; // Define o tamanho do ícone
icon.style.color = "#ffffff"; // Define a cor do ícone

// Adiciona o ícone ao botão
btn.appendChild(icon);

// Adiciona o botão ao link
link.appendChild(btn);

// Adiciona o link ao corpo do documento
document.body.appendChild(link);
