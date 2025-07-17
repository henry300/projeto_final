document.getElementById("contatoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const nascimento = document.getElementById("nascimento").value;
  const genero = document.getElementById("genero").value;
  const leu = document.querySelector("input[name='leu']:checked")?.value || "Não informado";
  const mensagem = document.getElementById("mensagem").value;

  const resposta = `
    <h2>Dados enviados:</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Data de nascimento:</strong> ${nascimento}</p>
    <p><strong>Gênero favorito:</strong> ${genero}</p>
    <p><strong>Já leu DarkSide:</strong> ${leu}</p>
    <p><strong>Mensagem:</strong> ${mensagem}</p>
  `;

  document.getElementById("resposta").innerHTML = resposta;
});
