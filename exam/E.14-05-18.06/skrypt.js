const numberGuests=document.getElementById('numberGuests')
const w = document.getElementById('with')
const result = document.getElementById('result')

function calucalteCost(){
    let number = Number(numberGuests.value)
    let cost = number*100
    if(w.checked){
        cost = cost*1.3
    }
    result.innerHTML=`Koszt Twojego wesela to ${cost} złotych`
}