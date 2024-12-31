const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#Nombre");

  console.log(Nombre.value.length);

  if (Nombre.value.length < 4) {
    Nombre.style.border = "1px solid red";
    const errorNombre = document.querySelector("#error-Nombre");
    errorNombre.textContent = "El nombre tiene que tener 3 caracteres o mas";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Mail = document.querySelector("#Mail");

  console.log(Mail.value.includes);

  if (!Mail.value.includes('@')) {  
    Mail.style.border = "1px solid red";
    const errorMail = document.querySelector("#error-Mail");
    errorMail.textContent = "Su dirección de correo debe contener un '@'.";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Comentario = document.querySelector("#Comentario");

  console.log(Comentario.value.trim);

  if (Comentario.value.trim() === "") {
    Comentario.style.border = "1px solid red";
    const errorComentario = document.querySelector("#error-Comentario");
    errorComentario.textContent = "Su formulario de contacto debe tener un comentario y/o consulta";
  }
});