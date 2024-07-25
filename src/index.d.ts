interface ICaptchaResult {
    ret: number;
    ticket: string;
    randstr: string;
    CaptchaAppId?: string;
    bizState?: string;
    errorCode?: number;
    errorMessage?: string;
}

interface TCaptchaOptions {
    bizState: any;
    enableDarkMode: boolean | string;
    sdkOpts: { width: number; height: number; };
    ready: (arg: { sdkView: { width: number; height: number; } }) => void;
    needFeedBack: boolean | string;
    loading: boolean;
    userLanguage: string;
    type: string;
    aidEncrypted: string;
    showFn: (arg: any) => void;
}

declare global {
    interface Window {
        TencentCaptcha: {
            new (id: string, callback: (result: ICaptchaResult) => void, options: Partial<TCaptchaOptions>): any;
        };
    }
}

export const load: () => Promise<typeof window.TencentCaptcha>;
export const unload: () => void;
export const tCaptcha: (id: string, callback: (result: ICaptchaResult) => void, options: Partial<TCaptchaOptions>) => any;
