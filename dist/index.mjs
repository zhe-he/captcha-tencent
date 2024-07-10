function load() {
    return new Promise((resolve, reject) => {
        if (window.TencentCaptcha) {
            resolve(window.TencentCaptcha);
            return;
        }
        const url = "https://turing.captcha.qcloud.com/TCaptcha.js";
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = () => {
            resolve(window.TencentCaptcha);
        };
        script.onerror = (err) => {
            reject(err);
        };
        document.head.appendChild(script);
    });
}

function tCaptcha(id, callback, options) {
    return new window.TencentCaptcha(id, callback, options);
}

export { load, tCaptcha };
