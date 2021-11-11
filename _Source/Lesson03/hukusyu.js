function ouyo01a(){
    document.getElementById('ouyou01').style.width = '150px'
}

function ouyo01b(){
    document.getElementById('ouyou01').style.width = '75px'
}

function syakyou() {
    var color = document.getElementById("syakyouZone").style.color;
    if (color == "rgb(245, 111, 134)") {
        document.getElementById("syakyouZone").style.color = "blue";
    } else {
        document.getElementById("syakyouZone").style.color = "rgb(245, 111, 134)";
    }
}

function whoishe() {
    var who = document.getElementById("who").name;
    if (who == "gihun") {
        document.getElementById("who").src="./img/you.jpg" 
    }
}

function whoisheLoop() {
    var who = document.getElementById("who").name;
    for (let i = 0; i < 50; i++) {
        if (who == "gihun") {
            document.getElementById("who").src="./img/you.jpg" 
            document.getElementById("who").name = ""
        } else {
            document.getElementById("who").src="./img/gihun.jpg"
            document.getElementById("who").name = "gihun"
        }
    }
    return alert("50回変わりました");
}