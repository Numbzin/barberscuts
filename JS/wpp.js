document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formAgendamento")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value;
      const telefone = document.getElementById("telefone").value;
      const data = document.getElementById("data").value;
      const hora = document.getElementById("hora").value;

      // Número do WhatsApp para o qual vai ser enviado o agendamento (com DDI e DDD)
      const numeroWhatsApp = "55SEUNUMERO"; // Substitua pelo número correto

      // Mensagem formatada
      const mensagem = `Olá, meu nome é ${nome}. Gostaria de agendar um corte para o dia ${data} às ${hora}. Meu telefone é ${telefone}.`;

      // Codificar a mensagem para ser usada na URL
      const mensagemCodificada = encodeURIComponent(mensagem);

      // URL do WhatsApp
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

      // Redirecionar para o WhatsApp
      window.location.href = urlWhatsApp;
    });
});
