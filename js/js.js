const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(` movament ${i + 1}:  you depositori ${movement}`);
    } else {
        console.log(` movament ${i + 1}: you withdrew  ${Math.abs(movement)}`);
    }
}
//two different properties but have the same answer


console.log('-----for each ------')
movements.forEach(function(mov, i, arr) {
    if (mov > 0) {
        console.log(` movament ${i + 1}:  you depositori ${mov}`);
    } else {
        console.log(` movament ${i + 1}: you withdrew  ${Math.abs(mov)}`);
    }
});

