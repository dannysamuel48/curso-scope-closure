function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
// console.log(userName); // Reference error, solo esta definido dentro del bloque

