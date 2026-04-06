export function resultado(num1, num2, operador) {

    if (operador === "+") {
        return num1 + num2;
    } else if (operador === "-") {
        return num1 - num2;
    } else if (operador === "*") {
        return num1 * num2;
    } else if (operador === "/") {
        return num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
    } else {
        return "Operador inválido";
    }
}