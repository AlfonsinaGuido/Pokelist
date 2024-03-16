/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  mode: 'jit',
  theme: {
    screens: {
      'max-sm': {'max': '799px'},
      'max-md': {'max': '1023px'},
      'max-lg': {'max': '1199px'},
    },
    extend: {
      fontFamily: {
        sans: ['Spartan', 'sans-serif'],
      },
      colors: {
        "red": "#F44034",
        "yellow": "#FFCC00",
        "blue":"#4B91E2",
        "grey": "#5C5C5C",
        "green": "#80C684"
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
        'gradient-body': 'linear-gradient(to bottom, #80C684 70%, #FFCC00 100%);'
      },
      animation: {
        'heartbeat': 'heartbeat 1s ease-in-out infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
        },
      }
    },
  },
  plugins: [],
};
