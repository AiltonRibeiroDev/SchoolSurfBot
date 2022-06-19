let planoInfantil = document.getElementById("infantil");
let planoAdult = document.getElementById("adulto");
let planoProf = document.getElementById("profissinal");

let namep = document.getElementById("name-plano");
let idades = document.getElementById("idadePS");
let equipamentos = document.getElementById("ep");
let hr = document.getElementById("hora");
let durcaoH = document.getElementById("qHoras");

let btn = document.getElementsByClassName(".buttonBox");

const planoAdulto = {
  nome: "Adulto",
  idadeExp: "Público entre 16 e 80 anos",
  horas: "3 horas seguidas de aula",
};

const planoP = {
  nome: "PROFISSIONAL",
  eqp: "Você deve trazer o equipamento",
  idadeExp: "Experiência de 3 anos no surf",
  horas: "4 horas seguidas de aula",
};

const planoInFF = {
  nome: "INFANTIL",
  eqp: "Equipamentos fornecidos",
  idadeExp: "Público entre 5 e 15 anos",
  horas: "2 horas seguidas de aula",
};

function pAdult() {
  namep.innerHTML = planoAdulto.nome;
  idades.innerHTML = planoAdulto.idadeExp;
  durcaoH.innerHTML = planoAdulto.horas;
}

function pProfissional() {
  namep.innerHTML = planoP.nome;
  idades.innerHTML = planoP.idadeExp;
  equipamentos.innerHTML = planoP.eqp;
  durcaoH.innerHTML = planoP.horas;
}

function planoInf() {
  idades.innerHTML = planoInFF.idadeExp;
  namep.innerHTML = planoInFF.nome;
  equipamentos.innerHTML = planoInFF.eqp;
  durcaoH.innerHTML = planoInFF.horas;
}
