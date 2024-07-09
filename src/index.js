export function load() {
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

export function TCaptcha(id, options) {
    return new Promise((resolve, reject) => {
        try {
            load().then(C => new C(id, resolve, options)).catch(e => reject(e));
        } catch(e) {
            reject(e);
        }
    });
}
