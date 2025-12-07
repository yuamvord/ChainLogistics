document.getElementById("sendBtn").addEventListener("click", function (e) {
  e.preventDefault(); // evita recargar la página

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("mensaje").value;

  const phone = "50255705760"; // <-- tu número con código país sin + ni espacios
  const text = `Hola, mi nombre es ${name}.
Mi correo es: ${email}.
Mensaje: ${message}`;

  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    text
  )}`;

  window.open(url, "_blank");
});
