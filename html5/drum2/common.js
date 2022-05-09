window.addEventListener('load', function () {

    /// keydown  event name  -> window
    window.addEventListener('keydown',
        function (event) {
            // 健值
            let keyCode = event.keyCode; // 按键事件的数据
            let audioEle =
                document.querySelector(`audio[data-key="${keyCode}"]`);
            // console.log(audioEle);
            if (!audioEle) return;
            audioEle.play();
            let keyEle =
                document.querySelector(`.key[data-key="${keyCode}"]`);
            if (!keyEle) return;
            keyEle.classList.add('playing');
            // 定时器
            // this.setTimeout(function(){
            //  // console.log('--------');
            // keyEle.classList.remove('playing');
            // },1000)
            // console.log(keyCode);
        })

    const keys = document.querySelectorAll('.key');
    for (let key of keys) {
        // console.log(key);
        // transitionend 事件会在 CSS transition 结束后触发. 当transition完成前移除transition时，比如移除css的transition-property 属性，事件将不会被触发.如在transition完成前设置  display 为"none"，事件同样不会被触发。
        key.addEventListener('transitionend', function (event) {
            event.target.classList.remove('playing');
        })
    }

})
