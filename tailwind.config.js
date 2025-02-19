tailwind.config = {
    theme:{
        gridTemplateColumns:{
            'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        },
        fontFamily:{
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"]
        },
    }
}
// Maintains the Youtube video aspect ratio
module.exports = {
    content: ['./**/*.html'],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'), // Add this line
    ],
  };
  