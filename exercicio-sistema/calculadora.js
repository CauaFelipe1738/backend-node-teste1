//process.argv é um vetor onde
// [0]=caminho do node
// [1]=caminho do script
// [2]=outros argumentos
//slice corta os dois primeiros para deixar apenas os digitados
const args = process.argv.slice(2);

const num1 = parseFloat(args[0]);
const operacao = args[1];
const num2 = parseFloat(args[2]);

//Verifica se os dois numeros são Validos
console.log(`Cálculo: ${num1} ${operacao} ${num2}`);

//calculo
let res;

switch(operacao){
    case '+':
        res = num1 + num2;
        console.log(`${num1} ${operacao} ${num2} = ${res}`);
        break;
    case '-':
        res = num1 - num2;
        console.log(`${num1} ${operacao} ${num2} = ${res}`);
        break;
    case '*':
        res = num1 * num2;
        console.log(`${num1} ${operacao} ${num2} = ${res}`);
        break;
    case '/':
        if(num2 == 0){
            console.log('Erro: divisão por zero é indefinido');
            process.exit(1);
        }
        res = num1 / num2;
        console.log(`${num1} ${operacao} ${num2} = ${res}`);
        break;
    default: console.log('Função inválida'); process.exit(1);
}
