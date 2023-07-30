function bgchange(color) {
    let colorarray = ["#f50c0c", "#d821cf", "#ffffff", "#60aa66", "#96c2c2"];
    document.body.style.background = colorarray[color];
}
 
let colorarray = ["#f50c0c", "#d821cf", "#ffffff", "#60aa66", "#96c2c2"];
let colorbox = document.getElementById("colorbox");
 
colorarray.forEach(function (color, index) {
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function () {
        bgchange(index);
    });
    colorbox.appendChild(span);
});