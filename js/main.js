writeCode('', cssCode, 50, () => {
    writeCode(cssCode, cssCode2, 0)
})


function writeCode(prefix, code, speed, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    var clock = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        myStyle.innerHTML = prefix + code.substring(0, n)
        domCode.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"})
        if (n >= code.length) {
            window.clearInterval(clock)
            fn.call()
        }
    }, speed)
}