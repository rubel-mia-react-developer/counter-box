let show = document.querySelectorAll('.show')
show.forEach((item)=>{
    let i = 0
    let count = ()=>{
        i++ 
        item.innerHTML = i
        if(i == item.dataset.number){
            clearInterval(stop)
        }
    }

    let stop = setInterval(count, 100);
})