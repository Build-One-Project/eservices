
console.log("This is Cornel")

let states_options = document.getElementById("states_in_nigeria")
let list_of_lga = document.getElementById("list_lga")
let list_of_lga_drop_down = document.getElementById("lga_in_state")

states_options.addEventListener("click", (e) => {
    // console.log(e.target.value)
    let state_position = e.target.value
    if (state_position) {
        list_of_lga.innerHTML = ""
        list_of_lga_drop_down.innerHTML = ""
        let lgas_in_state = nigeria[state_position].state.locals
        for ( index in lgas_in_state ) {
            let lga = document.createElement("li")
            let lga_option = document.createElement("option")
            
            lga.textContent = lgas_in_state[index].name
            
            lga_option.setAttribute("value", index)
            lga_option.textContent = lgas_in_state[index].name


            list_of_lga.appendChild(lga)
            list_of_lga_drop_down.appendChild(lga_option)

        }
    }
})

