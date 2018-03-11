interface Window {
  fbq(action: string, event: string): void;
  _fbq: any;
}

namespace facebook {
  export namespace pixel {
    const name = "fb_pixel_opt_out";
    const optedOutValue = "opted_out";

    export function optOut() : void {
      Cookies.set(name, optedOutValue);
    }

    export function didOptOut() : boolean {
      return Cookies.get(name) === optedOutValue;
    }
  }
}

(function () {
  if (facebook.pixel.didOptOut()) {
    window.fbq = (action, event) => 0;
  } else {
    !function(f,b,e,v,n?:any,t?:any,s?:any)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', '451796375237579'); 
    window.fbq('track', 'PageView');
  }
})();
