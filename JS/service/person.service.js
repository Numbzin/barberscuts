import { addPerson } from "./../infra/person.repository.js";

export const personService = {
  add,
};

function add(person) {
  addPerson(person)
    .then((res) => {
      console.log("salvo: ", res);
      alert("Adicionado com sucesso");
    })
    .catch((error) => {
      console.error("Error: ", error);
      alert("Erro ao adicionar o usuário.");
    });
}
