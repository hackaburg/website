import * as JSCookies from "js-cookie";
import { useEffect } from "react";

declare global {
  interface Window {
    Cookies: typeof JSCookies;
    fbq?(action: string, event: string): void;
    _fbq: any;
  }
}

const cookieName = "fb_pixel_opt_out";
const optedOutValue = "opted_out";

const didOptOut = (): boolean =>
  window.Cookies.get(cookieName) === optedOutValue;

const shortCircuitFBQ = () => {
  // tslint:disable-next-line: no-empty
  window.fbq = () => {};
};

export const optOut = (): void => {
  window.Cookies.set(cookieName, optedOutValue);
  shortCircuitFBQ();
  alert("You opted out of Facebook Pixel tracking on hackaburg.de");
};

export const FacebookPixel = () => {
  useEffect(() => {
    if (didOptOut()) {
      shortCircuitFBQ();
      return;
    }

    // prettier-ignore
    // tslint:disable
    !function(f,b,e,v,n?:any,t?:any,s?:any):any
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq!("init", "451796375237579");
    window.fbq!("track", "PageView");
    // tslint:enable
  }, []);

  return null;
};
