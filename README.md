# CaptchaTencent
我个人是不太喜欢往window上挂东西，所以用模块来代替我不喜欢的方式

## how to use

```typescript
import { TCaptcha, load } from "captcha-tencent";

// 预加载
// useEffect(() => { load() }, []);

TCaptcha("您的CaptchaAppId", {}).then(res => {
  console.log(res);
}).catch(e => {
  console.log(e.message);
})

// or

try {
  const res = await TCaptcha("您的CaptchaAppId", {});
  console.log(res);
} catch(e) {
  console.log(e.message);
}
```

### more
[详细文档](https://cloud.tencent.com/document/product/1110/36841)
