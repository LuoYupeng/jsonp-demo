button.addEventListener('click', (e)=>{

    //jQuery写jsonp
    $.ajax({
        url: 'http://jerry.com:8002/pay',
        dataType: 'jsonp',
        success: function (response) {
            if(response === 'success'){
                amount.innerText = amount.innerText - 1
            }
        }
    })




    // jsonp运行机理
    // let script = document.createElement('script')
    // let functionName = 'tom' + parseInt(Math.random() * 10000, 10)
    //
    // window[functionName] = function (result) {
    //
    //     if (result === 'success') {
    //
    //         amount.innerText = amount.innerText - 1
    //
    //     } else {
    //
    //     }
    // }
    // script.src = 'http://jerry.com:8002/pay?callback=' + functionName
    // document.body.appendChild(script)
    // script.onload = function (e) {
    //     e.currentTarget.remove()
    //     delete window[functionName]
    // }
    //
    // script.onerror = function () {
    //     alert('fail')
    //     e.currentTarget.remove()
    //     delete window[functionName]
    // }









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