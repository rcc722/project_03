window.addEventListener('load', function () {
    console.log(111);

    var arr = ['小米商城', 'MIUI', 'loT', '云服务', '金融', '有品', '小爱开放平台', '企业团购', '资质证照', '协议规则', '下载app', 'Select Region'];
    //获取nav 左边导航栏
    var mi_navL = document.querySelector('.mi_navL ul')
    // 循环数组
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement('li');
        if (i == arr.length - 1) {
            li.innerHTML = `<a href="javascript:;">${arr[i]}</a>`;
        } else {
            li.innerHTML = `<a href="javascript:;">${arr[i]}</a>|`;
        }

        //添加到ul
        mi_navL.appendChild(li);
    }
    
})