const numofdecisions = document.getElementById("num-decisions");
const generateinputs = document.getElementById("generate-inputs");
const form = document.getElementById("choices-form");
const choices = document.getElementById("choices-container");
const makedecision = document.getElementById("make-decision");
const res = document.getElementById("result");

generateinputs.addEventListener("click", () => {
    const num = parseInt(numofdecisions.value);

    if (num >= 2) {
        choices.innerHTML = "";
        for (let i = 0; i < num; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.name = `choice-${i}`;
            input.placeholder = `Decision ${i + 1}`;
            input.required = true;
            choices.appendChild(input);
        }

        form.style.display = "block";
    }
});

makedecision.addEventListener("click", () => {
    const choiceInputs = choices.querySelectorAll('input[type="text"]');
    const choicesArray = [];
    for (let i = 0; i < choiceInputs.length; i++) {
        choicesArray.push(choiceInputs[i].value);
    }

    if (choicesArray.length >= 2) {
        const randomIndex = Math.floor(Math.random() * choicesArray.length);
        const optionselected = choicesArray[randomIndex];
        res.textContent = `Please choose: ${optionselected}`;
        res.style.color = "yellow";
    } else {
        res.textContent = "Please enter at least 2 options";
        res.style.color = "red";
    }
});
