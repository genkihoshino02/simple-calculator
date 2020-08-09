

function calculate(){
const operator=document.getElementById("operator").value;
const formerNum=document.getElementById("former").value;
const laterNum=document.getElementById("later").value;
const result = document.getElementById("result");
const reusltCircleA=document.getElementById("resultCircleA");
const reusltCircleB=document.getElementById("resultCircleB");
const resultValueCircle=document.getElementById("resultValueCircle");
formerNumer=Number(formerNum);
laterNumer=Number(laterNum);
let resultValue;
// 足し算・引き算・掛け算・割り算を入力された値に対してそれぞれ行う
if(operator=="plus"){
    let resultValue= formerNumer + laterNumer;
    result.innerHTML = formerNumer+"+"+laterNumer+"="+resultValue;
}else if(operator=="minus"){
    let resultValue= formerNumer - laterNumer;
    result.innerHTML = formerNumer+"-"+laterNumer+"="+resultValue;
}else if(operator=="divided"){
    let resultValue= formerNumer / laterNumer;
    result.innerHTML = formerNumer+"÷"+laterNumer+"="+resultValue;
}else if(operator=="multiplied"){
    let resultValue= formerNumer * laterNumer;
    result.innerHTML = formerNumer+"×"+laterNumer+"="+resultValue;
}

for(let circleA=0; circleA<formerNumer;circleA++){
    reusltCircleA.innerHTML+="<div class=circleA'"+ circleA+"'>●</div>";
    }
for(let circleB=0;circleB<laterNumer;circleB++){
    reusltCircleB.innerHTML+="<div class=circleB'"+ circleB+"'>●</div>";
}
for(let resultCircle=0;resultCircle< resultValue;resultCircle++){
    resultValueCircle.innerHTML+="<div class=circle'"+ resultCircle+"'>●</div>";
}

}

function reload(){
    location.reload();
}