
class CaixaDedados {
    constructor(nome, idade, email, cargos,salario,data,experiencia) {
      this.nome = nome;
      this.idade = idade;
      this.turma = email;
      this.cargos = cargos;
      this.salario =salario;
      this.data = data;
      this.experiencia = experiencia;
    }
    resumo() {
      console.log(
        'Nome:' +
          this.nome +
          'Idade:' +
          this.idade +
          'Email' +
          this.email +
          'Cargo Escolhido:'+
          this.cargos +
          'Pretensão Salarial: ' +
          this.salario +
          'Data de Adimissão: ' +
          this.data +
          'Experiência ' +
          this.experiencia
      );
    }
}
  
//   const Dados = new candidato ('nome,idade,email,cargos,salario,data,experiencia');
// console.log(Dados);
// Dados.resumo();

const botao = document.querySelector('.botao');

const nome = document.querySelector('.nome');
const displayNome = document.querySelector('.displayNome');

const idade = document.querySelector('.idade')
const displayIdade = document.querySelector('.displayIdade')

const email =document.querySelector('.email'); 
const displayemail =document.querySelector('.displayEmail'); 

const cargos =document.querySelector('.cargos'); 
const displaycargos =document.querySelector('.displayCargos'); 

const salario =document.querySelector('.salario'); 
const displaysalario =document.querySelector('.displaysalario'); 

const data =document.querySelector('.data'); 
const displayData =document.querySelector('.displayData'); 

const experiencia =document.querySelector('.experiencia'); 
const displayExperiencia =document.querySelector('.displayEperiencia'); 
function cliqueNoBotao() {

    displayNome.textContent = nome.value;

    displayIdade.textContent = idade.value

}

botao.addEventListener('click', cliqueNoBotao);
