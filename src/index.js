
const url = "https://turing.captcha.qcloud.com/TCaptcha.js";
export function load() {
    return new Promise((resolve, reject) => {
        if (window.TencentCaptcha) {
            resolve(window.TencentCaptcha);
            return;
        }
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

export function unload() {
    const child = Array.prototype.find.call(document.head.children, (x) => x.src == url);
    if (!child) return;
    child.parentNode.remove(child);
}

export function tCaptcha(id, callback, options) {
    return new window.TencentCaptcha(id, callback, options);
}
