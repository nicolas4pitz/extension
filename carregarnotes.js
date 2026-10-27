





async function carregarNotas() {
  const res = await chrome.storage.local.get("quidnotes");
  const mystorage = res.quidnotes || [];

  const container = document.createElement("div")
  document.body.appendChild(container)
  container.innerHTML = ''
  
  mystorage.forEach(nota => {
    const elementoDiv = document.createElement("div")
    elementoDiv.innerHTML = `<h3>${nota.title}</h3><p>${nota.description}</p>`
    container.appendChild(elementoDiv)
  });
}

carregarNotas();