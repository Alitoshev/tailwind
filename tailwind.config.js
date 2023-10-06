/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-2": "#F3F3F3",
        "bg-3": "#FDB813",
        "bg-4": "#E7E6E4",
        "bg-5": "#FFFFFF",
        "bg-1-1": "#4936D4",
        "bg-1-2": "#6835D4",
        "bg-1-b": "#4D6AE4",
        "bg-1-b-2-1": "#FFC543",
        "bg-1-b-2-2": "#FF8412",
        "bg-2-1": "#4D6AE4",
        "bg-2-2": "#1E1E2E",
      },
    },
  },
  plugins: [],
};
