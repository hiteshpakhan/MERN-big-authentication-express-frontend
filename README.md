* to create this blog website we have use the following youtube video

        https://www.youtube.com/watch?v=8IN5AfbI5qM&t=120s

* to create this frontend we have use following commands

        npm create vite@latest my-blog-frontend -- --template react
        
* to install tailwind css

        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p

* then we have past following code inside tailwind.config.js file

        /** @type {import('tailwindcss').Config} */
        export default {
          content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        }

* then we have put the following code inside the index.css

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

* to run the project we can run by 

        npm run dev

* then i have installed following packages inside the application

        npm install react-icons --save
        npm i react-router-dom
        npm install react-hot-toast

* url for the server 

        https://blogwebsite-e9qb.onrender.com/