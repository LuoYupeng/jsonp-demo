button.addEventListener('click', (e)=>{
   let script = document.createElement('script')
    script.src = '/pay'
    document.body.appendChild(script)
    script.onload = function(e){
       e.currentTarget.remove()
    }

    script.onerror = function () {
        alert('fail')
        e.currentTarget.remove()
    }









   // 图片发请求
    // let image =document.createElement('img')
    // image.src = '/pay'
    // image.onload = function () {
    //     alert("成功")
    //     amount.innerText = amount.innerText - 1
    // }
    // image.onerror = function () {
    //     alert("失败")
    // }

}
)