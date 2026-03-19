//Programmiert von Maxi

const backup={
    kl8b:["Maxi","Marc","Stefan","Leni","Amelie","Tilda","Noah","Max R","Piet","Justus","Julian","Anna","Jonas","Nina","Nora","Josi","Jeanne","Erik","Luisa","Lysanne","Ben","Max W","Jacob","Nenah","Kiaan","Helena","Dilara"],
    pp8b:["Maxi","Stefan","Amelie","Tilda","Max R","Piet","Nina","Josi","Jeanne","Ben","Max W","Jacob","Nenah","Kiaan","Dilara"]
};

const teams=document.getElementById("teams");
const fehler=document.getElementById("fehler");

function erstellen(){
    let klasse=Array.from(backup[document.getElementById("klasse").value]);
    fehler.innerHTML="";
    if (teams.value<=0 || teams.value>klasse.length){
        fehler.innerHTML=`Ungültiger wert: ${teams.value}`;
    }else{
        let final=[];
        for(let x=0;x<document.getElementById("teams").value;x++){
            final.push([]);
        }

        const randomIndex = (max) => Math.floor(Math.random() * max);

        while (klasse.length) {
            for (let t = 0; t < teams.value && klasse.length; t++) {
                const person = klasse.splice(randomIndex(klasse.length), 1)[0];
                final[t].push(person);
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