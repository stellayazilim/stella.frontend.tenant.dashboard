const { default: colors } = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
   content: [ 
    './src/**/*.{html,js,svelte,ts}',
    "../../packages/components/**/*.{js,ts,svelte}",
    "../../packages/layouts/**/*.{js,ts,svelte}",
    ],
  theme: {
    extend: {
      colors: {
        default: {
          "dark-primary": "#111722",
          "dark-secondary": "#2e3759",
        },
        "blue-gray": {
          "50": "#eceff1",
          "100": "#cfd8dc",
          "200": "#b0bec5",
          "300": "#90a4ae",
          "400": "#78909c",
          "500": "#607d8b",
          "600": "#546e7a",
          "700": "#455a64",
          "800": "#37474f",
          "900": "#263238",
        },
      },
      backgroundImage: () => ({
        "gradient-radial-to-tr":
          "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-tl":
          "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-br":
          "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-bl":
          "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
      }),
    },
  },
  plugins: [
    // plugin(function ({ addComponents, theme }) {
    //   const colors = {
    //     "gray-900": "#111827",
    //     black: "#000000",
    //     white: "#ffffff",
    //     "blue-300": "#A4CAFE",
    //     "blue-500": "#3F83F8",
    //     "blue-700": "#1A56DB",
    //     "blue-400": "#76A9FA",
    //     "green-300": "#84E1BC",
    //     "green-400": "#31C48D",
    //     "green-500": "#0E9F6E",
    //     "blue-gray-300": "#90A4AE",
    //     "blue-gray-600": "#546E7A"
    //   };
    //   const buttons = {
    //     ".btn": {
    //       boxSizing: "border-box",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       flexDirection: "row",
    //       paddingLeft: "1rem",/* 16px */
    //       paddingRight: "1rem",/* 16px */
    //       gap: "8px",
    //       height: "40px",
    //     },
    //     ".btn-disabled": {
    //       opacity: ".4",
    //       pointerEvents: "none"
    //     },
    //     ".btn-primary": {
    //       background: colors["blue-400"],
    //       borderWidth: "1px",
    //       border: `1px solid ${colors["blue-500"]}`,
    //       color: colors["white"],
    //       borderRadius: "5px",
    //       "&:hover": {
    //         background: colors["blue-300"],
    //         transitionDuration: "300ms"
    //       },
    //       "&:active": {
    //         "--tw-ring-color": "rgb(63 131 248 / 1)",
    //         "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    //         "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    //         boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    //         transitionDuration: "100ms"
    //       },
    //     },
        
    //     ".btn-success": {
    //       background: colors["green-400"],
    //       borderWidth: "1px",
    //       border: `1px solid ${colors["green-500"]}`,
    //       color: colors["white"],
    //       borderRadius: "5px",
    //       "&:hover": {
    //         background: colors["green-300"],
    //         transitionDuration: "300ms"
    //       },


    //       "&:active": {
    //         "--tw-ring-color": "rgb(14 159 110 / 1)",
    //         "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    //         "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    //         boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    //         transitionDuration: "100ms"
    //       },

    //     }
      
    //   };

    //   addComponents(buttons);


    //   const inputs = {
    //       ".input": {
    //          height: "40px",
    //          borderRadius: "4px",
    //          padding: "8px"
    //       },
    //       ".input-standard": {
           
    //         border: `1px solid ${colors["blue-gray-300"]}`,
    //         "&:hover": {
            
    //           borderColor: colors["blue-gray-600"],
    //         },
    //         "&:focus": {
    //           "--tw-ring-color": colors["blue-gray-300"],
    //           borderColor: colors["blue-gray-600"],
    //           boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    //         }
    //       }

      
    //   }

    //   addComponents(inputs)
    // }),
  ],
};
