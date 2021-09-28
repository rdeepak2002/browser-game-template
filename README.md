## How to Create the Project

Useful guide: https://ccoenraets.github.io/es6-tutorial/setup-babel/

```shell
mkdir flappy-bird-browser-game
cd flappy-bird-browser-game

npm init

npm install babel-cli babel-core --save-dev
npm install babel-preset-es2015 --save-dev
npm install http-server --save-dev
```

Add the following scripts to package.json:

```shell
"scripts": {
    "babel": "babel --presets es2015 js/main.js -o build/main.bundle.js",
    "start": "http-server"
},
```

Create a new file called 'main.js' within a folder called 'js'. All your JavaScript code can go here.

Also create an empty folder called 'build'. This is where the compiled JavaScript will go. In order for the file to be added to git, create a .gitignore file within the 'build' folder with the following content:

```
!.gitignore
```

Create a new file called 'index.html' and refer to the compiled JavaScript file:

```
<script src="build/main.bundle.js"></script>
```

## Build and Run

```shell
npm run babel
npm start
```

## Create a .gitignore File

```shell
wget https://raw.githubusercontent.com/babel/babel/main/.gitignore
```

## Push the code to GitHub

Login to GitHub: https://stackoverflow.com/questions/68775869/support-for-password-authentication-was-removed-please-use-a-personal-access-to

Type the generated token as the password

```shell
git init
git add .
git commit -m "init commit"
git branch -M main
git remote add origin https://github.com/username/repo_name.git
git push -u origin main
```
