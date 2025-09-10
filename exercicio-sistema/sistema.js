const os = require('os');
const process = require('process');

//Descobre o sistema e converte o nome para conteudo user-friendly
const sistemaOperacional = os.platform();
let nomeSistema;

switch(sistemaOperacional){
    case 'win32': nomeSistema = 'Windows'; break;
    case 'darwin': nomeSistema = 'MacOS'; break;
    case 'linux': nomeSistema = 'Linux'; break;
    default: nomeSistema = 'Sistema Desconhecido'; break;
}

//Pega a memória e converte para GB
const memoriaBytes = os.totalmem();
const memoriaGB = (memoriaBytes / Math.pow(1024, 3)).toFixed(2);

//numero de cpu
const numeroCPUs = os.cpus().length;

//Calcula o tempo ligado do PC
const tempoLigadoSeg = os.uptime();
const horas = Math.floor(tempoLigadoSeg/3600);
const minutos = Math.floor((tempoLigadoSeg % 3600) / 60);

//Descobre o nome do usuário
const nomeUsuario = os.userInfo().username;

//Mostra o cabeçalho
console.log('===INFORMAÇÕES DO SISTEMA===\n');
console.log('Sistema operacional: ', nomeSistema);
console.log('Memória RAM total: ', memoriaGB);
console.log('Processadores: ', numeroCPUs);
console.log('Tempo ligado: ', horas, ' horas e ', minutos, ' minutos');
console.log('Usuário: ', nomeUsuario);
