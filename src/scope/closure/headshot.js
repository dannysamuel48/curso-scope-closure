function headShot() {
    let shots = 0;
    function shotCounts(bullets) {
        shots += bullets;
        console.log(`You have succeeded: $${shots} headshots ▄︻̷̿┻̿═━一`);
    }
    return shotCounts;
}

const Shots = headShot();
Shots(2);
Shots(4);
Shots(2);