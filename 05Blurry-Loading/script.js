window.onload=function () {
    let times=0
    const background_item=document.querySelectorAll('.background')[0]
    const progress=document.querySelectorAll('.progress')[0]
    var my_var = setInterval(function (){
        progress.innerHTML=10+times*3+ "%"
        progress.style.opacity=1-times/30
        background_item.style.filter='blur('+(30-times)+'px)'
        times+=1
        if (times==31){
            clearInterval(my_var)
        }
    },100)

}