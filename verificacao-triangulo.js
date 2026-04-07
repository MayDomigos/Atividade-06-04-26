export function tipoTriangulo(a, b, c) {

    // 1. Verificar se é válido
    if (a <= 0 || b <= 0 || c <= 0) {
        return "none";
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    }

    // 2. Classificação
    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || a === c || b === c) {
        return "isosceles";
    } else {
        return "scalene";
    }
}