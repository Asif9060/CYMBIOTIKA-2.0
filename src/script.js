const list = [
    "25% Off + Free Shipping Sitewide",
    "Code Automatically Applied At Checkpoint"
]

setInterval(() => {
    document.querySelector(".rndm").innerText = list[0];
}, 1500);

setInterval(() => {
    document.querySelector(".rndm").innerText = list[1];
}, 3000); 