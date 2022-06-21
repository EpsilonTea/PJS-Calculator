// DOM Variables
const AB_DA_input = document.getElementById("AB-DA")
// const AB_DL_input = document.getElementById("AB-DL")
const AB_SA_input = document.getElementById("AB-SA")
// const AB_SL_input = document.getElementById("AB-SL")

const A_DA_input = document.getElementById("A-DA")
const A_DL_input = document.getElementById("A-DL")
const A_SA_input = document.getElementById("A-SA")
const A_SL_input = document.getElementById("A-SL")

const LL_DA_input = document.getElementById("LL-DA")
const LL_DL_input = document.getElementById("LL-DL")
// const LL_SA_input = document.getElementById("LL-SA")
// const LL_SL_input = document.getElementById("LL-SL")

const input_list = [
    AB_DA_input, AB_SA_input,
    A_DA_input, A_DL_input, A_SA_input, A_SL_input,
    LL_DA_input, LL_DL_input
]

const clear_button = document.getElementsByTagName("button")[0]
const calculate_button = document.getElementsByTagName("button")[1]
const result_div = document.getElementsByClassName("result")[0]

function main() {
    // check if button is clicked
    calculate_button.addEventListener("click", () => {
        calculate()
    })

    clear_button.addEventListener("click", () => {
        clear()
    })
}

function calculate() {
    var values_list = []

    for (let i = 0; i < input_list.length; i++) {
        if (input_list[i].value == "") {
            values_list.push(0)
        } else if (Number.isInteger(parseInt(input_list[i].value)) == false) {
            result_div.innerHTML = "Nombor tak sah"
            return
        } else {
            values_list.push(parseInt(input_list[i].value))            
        }
    }

    // calculate
    const price_list = [
        4, 2,
        10, 5, 5, 2,
        10, 5
    ]

    let total = 0

    for (let i = 0; i < values_list.length; i++) {
        total += values_list[i] * price_list[i]
    }

    result_div.innerHTML = "Jumlah : RM " + total 
}

function clear() {
    for (let i = 0; i < input_list.length; i++) {
        input_list[i].value = ""
    }

    result_div.innerHTML = "Jumlah : RM 0" 
}

main()