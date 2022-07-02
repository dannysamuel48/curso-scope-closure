// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`myWallet: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`Wallet: $${saveCoins}`);
    }
    return countCoins;
}

const myWallet = moneyBox();
myWallet(5);
myWallet(5);
myWallet(15);

const moneyBoxDailin = moneyBox();
moneyBoxDailin(10);
moneyBoxDailin(20);
moneyBoxDailin(5);