/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        "blue-pressed": "#0031E2",
        "blue-hover": "#345CE9",
        "blue-default": "#617FED",
        "lighter-blue": "#EBEEF5",
        "dark-purp": "#51009D",
        "light-purp": "#990587",
        "dark": "#161616",
        "gray-1": "#1F2937",
        "gray-2": "#374151",
        "gray-5": "#9CA3AF",
        "gray-6": "#D1D5DB",
        "gray-8": "#F8F8F8",
        "gray-9": "#6B7280",
        "dark-gray": "#585959",
        "light-gray": "#ACACAA",
        "lighter-gray": "#F1F2F3",      
        "lighter": "#FAFAFA",
        "success": "#328222",
        "fail": "#CB4141",
        "warning": "#DDAA22"
      },
      fontSize: {
        xsm: "5px",
        sm: "11px",
        smPlus: "13px",
        m: "14px",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      boxShadow: {
        'a-md': '5px 5px 12px rgba(166, 180, 200, 0.7), -5px -5px 10px rgba(255, 255, 255, 0.8);',
        'card-shadow': '2px 2px 6px rgba(166, 180, 200, 0.7), -2px -2px 6px rgba(255, 255, 255, 0.8);',
        'fution-small': '1px 1px 4px rgba(166, 180, 200, 0.7), -1px -1px 4px #FFFFFF;',
        'keypad-payment-shedule': '2px 2px 6px rgba(166, 180, 200, 0.7), -2px -2px 6px rgba(255, 255, 255, 0.8);',
        'messajeOnDelete': '1px 1px 4px rgba(203, 65, 65, 0.8), -1px -1px 4px #FFFFFF',
        'card-shadow-medium': '-2px -2px 6px 0px rgba(255, 255, 255, 0.80), 2px 2px 6px 0px rgba(166, 180, 200, 0.70);'
      },
      backgroundImage: {
        'gradient-body': 'linear-gradient(180deg, #F0F2F5 50.08%, #D7DFFF 162.72%)',
        'login': "url('assets/svg/background-login.svg')",
      }
    },
  },
  plugins: [],
};
