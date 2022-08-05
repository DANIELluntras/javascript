//// this -----------------close account----------
btnClose.addEventListener('click', function(e){
    e.preventDefault();
    
    console.log("-----------------merge---------------");
    if(inputCloseUsername.value===currentAccount.username&&
        Number(inputClosePin.value)===currentAccount.pin
        ){
            const index = accounts.findIndex(acc=>acc
                .username===currentAccount.username
                )
                console.log(index);
    // delete accounts
                accounts.splice(index,1);
    // hide UI
                containerApp.style.opacity=0;
    
        }
        inputTransferAmount.value =inputClosePin.value = '';
})