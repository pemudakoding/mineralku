module.exports = {
    content: [
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    ],
  theme: {
    extend: {
        colors: {
            'blue-default':'#6FB2D2',
            'blue-default-50': '#EFFFFD',
            'blue-default-100':'#56BBF1',
            'blue-default-200': '#48a8db',
            'black': '#3A4750'
        },
        boxShadow: {
            'primary': '0px 0px 100px #2a8cd9',
        }
    },
  },
  plugins: [],
}
