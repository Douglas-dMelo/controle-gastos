import {ControleGastos} from "./classes.js";
import {formatarMoeda, validarNumero, criarElemento} from "./utils.js";

const categorias = [
"Alimentação",
"Transporte",
"Lazer",
"Outros"
];

const controle = new ControleGastos(categorias);

// elementos
const form = document.getElementById("form");
const select = document.getElementById("categoria");
const lista = document.getElementById("lista");
const totalEl = document.getElementById("total");
const input = document.getElementById("valor");

// criar opções
categorias.map(cat=>{
const opt=document.createElement("option");
opt.textContent=cat;
select.appendChild(opt);
});

// render lista
function render(){
lista.innerHTML="";

controle.listar()
.map(item=>{
lista.appendChild(
criarElemento("p",
`${item.nome}: ${formatarMoeda(item.valor)}`)
);
});

totalEl.textContent =
`Total: ${formatarMoeda(controle.total())}`;
}

// evento submit
form.addEventListener("submit", e=>{
e.preventDefault();

const valor = Number(input.value);
const categoria = select.value;

if(!validarNumero(valor)){
alert("Digite valor válido");
return;
}

controle.adicionar(categoria, valor);

render();

input.value="";
input.focus();
});

// render inicial
render();
