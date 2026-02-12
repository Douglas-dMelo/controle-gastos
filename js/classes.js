export class ControleGastos {

constructor(categorias){
this.gastos = categorias.map(c => ({
nome:c,
valor:0
}));
}

adicionar(nome, valor){
const categoria = this.gastos.find(c=>c.nome===nome);
categoria.valor += valor;
}

listar(){
return this.gastos;
}

total(){
return this.gastos
.reduce((s,c)=> s + c.valor ,0);
}
}
