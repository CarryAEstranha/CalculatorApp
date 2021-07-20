//////////////////////////
//FUNÇÕES DA CALCULADORA//
//////////////////////////

// Variáveis que armazenam o resultado e a operação
let result = 0, operations = "0";
// Variáveis que indicam se é possível inserir uma nova operação no vetor e se já tem número
let ableToInsertOperation = false, firstNumber = false, firstNumberAuxiliar = false;
// Variável que indica ao programa se a igualdade está sendo mostrada
let equal = false;
// Variável que indica se pode inserir vírgula
let point = true;
// Variável que indica ao programa infinitos
let infinity = false;
// VETOR QUE ARMAZENA TODAS AS OPERAÇÕES
let vectorOperations = [""];

// Insere resultado no INNER HTML
document.getElementById("result").innerHTML = result;
// Insere operações no INNER HTML
document.getElementById("operation").innerHTML = operations;

// FUNÇÃO QUE REALIZA TODAS AS OPERAÇÕES MATEMÁTICAS DO PROGRAMA
function calculator(props)
{
    // Verifica qual é o valor de props
    if(props >=0 && props <= 9){    // Caso seja um número
        // Verifica se a igualdade foi pressionada
        if(equal == true){
            // Reseta o resultado
            result = 0;
            // Reseta o vetor de operações
            vectorOperations = [""];
            // Reseta able to insert operation
            ableToInsertOperation = false;
            // Reseta firstNumber
            firstNumber = false;
            // Reseta firstNumberAuxiliar
            firstNumberAuxiliar = false;
            // Reseta point
            point = true;

            // Indica qua a igualdade não foi pressionada
            equal = false;
        }

        // Recebe o último indice do vetor de operações
        let indice = vectorOperations.length - 1;
        // Atualiza o número no vetor de operações
        vectorOperations[indice] = vectorOperations[indice] + props;
        // Indica ao programa que pode inserir mais uma operação
        ableToInsertOperation = true;
        // Indica ao programa que o primeiro número foi inserido
        firstNumber = true;
        // Indica ao programa que o primeiro número auxiliar foi inserido
        firstNumberAuxiliar = true;
    }
    // Verifica se props é um ponto
    else if(props == "." && point == true){
        // Verifica se o first number ainda é false
        if(firstNumber == false){
            // Recebe o último indice do vetor de operações
            let indice = vectorOperations.length - 1;
            // Atualiza o número no vetor de operações
            vectorOperations[indice] = "0.";
            // Indica ao programa que não pode mais inserir vírgula
            point = false;
        }
        // Verifica se o first number auxiliar foi inserido
        if(firstNumberAuxiliar == true){
            // Recebe o último indice do vetor de operações
            let indice = vectorOperations.length - 1;
            // Atualiza o número no vetor de operações
            vectorOperations[indice] = vectorOperations[indice] + props;
            // Indica ao programa que não pode mais inserir vírgula
            point = false;
        }
    }
    // Caso seja operação
    else if(firstNumber == true && (props == "+" || props == "-" || props == "x" || props == "/")){  // Caso seja uma operação + - * /
        // Verifica se a igualdade foi pressionada
        if(equal == true){
            // Atualiza o vetor de operações
            vectorOperations = [result.toString()];
            // Informa para sair da igualdade
            equal = false;
        }
        
        // Verifica qual é a operação
        if(props == "+"){   // Soma
            // Verifica se é possível inserir uma nova operação
            if(ableToInsertOperation == true){
                // Adiciona uma operação no vetor
                vectorOperations.push("+");
                // Adiciona um novo número no vetor
                vectorOperations.push("");
                // Indica ao programa não inserir uma nova operação após essa
                ableToInsertOperation = false;
                // Indica ao programa que o primeiro número auxiliar não foi inserido
                firstNumberAuxiliar = false;
                // Indica ao programa que pode inserir novos pontos
                point = true;
            }
            else{
                // Recebe o último indice do vetor de operações
                let indice = vectorOperations.length - 1;
                // Altera a operação atual
                vectorOperations[indice-1] = "+";
            }
        }
        else if(props == "-"){   // Subtração
            // Verifica se é possível inserir uma nova operação
            if(ableToInsertOperation == true){
                // Adiciona uma operação no vetor
                vectorOperations.push("–");
                // Adiciona um novo número no vetor
                vectorOperations.push("");
                // Indica ao programa não inserir uma nova operação após essa
                ableToInsertOperation = false;
                // Indica ao programa que o primeiro número auxiliar não foi inserido
                firstNumberAuxiliar = false;
                // Indica ao programa que pode inserir novos pontos
                point = true;
            }
            else{
                // Recebe o último indice do vetor de operações
                let indice = vectorOperations.length - 1;
                // Altera a operação atual
                vectorOperations[indice-1] = "–";
            }
        }
        else if(props == "x"){   // Subtração
            // Verifica se é possível inserir uma nova operação
            if(ableToInsertOperation == true){
                // Adiciona uma operação no vetor
                vectorOperations.push("×");
                // Adiciona um novo número no vetor
                vectorOperations.push("");
                // Indica ao programa não inserir uma nova operação após essa
                ableToInsertOperation = false;
                // Indica ao programa que o primeiro número auxiliar não foi inserido
                firstNumberAuxiliar = false;
                // Indica ao programa que pode inserir novos pontos
                point = true;
            }
            else{
                // Recebe o último indice do vetor de operações
                let indice = vectorOperations.length - 1;
                // Altera a operação atual
                vectorOperations[indice-1] = "×";
            }
        }
        else if(props == "/"){   // Subtração
            // Verifica se é possível inserir uma nova operação
            if(ableToInsertOperation == true){
                // Adiciona uma operação no vetor
                vectorOperations.push("÷");
                // Adiciona um novo número no vetor
                vectorOperations.push("");
                // Indica ao programa não inserir uma nova operação após essa
                ableToInsertOperation = false;
                // Indica ao programa que o primeiro número auxiliar não foi inserido
                firstNumberAuxiliar = false;
                // Indica ao programa que pode inserir novos pontos
                point = true;
            }
            else{
                // Recebe o último indice do vetor de operações
                let indice = vectorOperations.length - 1;
                // Altera a operação atual
                vectorOperations[indice-1] = "÷";
            }
        }
    }
    // Caso seja porcentagem
    else if(props == "%"){
        // Verifica se é possível porcentagem
        if(vectorOperations.length >= 3 && vectorOperations[vectorOperations.length - 1] != 0){
            // Laço que converte todos os números string em float
            for(let i = 0; i < vectorOperations.length; i++){
                // Verifica apenas os índices pares
                if(i % 2 == 0){
                    // Muda para float
                    vectorOperations[i] = parseFloat(vectorOperations[i]);
                }
            }

            // Recebe o primeiro valor do vetor
            result = vectorOperations[0];
            // Laço que calcula as operações do vetor
            for(let i = 1; i < vectorOperations.length-2; i = i + 2){
                // Verifica apenas as operações
                if(i % 2 != 0){
                    // Verifica qual é a operação atual
                    if(vectorOperations[i] == "+"){ // Caso seja uma soma
                        // Realiza a operação
                        result = result + vectorOperations[i+1];
                    }
                    else if(vectorOperations[i] == "–"){    // Caso seja uma subtração
                        // Realiza a operação
                        result = result - vectorOperations[i+1];
                    }
                    else if(vectorOperations[i] == "×"){    // Caso seja uma multiplicação
                        // Realiza a operação
                        result = result * vectorOperations[i+1];
                    }
                    else if(vectorOperations[i] == "÷"){    // Caso seja uma divisão
                        // Realiza a operação
                        result = result / vectorOperations[i+1];
                    }
                }
            }

            // Verifica agora qual é a operação de porcentagem
            if(vectorOperations[vectorOperations.length-2] == "+"){ // Caso seja uma soma
                // Soma o resultado a sua porcentagem
                result = result + result*(vectorOperations[vectorOperations.length-1]/100);
            }
            else if(vectorOperations[vectorOperations.length-2] == "–"){    // Caso seja uma subtração
                // Subtrai o resultado a sua porcentagem
                result = result - result*(vectorOperations[vectorOperations.length-1]/100);
            }
            else if(vectorOperations[vectorOperations.length-2] == "×"){    // Caso seja multiplicação
                // Calcula a porcentagem
                result = result*(vectorOperations[vectorOperations.length-1]/100);
            }

            // Verifica se o resultado é muito grande
            if(result.toString().length > 10){
                // Transforma o resultado em notação científica
                result = result.toExponential(2);
            }

            // Indica ao programa igualdade
            equal = true;
        }
    }
    // Caso seja negate
    else if(props == "+/-"){
        // Altera o valor do resultado
        result = result * (-1);
    }

    // Verifica se é para limpar o ambiente
    if(props == "AC"){
        // Reseta o resultado
        result = 0;
        // Reseta o vetor de operações
        vectorOperations = [""];
        // Reseta able to insert operation
        ableToInsertOperation = false;
        // Reseta firstNumber
        firstNumber = false;
        // Reseta firstNumberAuxiliar
        firstNumberAuxiliar = false;
        // Reseta point
        point = true;
    }

    // Reseta a variável das operações
    operations = "";
    // Laço que calcula o valor das operações
    for(let i = 0; i < vectorOperations.length; i++){
        // Atualiza operações
        operations = operations + vectorOperations[i];

        // Excluí a última operação para adicionar um espaço em branco
        if(i < vectorOperations.length - 1){
            // Adiciona um espaço em branco
            operations = operations + " ";
        }
    }
    // Verifica se operações ainda é vazio
    if(operations == ""){
        // Insere 0
        operations = "0";
    }

    // Verifica se o botão de igualdade foi pressionado
    if(firstNumber == true && props == "="){
        // Laço que converte todos os números string em float
        for(let i = 0; i < vectorOperations.length; i++){
            // Verifica apenas os índices pares
            if(i % 2 == 0){
                // Muda para float
                vectorOperations[i] = parseFloat(vectorOperations[i]);
            }
        }

        // Recebe o primeiro valor do vetor
        result = vectorOperations[0];
        // Laço que calcula as operações do vetor
        for(let i = 1; i < vectorOperations.length; i = i + 2){
            // Verifica apenas as operações
            if(i % 2 != 0){
                // Verifica qual é a operação atual
                if(vectorOperations[i] == "+"){ // Caso seja uma soma
                    // Realiza a operação
                    result = result + vectorOperations[i+1];
                }
                else if(vectorOperations[i] == "–"){    // Caso seja uma subtração
                    // Realiza a operação
                    result = result - vectorOperations[i+1];
                }
                else if(vectorOperations[i] == "×"){    // Caso seja uma multiplicação
                    // Realiza a operação
                    result = result * vectorOperations[i+1];
                }
                else if(vectorOperations[i] == "÷"){    // Caso seja uma divisão
                    // Realiza a operação
                    result = result / vectorOperations[i+1];
                }
            }
        }

        // Verifica se o resultado é muito grande
        if(result.toString().length > 10){
            // Transforma o resultado em notação científica
            result = result.toExponential(2);
        }

        // Indica ao programa igualdade
        equal = true;
    }

    // Insere resultado no INNER HTML
    document.getElementById("result").innerHTML = result;
    // Adiciona as operações no inner HTML
    document.getElementById("operation").innerHTML = operations;

    // Verifica se houve divisão por zero
    if(isFinite(result) == false){
        // Reseta o resultado
        result = 0;
        // Reseta o vetor de operações
        vectorOperations = [""];
        // Reseta able to insert operation
        ableToInsertOperation = false;
        // Reseta firstNumber
        firstNumber = false;
        // Reseta firstNumberAuxiliar
        firstNumberAuxiliar = false;
        // Reseta point
        point = true;
    }

    console.log(vectorOperations);
}

////////////////////
//FUNÇÕES DE TEMAS//
////////////////////

// VARIÁVEL QUE ARMAZENA O TEMA DA CALCULADORA
let dark = true;

// FUNÇÃO QUE ALTERA AS CORES DO PROGRAMA
function toggleTheme()
{
    // Recebe o document root
    let root = document.documentElement;

    // Verifica se o dark está ativado
    if(dark == true){
        // Desativa o dark
        dark = false;

        // Altera a cor de fundo da calculadora
        root.style.setProperty("--calculator-background", "#ffffff");
        // Altera a cor do resultado do display
        root.style.setProperty("--calculator-display-result", "#323232");
        // Altera a cor dos botões
        root.style.setProperty("--calculator-button-color", "#000000");

        // Altera a imagem do botão
        document.getElementById("theme-icon").src = "./assets/light.png";
        // Altera a posição da imagem
        document.getElementById("container-icon").style.marginLeft = "0.2rem";
    }
    else{   // Caso não
        // Ativa o dark
        dark = true;

        // Altera a cor de fundo da calculadora
        root.style.setProperty("--calculator-background", "#323232");
        // Altera a cor do resultado do display
        root.style.setProperty("--calculator-display-result", "#ffffff");
        // Altera a cor dos botões
        root.style.setProperty("--calculator-button-color", "#ffffff");

        // Altera a imagem do botão
        document.getElementById("theme-icon").src = "./assets/dark.png";
        // Altera a posição da imagem
        document.getElementById("container-icon").style.marginLeft = "2.2rem";
    }
}