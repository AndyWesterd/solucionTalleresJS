for (let num = 2; num <= 30; num++) { 
    let esPrimo = true; 
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) { 
            esPrimo = false; 
            break; 
        } 
    } 
    if (esPrimo) { 
        console.log(num); 
    } 
}