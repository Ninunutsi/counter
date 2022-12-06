// initial count
let count = 0;
// select value and vuttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

// ramdenime elementze rom gvinda erti da
// igive raime gavaketot ase vwert
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++
        }else{
            count = 0 ;
        }
        if(count > 0){
            value.style.color = "green"
        }else if(count < 0 ){
            value.style.color = "#b31d10"
        }else{
            value.style.color  = "#008bd5"
        }
        value.textContent = count;
    })
})