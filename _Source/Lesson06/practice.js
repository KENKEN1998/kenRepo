function pra1() {
    var text = document.getElementById("pra1Text").value
    alert(text);
};

function pra2() {
    var text = document.getElementById("selectBox01").value
    if(text == "○"){
        alert("OK");
    } else {
        //elseの場合は処理無し。
    }
};

function pra3() {
    var text1 = document.getElementById("pra3Tag1").value
    var text2 = document.getElementById("pra3Tag2").value
    var text3 = document.getElementById("pra3Tag3").value
    if(text1 == "×" && text2 == "×" && text3 == "×"){
        alert("OK");
    } else {
        //elseの場合は処理無し。
    }
};

function pra4() {
    var text1 = document.getElementById("pra4Tag1").value
    var text2 = document.getElementById("pra4Tag2").value
    var text3 = document.getElementById("pra4Tag3").value
    var text4 = document.getElementById("pra4Tag4").value
    if((text1 == "○" && text4 == "○") || (text2 == "○" && text3 == "○")){
        alert("OK");
    } else {
        //elseの場合は処理無し。
    }
};