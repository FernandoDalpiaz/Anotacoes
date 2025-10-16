// _____JavaScript (iniciante e intermediário)_____

// COMANDOS BÁSICOS

    alert("Mensagem"); // Exibir pop up.
    alert(`Mensagem ${variável}`) // Permite a inserção da variável no meio da string.

    prompt("Mensagem"); // Exibir pop up, com input de texto para o usuário.

    console.log("Mensagem"); // Exibe mensagem no console.

    var variavelTeste = "Valor"; // Cria uma variável.

    typeof("Mensagem"); // Exibe tipo do dado.

// ___________________________________________________________________________________________________________________


// STRINGS

    arr.lenght(); // Obtém a quantidade de caracteres.

    arr.slice(começo,fim); // Obtém uma fatia de uma string. Obs: o fim não faz parte da fatia.

    arr.toUpperCase(); // Transforma o caracter em upppercase.

    arr.toLowerCase(); // Transforma o caracter em lowercase.

    arr.tofixed(número_de_casas); // 

// ___________________________________________________________________________________________________________________

// NÚMEROS
    
    x%y; // Módulo (Resto da divisão de x por y).

    x++; // x=x+1 (Válidos: ++ --).

    x+=2; // x=x+2 (Válidos: += -= *= /=).

// ___________________________________________________________________________________________________________________

// FUNÇÕES

    // Function hoisting: A função é sempre colocada no topo do código, então é possível chamar a função antes dela mesma no código.

    // Função básica

        function nomeFuncao() {Instruções}

    //Atribui uma variável

        function nomeFuncao(variável) {Instruções} 

    // Retorna um valor no final

        funcion nomeFuncao(variável){ Instruções return}

    // Function Expression

        const souUmDado = function() {console.log("Sou um dado.")};     // Cria a função souUmDado() como se fosse um dado.

        function executaFuncao(funcao) {    // Essa função receberá uma função como parâmetro e irá executá-la.
            funcao();
        }

        executaFuncao(souUmDado);   // Como a função souUmDado foi criada como um dado, ela pode ser utilizada como parâmetro.

        // Output: "Sou um dado."

    // Arrow Function

        const funcaoArrow = () => { console.log("Sou uma Arrow Function.")};

    // Função dentro de um Objeto

        const objeto = {
            falar: function() { console.log("Estou falando.") }     // Forma antiga
        }

        const objeto = {
            falar() { console.log("Estou falando.") }       // Forma mais atual.
        }
        
// ___________________________________________________________________________________________________________________

// FUNÇÕES MATH

    Math.floor(); // Arredonda para baixo.

    Math.round(); // Arredonda o número.

    Math.pow(base, expoente); //Eleva à enésima potência.

    Math.random(); // Gera um número aleatório entre 0 e 0.9999999999999999 (16 casas decimais).

// ___________________________________________________________________________________________________________________

// CONDICIONAIS

    // Comparativos: === !== > >= < <= == !=

    (Condição 1 && Condição 2); // Condição 1 e Condição 2.

    (Condição 1)||(Condição 2); // Condição 1 ou Condição 2.

    if (condição) {Instruções 1} // Se a condição for verdadeira realiza as "Instruções 1", caso contrário realiza as "Instruções 2".
    else {Instruções 2}

    if (condição) {Instruções 1}
    else if (condição) {Instruções 2}
    else {Instruções 3}

// ___________________________________________________________________________________________________________________

// ARRAYS

    var x = []; // Cria uma lista.

    x.length; // Exibe quantos itens a lista contém.

    x[posição]; // Exibe o item contido na posição mencionada da lista.

    x.includes(item); //Verifica se o item mencionado está contido na lista (resultado booleano).

    x.push(item); // Adiciona um item no fim da lista.

    x.pop(); // Remove e exibe o último item da lista.

// ___________________________________________________________________________________________________________________

// FILTER EM ARRAYS (filter não altera o array original nem o output)

    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

    // Filtrar números maiores que 10 (FORMA LONGA)

        callbackFilter(valor, indice, array) {          // Como índice e array não são utilizados, podem ser omitidos.
            if(valor>10){
                return true;
            } else{
                return false;
             }
        }

        const numerosFiltrados = numeros.filter(callbackFilter);

    // Filtrar números maiores que 10 (FORMA REDUZIDA)

        const numerosFiltrados = numeros.filter((valor)=> valor > 10);

    // Filtrar Array com objetos

        const pessoas = [
            {nome: 'Luiz', idade: 62},
            {nome: 'Fernando', idade: 26}
        ]

        // Filtrando pessoas com mais de 50 anos

        const pessoasFiltradas = pessoas.filter(objeto => objeto.idade > 50)

// ___________________________________________________________________________________________________________________

// MAP EM ARRAYS (não altera a array original, mas altera o output)

    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

    // Dobrar os valores com o map

        const numerosDobrados = numeros.map(valor => valor * 2)

    // Map Array com objetos. Adicionando o atributo "id".

        const pessoas = [
            {nome: 'Luiz', idade: 62},
            {nome: 'Fernando', idade: 26}
        ]

        const comId = pessoas.map(function (obj, indice) {
            const newObj = {...obj};
            newObj.id = indice + 1;
            return newObj;
        });

// ___________________________________________________________________________________________________________________

// REDUCE EM ARRAYS (reduzir o array em um único elemento)

    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

    // Soma dos elementos

        const total = numeros.reduce(function(acumulador, valor, índice, array) {   // O Reduce tem o "acumulador"
            acumulador += valor;
            return acumulador;
        }, 0)   // 0 é o valor inicial do acumulador e é opcional. Se for omitido, o primeiro valor é o do primeiro item.

    // Reduce Array em objetos. Retornar a pessoa mais velha.

        const pessoas = [
            {nome: 'Luiz', idade: 62},
            {nome: 'Fernando', idade: 26}
        ]

        const maisVelho = pessoas.reduce(function (acumulador, valor) {
            if (acumulador.idade > valor.idade) return acumulador;
            return valor;
        })

// ___________________________________________________________________________________________________________________

// COMBINANDO FILTER, MAP e REDUCE
    
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

    // Objetivo: Filtrar números pares, dobrar os valores e, por fim, somar os valores restantes.

    const resultado = numeros
        .filter((valor) => valor % 2 === 0)
        .map(valor => valor * 2)
        .reduce((acumulador, valor) => acumulador + valor, 0);
// ___________________________________________________________________________________________________________________

// FOR EACH

    const a1 = [1, 2, 3, 4, 5];

    a1.forEach((valor, indice, array) => {
        console.log(valor);
    });

// ___________________________________________________________________________________________________________________

// LOOPS

    while (condição) {instruções} // Enquanto a condição for verdadeira, as instruções serão realizadas em loop.

    for (valor inicial; condição; incremento) {instruções} // Realiza as instruções enquanto a condição for verdadeira.

// ___________________________________________________________________________________________________________________

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

    // Em arrays:

        const letras = ["a", "b", "c", "d"];

        const [indiceZero, indiceUm, ...resto] = letras         // Rest Operator (...) -> A variável receberá o restande da array "letras."

            // Dessa forma, os valores serão os seguintes:

                // indiceZero = "a"
                // indiceUm = "b"
                // resto = ["c", "d"]

            // Pular índice: 
                
                const [indiceZero, , indiceDois] = letras       // Dessa forma, indiceDois = "c"

            // Acessar índices dentro de índices:

                const letras = [ ["a", "b", "c"], ["d", "e", "f"] ];

                const letraD = letras[1][0];                    // Dessa forma, letraD = "d"

    // Em Objetos:

        const pessoa = {
            nome: "Fernando",
            sobrenome: "Dalpiaz",
            idade: 26,
            endereco: {
                rua: "Av Brasil",
                numero: 320
            }
        };

        const {nome, sobrenome, idade} = pessoa;
        console.log(nome, sobrenome, idade);            // Output: "Fernando" "Dalpiaz" "26"

        // Valor padrão

            const {nome = "Não existe"} = pessoa;       // Se não existir o atributo nome no objeto, o valor padrão é "Não existe".

        // Criar uma variável com outro nome

            const {nome: x} = pessoa;                   // A variável x = "Fernando";

        // Acessar os atibutos de um objeto dentro de outro objeto

            const {endereco} = pessoa                   // Foi criado o objeto endereco {rua: "Av Brasil", numero: 320}.

            const {endereco: {rua, numero}} = pessoa;   // Foram criadas as variáveis rua = "Av Brasil" e numero = "320".

        // Operador Rest (...)

            const {nome, ...resto} = pessoa;            // A variável resto tem tudo do objeto pessoa, menos o nome.

// ___________________________________________________________________________________________________________________

// CLASSES

    class Pessoa {
        constructor(nome,sobrenome) {                   // Função construtora
            this.nome = nome;
            this.sobrenome = sobrenome;
        }

        falar() { console.log("Estou falando")};
    }

    const p1 = new Pessoa("Fernando", "Dalpiaz");       // Criando objeto da classe pessoa.

    p1.falar();                                         // Chamando método da classe.

// ___________________________________________________________________________________________________________________

// MÉTODOS ESTÁTICOS 

    class ControleRemoto {
        constructor(tv) {
            this.tv = tv;
            this.volume = 0;
        };

        aumentarVolume() {
            this.volume += 2;
        };

        diminuirVolume() {
            this.volume -= 2;
        };

       static trocarPilha() { console.log("Pilhas trocadas.")}     // Como é estático, não referencia uma instância.
    }

    const controle1 = new ControleRemoto("LG");
    controle1.aumentarVolume();                     // Referencia a instância "controle1".

    ControleRemoto.trocarPilha();                                  // Não referencia instância alguma, mas a Classe em si.

    // Obs: O método estático não possui acesso aos dados da instância.

// ___________________________________________________________________________________________________________________

// PROMISES

    function rand (min,max) {
        return Math.floor(Math.random() * (max-min) + min);
    }

    function esperaAi(msg, tempo) {
        return new Promise((resolve, reject) => {
            if(typeof msg !== 'string') {
                reject(false);
                return;
            }

            setTimeout(() => {
            resolve(msg);
            }, tempo);
        })    
    }

    esperaAi("Buscando dados da base", rand(1,3))
        .then(resposta => { 
            console.log(resposta);
            return esperaAi("Tratando dados da base", rand(1,3));
        })
        .then(resposta => { 
            console.log(resposta);
            return esperaAi("Exibindo dados na tela", rand(1,3));
        })
        .then(resposta => {
            console.log(resposta);
        })

    // Dessa forma, cada uma das 3 chamadas da função esperaAi só ocorrerá após a anterior ser finalizada.


    // Métodos para Promises

        const promises = [
            'Primeiro Valor',
            esperaAi('Promise 1', 3000),
            esperaAi('Promise 2', 500),
            esperaAi('Promise 3', 100)
        ];

        // Promise.all: Entrega apenas quando todas as promises tiverem sido finalizadas.

            Promise.all(promises)             
                .then(valor => {
                    console.log(valor);
                })
                .catch(erro => {
                    console.log(erro);
                })

        // Promise.race: Entrega a primeira promise que for finalizada (não impede que as outras sejam finalizadas).

            Promise.race(promises)
                .then(valor => {
                    console.log(valor);
                })
                .catch(erro => {
                    console.log(erro);
                })

        // Promise.resolve:

            function baixaPagina() {
                const emCache = true;

                if(emCache) {
                    return Promise.resolve("Página em cache.");
                } else {
                    return esperaAi('Baixei a página', 3000);
                }
            }

            baixaPagina()
                .then(dadosPagina => console.log(dadosPagina))
            .catch(e => console.log('Erro: ', e))

        // Promise.reject:

            function baixaPagina() {
                const emCache = true;

                if(emCache) {
                    return Promise.reject("Página em cache.");
                } else {
                    return esperaAi('Baixei a página', 3000);
                }
            }

            baixaPagina()
                .then(dadosPagina => console.log(dadosPagina))
            .catch(e => console.log('Erro: ', e))

// ___________________________________________________________________________________________________________________

// ASYNC E AWAIT

    async function executa() {
        try {
            const fase1 = await esperaAi('Promise 1', 3000);
            console.log(fase1);
            const fase2 = await esperaAi('Promise 2', 1000);
            console.log(fase2);
            const fase3 = await esperaAi('Promise 3', 500);
            console.log(fase3);
        } catch (error) {
            console.log('Erro: ', error);
        }   
    }
    executa();

// ___________________________________________________________________________________________________________________

// FETCH API (Entrega promises)

    fetch('pagina1.html', {})
        .then(resposta => {
            if (resposta.status !== 200) throw new Error('ERRO 404');       // Direciona direto para o catch se for acionado.
            return resposta.text();
        })
        .then(html => console.log(html))
        .catch(error => console.error(error));

    // Exemplo

        async function carregaPagina(el) {
            try {
                const href = el.getAttribute('href');
                const response = await fetch(href);

                if(response.status !== 200) throw new Error('Erro 404');

                const html = await response.text();
                cerregaResultado(html);

            } catch (error) {
                console.error(error)
            }
        }

        function carregaResultado(response) {
            const resultado = document.querySelector('.resultado');
            resultado.innerHTML = response;
        }

// ___________________________________________________________________________________________________________________

// FETCH API E AXIOS

    fetch('pessoas.json')
        .then(resposta => resposta.json())
        .then(json => carregaElementosNaPagina(json))
        .catch(error => console.error(error));

    function carregaElementosNaPagina(json) {
        const table = document.createElement('table');
        for(let pessoa of json) {
            const tr = document.createElement('tr');

            let td1 = document.createElement('td');
            td1.innerHTML = pessoa.nome;
            tr.appendChild(td1);

            let td2 = document.createElement('td');
            td2.innerHTML = pessoa.idade;
            tr.appendChild(td2);

            let td3 = document.createElement('td');
            td3.innerHTML = pessoa.salario;
            tr.appendChild(td3);
        }
        table.appendChild(tr);

        const resultado = document.querySelector('.resultado');
        resultado = appendChild(table);
    }

    // Com Axios (importar pacote axios com node)

        axios('pessoas.json')
            .then(resposta => carregaElementosNaPagina(resposta.data))
            .catch(error => console.error(error));

// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________

// _____DOM (Document Object Model)_____

// TIPOS DE APLICAÇÃO DE JAVASCRIPT

    <body onload="alert('World');"> </body> //Inline Javascript.

    <script>alert('World');</script> // Internal JavaScript.

    <script src="index.js" charset="UTF-8"></script> // External JavaScript. Melhor prática.

// ___________________________________________________________________________________________________________________

// NAVEGAÇÃO COM DOM

    document.firstElementChild // Primeiro elemento.

    document.lastElementChild //Último elemento.

    document.getElementsByTagName("tag do elemento")[posição do item na array] // Exibe uma array com os elementos encontrados.

    document.getElementsByClassName("classe do elemento")[posição do item na array] // Exibe uma array com os elementos encontrados.

    document.getElementById("id do elemento")[posição do item na array] // Exibe uma array com os elementos encontrados.

    document.querySelector("elemento") //Procura pelo elemento no código.

    document.querySelectorAll("elemento") //Procura por todos os elementos que satisfazem a pesquisa no código.

    document.querySelector("elemento").getAttribute("atributo") // Procura pelo atributo do elemento.

// ___________________________________________________________________________________________________________________

// PROPRIEDADES

    https://www.w3schools.com/jsref/dom_obj_style.asp

    .innerHTML = "Novo HTML" // Altera o HTML do elemento.

    .textContext = "Novo texto" // Altera apenas o texto do elemento.

    .style.color = "red" // Altera o CSS do elemento
    
// ___________________________________________________________________________________________________________________

// MÉTODOS

    document.querySelector("input").click // O click simula um clique de mouse.

    .classList.add("nova classe") //Adiciona uma nova classe ao objeto.

    .classList.remove("nova classe") //Remove uma nova classe ao objeto.

    .classList.toggle("nova classe") //Adiciona ou remove uma nova classe ao objeto.

    .querySelector("elemento").setAttribute("atributo", "alteração")

// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________

// _____JAVASCRIPT AVANÇADO E MANIPULAÇÃO COM DOM_____

// EVENT LISTENER

.addEventListener("click", função) // Realiza a função quando receber um click.

// ___________________________________________________________________________________________________________________

//THIS

this // Retorna o elemento que acionou o evento.

// ___________________________________________________________________________________________________________________

// SET TIMEOUT

setTimeout(function(){conteúdo da função}, 3000); // Adiciona um delay de 3 segundos.

// ___________________________________________________________________________________________________________________

//SWITCH

    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }

// ___________________________________________________________________________________________________________________

// CRIANDO OBJETOS COM PROPRIEDADES

    var x = {
        propriedade1: valor1,
        propriedade2: valor2,
    }

    x.propriedade1; // Essa consulta teria como output "valor1".

// ___________________________________________________________________________________________________________________

//FUNÇÃO CONSTRUTORA: Cria os objetos, e deve ter seu nome começando com letra maiúscula.

    //Exemplo:
    function Employee (yearsOfExperience, name, cleaningRepertoire) {
        this.yearsOfExperience =  yearsOfExperience;    // Criando atributos.
        this.name =  name;
        this.cleaningRepertoire =  cleaningRepertoire;
        this.cleanHouse = function( {                   // Criando um método.
            console.log("Limpando a casa.")
        })
        }
    
    var employee1 = new Employee(5,"Roberta","Complete");

// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________

// _____JQUERY_____

//EXEMPLO: Sem JQuery vs Com JQuery

    // Sem JQuery

        for (i=0, i<document.querySelectorAll("button").length, i++) {
            document.querySelectorAll("button")[i].addEventListener("click", function(){
                document.querySelector("h1").style.color = "red";
            })
        }

    // Com JQuery

        $("button").click(function() {
            $("h1").css("color","red");
        })
    
// ___________________________________________________________________________________________________________________

// PRINCIPAIS COMANDOS DO JQUERY

$("h1");  //document.querySelector("h1");

$("h1").css("color", "red"); // document.querySelector("h1").style.color = "red";

$(document).ready(function(){}) // Garante que o código dentro da função espere o script do jquery carregar.

$("h1").addClass("big-title"); // document.querySelector("h1").classList.add("big-title");
$("h1").removeClass("big-title"); // document.querySelector("h1").classList.remove("big-title");
$("h1").toggleClass("big-title"); // document.querySelector("h1").classList.toggle("big-title");
$("h1").hasClass("big-title"); // Retorna um booleano, verificando se o elemento contém a classe.

$("h1").text("Hello"); //  document.querySelector("h1").textContent("Hello");
$("h1").html("Hello"); //  document.querySelector("h1").innerHTML("Hello");

console.log($("img").attr("src", "www.google.com")); // document.querySelector("h1").setAttribute("src", "alteração")

$("h1").click(function() { } // Adicionando event listener.
    
$("h1").before("<button>Dont click me</button>"); //Cria comandos html antes do elemento mencionado.
$("h1").after("<button>Dont click me</button>"); //Cria comandos html depois do elemento mencionado.
$("h1").prepend("<button>Dont click me</button>"); //Cria comandos html no elemento elemento mencionado, antes do conteúdo pré existente.
$("h1").apend("<button>Dont click me</button>"); //Cria comandos html no elemento elemento mencionado, depois do conteúdo pré existente.

$("h1").remove(); //Remove elemento.

$("h1").hide(); // Esconte o elemento.

$("h1").fadeOut(); // Esconde o elemento de forma menos brusca.
$("h1").fadeIn(); // Exibe o elemento de forma menos brusca.

$("h1").slideUp(); // Esconde o elemento colapsando.
$("h1").slideDown(); // Exibe o elemento colapsando.

$("h1").toggle(); //Esconde e reexibe o elemento.

$("h1").animante{opacity:0.95} // Anima o elemento, porém apenas com atributos com valor numérico.

// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________

// _____TYPESCRIPT_____

// REPOSITÓRIO COM CÓDIGOS DO CURSO

    // https://github.com/luizomf/cursojstypescript

// INSTALAÇÃO DO TYPESCRIPT

    npm i typescript -D

    npm i ts-node -D    // Ts Node

// EXTENSÃO DOS ARQUIVOS TYPESCRIPT

    index.ts

// SCRIPT MODE E MODULE MODE

    // Script mode: Considera todos os arquivos js como um único. É o padrão.

    // Module Mode: Considera cada arquivo como um módulo separado.

        // Para ser ativado, basta exportar algo. Ex:

            export default nome;

// EXTENSÕES UTILIZADAS NO VSCODE

    // 1- Pasta '.vscode': Utilizada para configurar o vscode. Dentro criar um arquivo 'settings.json'.

    // 2- Code Runner: Executar os arquivos typescript no vs code.

        // Configuração na '.vscode':

            {
                "code-runner.executorMap": {
                    "typescript": "npx ts-node --files",
                }
            }

    // 3- Criação do arquivo tsconfig.json

        {
        "compilerOptions": {
            "target": "ES2020",
            "module": "CommonJS",
            "strict": true,
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true
        }
        }

    // 4- Configurar do ESLINT

    // 5- Configurar o Prettier

    // 6 - tsconfig.json

        // Compiler Options: https://www.typescriptlang.org/docs/handbook/compiler-options.html

        // Criar arquivo tsconfig.json

            npc tsc --init

// ___________________________________________________________________________________________________________________

// Sintaxe de Type Annotations

    // Tipos Básicos

    let nome: string = 'Fernando';                      // string
    let idade: number = 30;                             // number
    let adulto: boolean = true;                         // boolean
    let simbolo: symbol = Symbol('qualquer-symbol');    // symbol
    let big: bigint = 10n;                              // bigint

    // Arrays

    let arrayDeNumeros: Array<number> = [1,2,3];
    let arrayDeNumeros2: number[] = [1,2,3];

    // Objetos

    let pessoa: {nome:string, idade:number, adulto?: boolean} = {       // A interrogação mostra que o campo é opcional.
        nome: 'Fernando',
        idade: 26,
        adulto: true
    }

    // Funções

    function soma(x: number, y: number):number {
        return x+y
    };

    const soma2: (x: number, y: number) => number = (x,y) => x + y;

    // Observação: Só inferir o tipo quando o typescript não identificar automaticamente (inferir como 'any').

// ___________________________________________________________________________________________________________________

// Tipo "Any"

    // O Tipo Any é retornado quando o Typescript não consegue definir o tipo da variável.

    // Obs: Utilizar o any apenas em último caso.

    // Aplicando o tipo any:

        function showMessage2(msg: any) {
            return console.log(msg);
        }

// ___________________________________________________________________________________________________________________

// Tipo "Void"

    // Significa que a função/método não retorna nada.

    // Exemplo Função:

        function semRetorno(...args: string[]): void {
            console.log(args.join(' '));
        };

    // Exemplo Objeto

        const pessoa = {
            nome: 'Luiz',
            sobrenome: 'Silva',

            exibirNome(): void {
                console.log(this.nome + this.sobrenome);
            }
        }

// ___________________________________________________________________________________________________________________

// Tipo "Object" (objetos em geral)

    const objetoA: {
        chaveA: string,
        chaveB: string,
        chaveC?: string,            // Chave Opcional (?:)
        [key: string]: unknown      // Permite que sejam criadas novas chaves
    } = {
        chaveA: 'Valor A',
        chaveB: 'Valor B'
    }

    objetoA.chaveD = 'Valor D';     // Criação de chave depois de declarar os tipos.

// ___________________________________________________________________________________________________________________

// Tipo "Array"

    // Formas de declarar o tipo array: Array<tipo> ou tipo[]

        let array1: Array<string> = ['A', 'B', 'C'];

        let array2: string[] = ['A', 'B', 'C'];

// ___________________________________________________________________________________________________________________

// Tipo "Tuple"

    // É um Array com tipos específicos.

    // Exemplo de Tupla

        const dadosCLiente1: [number, string] = [1, 'Fernando'];

        dadosCLiente1[0] = 2;    // A tupla pode ser alterada.

        const dadosCLiente2: [number, string, string?] = [1, 'Fernando'];       // Índice 2 opcional.

        const dadosCLiente3: [number,string, ...string[]] = [1, 'Fernando'];    // Utilizando o rest operator.

    // Read Only

        const dadosCLiente4: readonly [number,string] = [1, 'Fernando'];         // Não pode ser alterada.

// ___________________________________________________________________________________________________________________

// Tipos "Null" e "Undefined"

    // Exemplo Undefined

        export function createPerson (  // Inputs
            firstName: string,
            lastName: string
        ): {                            // Return
            firstName: string,
            lastName: string
        } {                             // Função
            return {
                firstName,
                lastName
            };
        };

    // Exemplo Null

        export function squareOf(x: any) {
            if(typeof x === 'number') return x*x;
            return null;
        };

        const x = squareOf(2);  // O resultado dessa função pode ser apenas 'number' ou 'null'.

// ___________________________________________________________________________________________________________________

// Tipo "Never"

    // Significa que a função ou método nunca vai retornar nada

    // Exemplo

    function criaErro(): never {
        throw new Error('Erro Qualquer');
    };

// ___________________________________________________________________________________________________________________

// Tipo "Enum"

    // Exemplo

        enum Cores {
            VERMELHO,   //0
            AZUL,       //1
            AMARELO,    //2
        }

        console.log(Cores.VERMELHO);    // Output: 0

        console.log(Cores[0])           // Output: 'VERMELHO'


        enum Cores {
            ROXO = 200,
            VERDE = 240,
            LARANJA = 'laranja',
        }

        // Os dois enum Cores são unidos automaticamente por possuírem o mesmo nome.

// ___________________________________________________________________________________________________________________

// Tipo "unknown"

    // Funciona como um 'any', porém de uma forma mais segura.

    let x: unknown;
    x = 20;
    let y = 10;

    console.log (x + y);                            // O Typescript avisa que x é unknown, e não aceita a operação.

    if (typeof x === 'number') console.log(x+y);    // Como foi tratado, agora a operação é aceita.

// ___________________________________________________________________________________________________________________

// Union Types

    // Quando a variável possue mais de um tipo.

    // Exemplo

        function addOrConcat(a:number | string, b:number | string) {
            if (typeof a === 'number' && typeof b === 'number') return a + b;
            if (typeof a === 'string' && typeof b === 'string') return a + b;
            return `${a}${b}`;
        }

// ___________________________________________________________________________________________________________________

// Tipos Literais

    // Exemplo:

        let a = 100 as const;   // O tipo de 'a' passa a ser '100'.

        // Obs: Nesse caso, é melhor criar uma const.

    // Exemplo em uma função:

        function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {     // A variável cor só pode ser do tipo de uma das 3 cores citadas.
            return cor;
        }

        console.log(escolhaCor('Vermelho'));                            // O Typescript verifica se o valor é do tipo especificado.

// ___________________________________________________________________________________________________________________

// Type Alias

    // É a criação de tipos.

    // Exemplo

        type Idade = number;
        type Pessoa = {
            nome: string;
            idade: Idade;   // Alias dentro de Alias
            salario: number;
            corPreferida?:string;
        };

        type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
        type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
        type CorPreferida = CorRGB | CorCMYK;                       // União de 2 alias.


        const pessoaa: Pessoa = {
            nome: 'Fernando',
            idade:26,
            salario: 0,
        }


        export function setCorPreferida(pessoa:Pessoa, cor:CorPreferida):Pessoa {
            return {...pessoa, corPreferida: cor}
        }

        console.log(setCorPreferida(pessoaa, "Azul"));
        // Output: { nome: 'Fernando', idade: 26, salario: 0, corPreferida: 'Azul' }

// ___________________________________________________________________________________________________________________

// Intersection Types

    // Exemplo

    type TemNome = {nome: string};
    type TemSobrenome = {sobrenome: string};
    type TemIdade = {idade: number};

    type Pessoa = TemNome & TemSobrenome & TemIdade;

    const pessoa: Pessoa = {
        nome: 'Fernando',
        sobrenome: 'Dalpiaz',
        idade: 26,
    }

// ___________________________________________________________________________________________________________________

// Funções como Tipo

    // Exemplo

        type mapStringsCallback = (item: string) => string;

        function mapStrings(array: string[], callbackfn: mapStringsCallback): string[] {
            const newArray: string[] = [];

            for (let i = 0; i < array.length; i++) {
                const item = array[i];
                newArray.push(callbackfn(item));
            }

            return newArray;
        }

        const abc = ['a', 'b', 'c'];

        const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

        console.log(abcMapped);     // Output: [ 'A', 'B', 'C' ]

// ___________________________________________________________________________________________________________________

// O Structural Type System do Typescript

    // Exemplo

        type VerifyUserFn = (user: User, sentValue: User) => boolean;
        type User = {username: string, password: string};

        const verifyUser: VerifyUserFn = (user, sentValue) => {
            return (
                user.username === sentValue.username && user.password === sentValue.password
            );
        };

        const bdUser = {username: 'Joao', password: '123456'};
        const sentUser = {username: 'Joao', password: '123456'};

        const loggedIn = verifyUser(bdUser, sentUser);
        console.log(loggedIn);

// ___________________________________________________________________________________________________________________

// Type Assertions

    // Condicional (recomendado)

        const body1 = document.querySelector('body');
        if(body1) body1.style.background = 'red';

    // Non-null assertion '!' (não é muito recomendado)

        const body2 = document.querySelector('body') !;
        body2.style.background = 'red';

    // Type Assertion (recomendado e mais utilizado)

        const body3 = document.querySelector('body') as HTMLBodyElement;
        body3.style.background = 'red';

// ___________________________________________________________________________________________________________________

// Classes em Typescript

    // Exemplo (versão longa):

        export class Empresa {
            public readonly nome: string;                           // Readonly: Não pode ser alterado.     // Public é redundante, já é o padrão.
            private readonly colaboradores: Colaborador[] = [];     // A classe também é considerada um tipo.
            protected readonly cnpj: string;

            constructor(nome: string, cnpj: string) {
                this.nome = nome;
                this.cnpj = cnpj;
            };
        }

        export class Colaborador {

        }

        const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
        // console.log(empresa1);

    // Exemplo (versão reduzida)

        export class Empresa2 {
            private readonly colaboradores: Colaborador2[] = [];

            constructor(readonly nome: string, protected readonly cnpj: string) {
                this.nome = nome;
                this.cnpj = cnpj;
            };

            adicionaColaborador(colaborador: Colaborador2) {
                this.colaboradores.push(colaborador);
            }

            mostraColaboradores() {
                console.log(this.colaboradores);
            }
        }

        export class Colaborador2 {
            constructor(public readonly nome: string, readonly sobrenome: string) {
                this.nome = nome;
                this.sobrenome = sobrenome;
            }
        }

        const empresa2 = new Empresa2('Udemy', '11.111.111/0001-11');
        const colaborador1 = new Colaborador2('Fernando', 'Dalpiaz');
        empresa2.adicionaColaborador(colaborador1);
        console.log(empresa2);
        empresa2.mostraColaboradores();

// ___________________________________________________________________________________________________________________

// Interfaces em Typescript

    // Praticamente idênticas ao Type Alias, porém é mais utilizada em objetos.

    // Exemplo

        interface TipoNome {
            nome: string;
        };

        interface TipoSobrenome {
            sobrenome:string;
        };

        interface TipoNomeCompleto {
            nomeCompleto(): string;
        };

        interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto{}

        export class Pessoa implements TipoPessoa {
            constructor(public nome: string, public sobrenome: string) {}

            nomeCompleto(): string {
                return this.nome + ' ' + this.sobrenome;
            };
        }

        const pessoa1 = new Pessoa('Fernando', 'Dalpiaz');
        console.log(pessoa1.nomeCompleto());

// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
