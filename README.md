# CaptchaTencent
我个人是不太喜欢往window上挂东西，所以用模块来代替我不喜欢的方式

## how to use

```typescript
import { tCaptcha, load } from "captcha-tencent";

// 加载
await load();

const a = tCaptcha("您的CaptchaAppId", callback, {});
a.show();

// 卸载
unload();


// use react
useEffect(() => {
    load();

    return () => {
        unload();
    }
}, []);

```

### more
[详细文档](https://cloud.tencent.com/document/product/1110/36841)
