const calculate = () => {
    let result = document.getElementById('result').value;
    if (!isValidInput(result)) {
        alert("Por favor, ingresa un cálculo válido.");
        return;
    }

    let calculation = math.evaluate(result);
    document.getElementById('result').value = calculation;
}

const addToResult = (value) => {
    document.getElementById('result').value += value;
}

const clearResult = () => {
    document.getElementById('result').value = '';
}

const isValidInput = (input) => {
    const validCharacters = /^[0-9+\-*/\s.()]+$/
    return validCharacters.test(input);
}

