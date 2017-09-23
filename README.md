# ReactReduxAndMaterialUI-StarterKit
Testing a new JS dev env from Cory House's Pluralsight tutorial, but adding material-UI and configuring the structure a bit differently, to better suit my needs


## Purpose
Develop my skills and in the end, acquire not only the knowledge but also a fine starter kit for any future projects I'll start using react and redux.

## Steps:
1. Started with a very simple 'empty' git repo
2. Added an editor config file for my chosen editor (vs code)
3. Added package.json
4. Set up some scripts to help automate running the entire process
5. Set up linting rules in a eslint config json file and further extended the npm scripts to include linting as well
6. Added the index.js file as an entry point to the app and actually ran the app on express
7. a. Added webpack and config file
  b. Moved linting rules to the config file
8. Added React and babel (and babel config in the package json) and wrote a component
9. Added Hot Reloading capabilites and configs
10. Added Typescript and with it a tsconfig file
11. Added Material UI and rendered my first mui component 
12. Added Redux to the app and rendered my first redux connected component 
13. Added testing capabilites using Jest
14. Added webpack production config and also other loaders for styles/woffs and what not. Included npm scripts for build as well.
15. Split main js to main and vendor files and added hashing for cache and cache breaking
16. Added instalation scripts and packages required for that

## Help came from and thanks go to
- Cory House with his Pluralsight courses: -Building a Javascript Development Environment and - Building Applications with React and Redux in ES6
- Cory House with his pluralsight-redux-starter kit on git-hub at https://github.com/coryhouse/pluralsight-redux-starter
- Cory House with his react-slingshot advanced starter kit on git-hub at https://github.com/coryhouse/react-slingshot
- Everyone else on github and stackoverflow coming with solutions to problems that I found throughout the development process
- Dan Abramov for offering great support and documentation for the redux library

## Get Started
1. **Initial Machine Setup**. First time running the starter kit? Then complete the [Initial Machine Setup](https://github.com/coryhouse/react-slingshot#initial-machine-setup).
2. **Clone the project**. `git clone https://github.com/AlexSerbanG/ReactReduxAndTypescript-StarterKit-UI`.
3. **Run the setup script**. `npm run setup`
4. **Run the example app**. `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
5. **Review the example app.** --Unavailable atm - Ignore this paragraph --This starter kit includes a working example app that calculates fuel savings. Note how all source code is placed under /src. Tests are placed alongside the file under test. The final built app is placed under /dist. These are the files you run in production.
6. **Delete the example app files.** Once you're comfortable with how the example app works, you can [delete those files and begin creating your own app](https://github.com/coryhouse/react-slingshot/blob/master/docs/FAQ.md#i-just-want-an-empty-starter-kit). 
7. **Having issues?** See "Having Issues?" below.



## Having Issues? Try these things first.
1. Make sure you ran all steps in [Get started](https://github.com/coryhouse/react-slingshot/blob/master/README.md#get-started) including the [initial machine setup](https://github.com/coryhouse/react-slingshot#initial-machine-setup).
2. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
3. Install the latest version of Node. Node 6 has issues on some Windows machines.
4. Make sure files with names that begin with a dot (.babelrc, .editorconfig) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
5. Don't run the project from a symbolic link. It may cause issues with file watches.
6. Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in this project.
7. Make sure you don't have NODE_ENV set to production on your machine. If you do then the [development dependencies won't be installed](https://github.com/coryhouse/react-slingshot/issues/400#issuecomment-290497767). Here's [how to check](http://stackoverflow.com/a/27939821/26180).
8. Tip: Things to check if you get an `npm run lint` error or build error:

    * If ESW found an error or warning in your project (e.g. console statement or a missing semi-colon), the lint thread will exit with `Exit status 1`. To fix: 

      1. Change the `npm run lint` script to `"esw webpack.config.* src tools; exit 0"`
      1. Change the `npm run lint:watch` script to `"esw webpack.config.* src tools --watch; exit 0"`

      > Note: Adding `exit 0` will allow the npm scripts to ignore the status 1 and allow ESW to print all warnings and errors.
  
    * Ensure the `eslint`/`esw` globally installed version matches the version used in the project. This will ensure the `esw` keyword is resolved.

## Known Issues
None, so far