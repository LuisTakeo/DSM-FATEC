import { sumValues, subtractValues, multiplyValues, divideValues } from "./calculadora.js";


function calculateAndShowResults(funcCalculate, funcShowResult, ...values)
{
    if (typeof funcCalculate !== "function" || typeof funcShowResult !== "function")
        throw new Error("Tipo inválido de parametros");
    let resultado = funcCalculate(...values);
    funcShowResult(resultado);
}


function showResultInPage(value)
{
    const resultHtml = document.getElementById("result");
    resultHtml.textContent = value;
}


function listenerSubmit(event)
{
    event.preventDefault();
    try
    {
        const value1 = document.getElementById("num1");
        const value2 = document.getElementById("num2");
        const values = [parseInt(value1.value), parseInt(value2.value)];

        if (event.submitter.name === "somar")
            calculateAndShowResults(sumValues, showResultInPage, ...values);
        if (event.submitter.name === "subtrair")
            calculateAndShowResults(subtractValues, showResultInPage, ...values);
        if (event.submitter.name === "multiplicar")
            calculateAndShowResults(multiplyValues, showResultInPage, ...values);
        if (event.submitter.name === "dividir")
            calculateAndShowResults(divideValues, showResultInPage, ...values);
    } catch(e)
    {
        console.error(e);
    }


}

const form = document.getElementById("calcular");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    alert("FUNFOU")
    
})
