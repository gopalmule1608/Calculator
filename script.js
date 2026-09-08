let display = document.getElementById('display');

let btn = document.querySelectorAll('#btn');

btn.forEach(btn => {
    btn.addEventListener("click", function () {
        let value = btn.textContent;

        if (value === "Ac") {
            display.value = "";
        } else if (value === "Del") {
            display.value = String(display.value).slice(0, -1);
        } else if (value === "=") {
            try {
                display.value = eval(display.value)
            } catch (error) {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }
    })
})


