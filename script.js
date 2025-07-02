class CaixaDedados {
    constructor(nome, idade, email,cargo,salario,data,experiencia) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
      this.cargo = cargo;
      this.salario = salario;
      this.data = data;
      this.experiencia = experiencia;
    }
    resumo() {
      console.log(
        ' Nome:' +
          this.nome  +
          ' Idade: ' +
          this.idade +
          ' Email: ' +
          this.email +
          'Cargo que desejado:'+
          this.cargo+
          'Salário que Desejado:'+
          this.salario +
          'Data de adimissão:'+
          this.data +
          'Experiencia:'+
          this.experiencia
      );
    }
  }
  
  
  const nomeInput = document.querySelector('.nome');
  const idadeInput = document.querySelector('.idade');
  const emailInput = document.querySelector('.email');
  const cargoInput = document.querySelector('.cargo');
  const salarioInput = document.querySelector('.salario');
  const dataInput = document.querySelector('.data');
  const experienciaInput = document.querySelector('.experiencia');


  botao.addEventListener('click', cliqueNoBotao);