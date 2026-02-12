export function formatarMoeda(valor){
return `R$ ${valor.toFixed(2)}`;
}

export function validarNumero(valor){
return !isNaN(valor) && valor > 0;
}

export function criarElemento(tag,texto){
const el = document.createElement(tag);
el.textContent = texto;
return el;
}
