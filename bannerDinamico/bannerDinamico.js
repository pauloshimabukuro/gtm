// URL da imagem que você deseja adicionar
var imageUrl =
  "https://360digital-cdn.s3.us-west-2.amazonaws.com/banners-dinamicos/520x130.jpg";
var imageUrl2 =
  "https://360digital-cdn.s3.us-west-2.amazonaws.com/banners-dinamicos/1200x160.jpg";

// Verificar se é dispositivo móvel ou desktop
var isMobile = window.innerWidth <= 768;

// Selecionar o elemento após o qual a imagem será inserida
var targetElement;
if (isMobile) {
  // Se é móvel, selecionar o elemento de breadcrumbs
  targetElement = document.getElementById("fbits-breadcrumb");

  // Criar elemento de imagem
  var img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "Compre YMF ou YMI e Ganhe Olho Mágico"; // Adicione uma descrição apropriada para a imagem
  img.setAttribute("style", "width: 100%; padding: 10px 0px");
} else {
  // Se é móvel, selecionar o elemento de breadcrumbs
  targetElement = document.getElementById("fbits-breadcrumb");

  // Criar elemento de imagem
  var img = document.createElement("img");
  img.src = imageUrl2;
  img.alt = "Compre YMF ou YMI e Ganhe Olho Mágico"; // Adicione uma descrição apropriada para a imagem
  img.setAttribute("style", "width: 100%; padding: 10px 0px");
}

// Inserir a imagem após o elemento selecionado
if (targetElement) {
  targetElement.parentNode.insertBefore(img, targetElement.nextSibling);
} else {
  console.error("Elemento alvo não encontrado");
}
