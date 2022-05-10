const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
            'blue-default':'#6FB2D2',
            'blue-default-50': '#EFFFFD',
            'blue-default-100':'#56BBF1',
            'blue-default-200': '#48a8db',
            'black': '#3A4750'
        },
        boxShadow: {
            'primary': '0px 20px 60px -13px #2a8cd9',
        }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
