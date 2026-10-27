const formulario = document.getElementById("formulario")
    
formulario.addEventListener("submit", async (event) => {
  event.preventDefault()

  const formsData = new FormData(formulario)
  const title = formsData.get("title")
  const description = formsData.get("description")

  const noteObj = {
    title: title,
    description: description,
    id: Date.now()
  }

  const res = await chrome.storage.local.get("quidnotes");
  const mystorage = res.quidnotes || [];

  mystorage.push(noteObj)

  await chrome.storage.local.set({ "quidnotes": mystorage });
  
  alert("Dados salvos");
  formulario.reset();
})