//Plus and minus buttons respond to a click event
//Plus button adds one to the product quantity
//Minus button subtracts one from the product quantity
//Quantity updates when the plus or minus buttons are clicked
//Quantity cannot drop below zero

let rockQty = 1

// access the buttons
let addBtn = document.querySelector('#quantity-up')
let minusBtn = document.querySelector('#quantity-down')

// add a click event to each button
addBtn.addEventListener('click', function(e) {
    rockQty++
    console.log(rockQty)
})

minusBtn.addEventListener('click', function(e) {
    rockQty--
    console.log(rockQty)
})