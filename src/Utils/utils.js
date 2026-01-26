const getDateFromString = (d, op=null) => {
    if (!d) return "";
    const date = new Date(d);

    if(op==='timeonly'){
      return date.toLocaleString('en-US', {
        hour: 'numeric',
        hour12: true
      }).toUpperCase();
    }

    if(op==='dayonly'){
      return date.toLocaleString('en-US', {
        weekday: 'short'
      });
    }

    if(op==='monthonly'){
      return date.toLocaleString('en-US', {
        month: 'short'
      });
    }

    if(op === 'dateandmonth'){
      return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric'
      });
    }

    if(op === 'shortdate'){
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }

    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

const getFavicon = (url)=>{

    if(url &&( url.startsWith('http://www.') || url.startsWith('https://www.') || url.startsWith('www.') || url.startsWith('http://') || url.startsWith('https://')) && url.includes('.com')){
        const domainval = (() => {
            try {
            const { hostname } = new URL(url.startsWith('http') ? url : `https://${url}`);
            const res = hostname.replace(/^www\./, '').replace(/\.com.*/, '.com');
            return res;
            } catch {
            return '';
            }
        })();
        // console.log(domainval);
        // const faviconUrl = `https://www.google.com/s2/favicons?domain=${domainval}&size=128`;
        const faviconUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domainval}&size=128`;
      return faviconUrl;
    }
    else if(!url){
        return '';
    }

}

export { getDateFromString, getFavicon };