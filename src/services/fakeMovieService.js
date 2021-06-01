import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "CHUTIYAP",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
/*
Branch 'master' set up to track remote branch 'master' from 'origin'.
PS C:\Users\Nabeel Ali\vidly> git add . 
PS C:\Users\Nabeel Ali\vidly> git commit -m "SECONDCOMIT"
[testbranch 1b6093f] SECONDCOMIT
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\Nabeel Ali\vidly> git push origin testbranch

















Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\Nabeel Ali\vidly> git init
Initialized empty Git repository in C:/Users/Nabeel Ali/vidly/.git/
PS C:\Users\Nabeel Ali\vidly> git add .
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in README.md.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in public/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in public/manifest.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in public/robots.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/App.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/App.test.js.
The file will have its original line endings in your working directory
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/index.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/reportWebVitals.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/setupTests.js.
The file will have its original line endings in your working directory
PS C:\Users\Nabeel Ali\vidly> git commit -m "firstcommit" 

*** Please tell me who you are.

Run

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'Nabeel Ali@LAPTOP-QOGBP8JJ.(none)')
PS C:\Users\Nabeel Ali\vidly> git config --global user.email "nabeel.aali2909@gmail.com"
PS C:\Users\Nabeel Ali\vidly>  git config --global user.name "SyedNabeel12" 
PS C:\Users\Nabeel Ali\vidly> git commit -m "firstcommit"
[master (root-commit) 5517be8] firstcommit
 21 files changed, 16838 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 public/favicon.ico
 create mode 100644 public/index.html
 create mode 100644 public/logo192.png
 create mode 100644 public/logo512.png
 create mode 100644 public/manifest.json
 create mode 100644 public/robots.txt
 create mode 100644 src/App.css
 create mode 100644 src/App.js
 create mode 100644 src/App.test.js
 create mode 100644 src/index.js
 create mode 100644 src/logo.svg
 create mode 100644 src/reportWebVitals.js
 create mode 100644 src/services/fakeGenreService.js
 create mode 100644 src/services/fakeMovieService.js
 create mode 100644 src/setupTests.js
PS C:\Users\Nabeel Ali\vidly> git remote add origin https://github.com/SyedNabeelAli12/ReactTestApp.git
PS C:\Users\Nabeel Ali\vidly> git push -u origin master
Logon failed, use ctrl+c to cancel basic credential prompt.
Enumerating objects: 27, done.
Compressing objects: 100% (26/26), done.
Writing objects: 100% (27/27), 187.37 KiB | 8.92 MiB/s, done.
To https://github.com/SyedNabeelAli12/ReactTestApp.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
PS C:\Users\Nabeel Ali\vidly> git add . 
PS C:\Users\Nabeel Ali\vidly> git commit -m "SECONDCOMIT"
[testbranch 1b6093f] SECONDCOMIT
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\Nabeel Ali\vidly> git push origin testbranch
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 424 bytes | 424.00 KiB/s, done.
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
remote:
remote: Create a pull request for 'testbranch' on GitHub by visiting:
remote:      https://github.com/SyedNabeelAli12/ReactTestApp/pull/new/testbranch
remote:
To https://github.com/SyedNabeelAli12/ReactTestApp.git
 * [new branch]      testbranch -> testbranch
PS C:\Users\Nabeel Ali\vidly> npm start
Compiled successfully!

You can now view vidly in the browser.

  Local:            http://localhost:3000        
  On Your Network:  http://192.168.18.67:3000    

Note that the development build is not optimized.
To create a production build, use npm run build. 

*/