//while

function drawTriangle(count, icon) {
    count = 0

    let star = icon
    
    while (count < 5) {
        console.log(star)
        count++
        star += icon
    }
}

drawTriangle(5, '*');


//for 

function drawTriangle(count, icon) {
    
    let star = icon
    for(count = 0; count < 5; count++){
        console.log(star)
        star+= icon
    }
}

drawTriangle(5, '*');
