const input=document.querySelector("input");
const button=document.querySelector("button");
const p=document.querySelector("p");
button.addEventListener("click", function() {
    const num = parseInt(input.value, 10);
    if (isNaN(num) || input.value === "") {
        p.innerHTML = "Please enter a valid number";
    } else if (num <= 1 || (num % 2 === 0 && num !== 2) || (num % 3 === 0 && num !== 3)) {
        p.innerHTML = "The number is not prime";
    } else {
        p.innerHTML = "The number is prime";
    }
});
