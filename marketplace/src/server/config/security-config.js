export default {
  headers: [
    { name: 'server',
      value: 'Digital Dimension',
    },
    { name: 'X-Content-Type-Options',
      value: 'nosniff',
    },
    { name: 'X-Download-Options',
      value: 'ienoopen',
    },
    /* { name:   'X-Frame-Options',
      value:  'sameorigin'
    },*/
    { name: 'X-Powered-By',
      value: 'Digital Dimension',
    },
    { name: 'X-XSS-Protection',
      value: '1; mode=block',
    },
    /*{ name:   'Content-Security-Policy',
      value:  "default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; manifest-src 'self'"
    }*/
  ],
};
