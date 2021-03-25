function fn(){
    var interval1 = setInterval(function(){
        console.log("Execueting after every 3 sec")
    },3000)

    setTimeout(function(){
        clearInterval(interval1)
    },10000)
}

fn()