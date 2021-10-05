let doboz = []
let voltmar = []
let turn = 0
let players = [0,0]
let shotguns = 0

let zold = ['agy', 'agy', 'agy', 'lab','lab','shotgun']
let sarga = ['agy', 'agy', 'lab','lab','shotgun','shotgun']
let piros = ['agy', 'lab','lab','shotgun','shotgun','shotgun']

function elokeszites(){
    doboz =[zold, zold, zold, zold, zold, zold, 
            sarga, sarga, sarga, sarga,
            piros, piros, piros]
    voltmar = []
}

function gurit(kocka){
    let dobas = Math.floor(Math.random() * 6)
    if(kocka[dobas] == 'shotgun'){
        shotguns++;
    }else if(kocka[dobas] == 'agy'){
        players[turn]++;
    }
    console.log(kocka[dobas])
}

function kivalaszt(){
    let rnd = Math.floor(Math.random() * doboz.length)
    while(doboz.includes(rnd)){
        rnd = Math.floor(Math.random() * doboz.length)
    }
    let kocka = doboz[rnd]
    voltmar.push(rnd)
    return kocka
}

function kor(elso_kor){
    if(elso_kor){
        elokeszites()
        shotguns = 0
    }
    gurit(kivalaszt())
    gurit(kivalaszt())
    gurit(kivalaszt())

    if(shotguns >= 3){
        if(turn == 0){turn = 1;}
        else{turn = 0;}
    }

    console.log("Megmaradt kockak szama: " + 
    (doboz.length - voltmar.length))
    console.log("Player1: " + players[0])
    console.log("Player2: " + players[1])
    console.log(shotguns)
}