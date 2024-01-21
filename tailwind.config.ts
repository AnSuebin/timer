import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffc107',
        secondary: '#2979ff',
        success: '00c07f',
        failure: 'ff6562',
        background: '#fff',
      },
      fontSize: {
        '15px': '15px',
      },
      width: {
        mobileWidth: '520px',
      },
      screens: {
        mobile: '520px',
      },
      height: {
        footer: '100px',
        mobileHeader: '50px',
        header: '64px',
      },
    },
  },
  plugins: [],
};
export default config;
