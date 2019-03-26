button.addEventListener('click', (e)=>{
    let image =document.createElement('img')
    image.src = '/pay'
    image.onload = function () {
        alert("成功")
        amount.innerText = amount.innerText - 1
    }
    image.onerror = function () {
        alert("失败")
    }

}
)