
const calculate = () => {
    let exp = forms.answers.value;

    if (!exp) return;

    try {
        
        exp = exp.replace(/e/g, `(${Math.E.toFixed(8)})`);

        exp = exp.replace(/%/g, '/100');

        let result = eval(exp);

        forms.answers.value = Number(result);

    } catch (error) {
        forms.answers.value = "Error";
    }
}