
const calculate = () => {
    let exp = forms.answers.value;

    if (!exp) return;

    try {

        exp = exp.replace(/e/g, `(${Math.E})`);

        exp = exp.replace(/%/g, '/100');

        let result = eval(exp);

        if (forms.answers.value.includes("e")) {
            forms.answers.value = result.toFixed(8);
        } else {

            forms.answers.value = Number(result);
        }


    } catch (error) {
        forms.answers.value = "Error";
    }
}