//Programmiert von Maxi

const backup={
    "kl8b":["Maxi","Marc","Stefan","Leni","Amelie","Tilda","Noah","Max R","Piet","Justus","Julian","Anna","Jonas","Nina","Nora","Josi","Jeanne","Erik","Luisa","Lysanne","Ben","Max W","Jacob","Nenah","Kiaan","Helena","Dilara"],
    "pp8b":["Maxi","Stefan","Amelie","Tilda","Max R","Piet","Nina","Josi","Jeanne","Ben","Max W","Jacob","Nenah","Kiaan","Dilara"]
};

for (const x of backup["kl8b"].sort()){
    document.getElementById("krank").innerHTML+=`<input type="checkbox" id="${x}" name="${x}"> <label for="${x}">${x}</label><br>`;
}

const schlecht={};
const teams=document.getElementById("nummer");
const fehler=document.getElementById("fehler");

function erstellen(){
    let klasse=Array.from(backup[document.getElementById("klasse").value]);
    let teamsschlecht=[];
    fehler.innerHTML="";
    if (teams.value<=1 || teams.value>klasse.length){
        fehler.innerHTML=`Ungültiger wert: ${teams.value}`;
    }else{
        for (const x of backup[document.getElementById("klasse").value]){
            if (document.getElementById(x).checked){
                klasse.splice(klasse.indexOf(x),1);
            }
        }
        let gruppen=document.getElementById("nummer").value;
        if (document.getElementById("modus").value==="schüler"){
            gruppen=Math.floor(backup[document.getElementById("klasse").value].length/document.getElementById("nummer").value);
        }
        let final=[];
        for(let x=0;x<gruppen;x++){
            final.push([]);
            teamsschlecht.push([]);
        }

        const randomIndex = (max) => Math.floor(Math.random() * max);

        while (klasse.length) {
            for (let t = 0; t < gruppen && klasse.length; t++) {
                const index=randomIndex(klasse.length);
                if (klasse[index] in teamsschlecht[t] && document.getElementById("kombo").checked){
                    continue;
                }
                const person = klasse.splice(index, 1)[0];
                final[t].push(person);
                if (schlecht[person]){
                    for (const x of schlecht[person]){
                        schlecht[t].push(x);
                    }
                }
            }
        }

        let output="<table><tbody><tr>";
        for (let x=0;x<final.length;x++){
            output+=`<th width=${100/final.length}%;>Team ${x+1}</th>`
        }
        output+="</tr>";
        for (let x=0;x<final[0].length;x++){
            output+="<tr>";
            for (let y=0;y<final.length;y++){
                if (final[y][x]){
                    output+=`<td>${final[y][x]}</td>`;
                }
            }
            output+="</tr>";
        }
        output+="</tbody></table>";

        document.getElementById("final").innerHTML=output;
    }
}