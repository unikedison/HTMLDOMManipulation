let txtBox1 = document.createElement("input");
txtBox1.setAttribute("name", "txtBox");
txtBox1.setAttribute("type", "text");

let txtBox2 = document.createElement("input");
txtBox2.setAttribute("name", "txtBox");
txtBox2.setAttribute("type", "text");
txtBox2.style.marginLeft = "25px";

let txtBox3 = document.createElement("input");
txtBox3.setAttribute("name", "txtBox");
txtBox3.setAttribute("type", "text");
txtBox3.style.marginLeft = "25px";

let para1 = document.createElement("p");
para1.setAttribute("id", "output");
para1.style.textAlign = "center";

let button1 = document.createElement("button");
button1.setAttribute("id", "button1");
button1.innerHTML = "Click Me";
button1.style.marginLeft = "30px";
button1.addEventListener("click", () => {
    let values = document.getElementsByName("txtBox");
    let output = "";
    values.forEach(x => output += x.value);
    para1.innerHTML = output;
});

document.body.appendChild(txtBox1);
document.body.appendChild(txtBox2);
document.body.appendChild(txtBox3);
document.body.appendChild(button1);
document.body.appendChild(para1);