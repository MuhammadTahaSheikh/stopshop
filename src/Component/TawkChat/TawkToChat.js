import React, { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/660270cca0c6737bd124b944/1hpsoh8en';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return null; // Since this component doesn't render anything
};

export default TawkToChat;
