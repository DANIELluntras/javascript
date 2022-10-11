setTimeout(() => {
    console.log('1 second')
    setTimeout(() => {
        console.log('2 second')
        setTimeout(() => {
            console.log('3 second')
            setTimeout(() => {
                console.log('4 second')
                setTimeout(() => {
                    console.log('5 second')
                    setTimeout(() => {
                        console.log('8 second')
                    }, 5000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
console.log("settimeout")