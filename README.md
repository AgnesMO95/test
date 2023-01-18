# Workshop React, Api og Github Page

## Workshop

Hva trenger man på forhånd? Node, npm/yarn, git, og Github bruker

### Web app

Vi skal lage et prosjekt hvor vi tar inn data fra et åpent Api, og deploye siden.
Vi skal ta inn mattilsynets Api og hente inn resturanter i Trondheim og deres total karakter.

- Gå til en mappe du ønsker å legge prosjektet i og lag en tom mappe

  Eksempel: `mkdir restauranter`

- Kjør

  npm: `npm create vite@latest restaurantraitings -- --template react`

  yarn: `yarn create vite restaurantraitings --template react`

- Kjør opp appen med:

  - cd restaurantraitings
  - installer dependencies

    npm: `npm install`

    yarn: `yarn`

  - kjør appen i dev miljø og åpne localhost linken

    npm: `npm run dev`

    yarn: `yarn dev`

  - Slett innholdet i App.jsx og skriv en enkel hello world

### Push appen med git

- Initier git med:

  `git init`

- Legg til alle filene (er mulig å velge hvilke man skal legge til også)

  `git add .`

- Commit endringene

  `git commit -m "initial commit"`

- Gå til github og lag repo, kan kalle repoet det samme som prosjektet (navnet på repoet vil også være med i Url'en når vi deployer med Github pages)
- Kopier linken og gå tilbake til terminalen og skriv inn:

  `git remote add origin <link>`

- Set hovedbranchen til main og push comitten til github

  ```
    git branch -M main
    git push -u origin main
  ```

- Oppdater git og se at koden ligger der

### Github pages

- I vite.config.js legg til:

  `base "/<repo>/"`

- Installer dependencies (-save-dev/-D betyr at det er en development dependency som hjelper til med utviklingen)

  npm: `npm install gh-pages --save-dev`

  yarn. `yarn add -D gh-pages`

- I package.json legg til:

  øverst i filen: => vil være Url'en til nettsiden

  ```json
    "homepage": "http://<ditt-github-navn>.github.io/<repo>"
  ```

  I script taggen under "dev":

  ```json
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist",
  ```

- Legg til endringer, commit og push

  ```
    git add .
    git commit -m "setup gh-pages"
    git push
  ```

- Gå til github, man kan nå se gh-pages som en egen branch

- Sjekk at appen er deployet
- gå til: http://<ditt-github-navn>.github.io/<repo>

## Gjøres sammen

### Oppgave 1 - Hente inn data fra apiet

### Oppgave 2 - Vise frem dataen

Hent ut navnet på restaurantene og total karakteren

## Redeploye appen

## Gjøres indivduelt

### Oppgave 3 - Sorter restaurantene på total karakteren

### Oppgave 4 - Filtrer dataen

Filtrer ut restauranter kun med rating 0

### Oppgave 5 - Bruk slice

### Oppgave 6 - Finn random restaurant

### Oppgave 7 - Legg til mer styling

Forslag ...
