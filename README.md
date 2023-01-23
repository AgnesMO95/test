# Workshop React, Api og Github Page

## Workshop

Hva trenger man på forhånd: Node, npm/yarn, git, og Github bruker

### Web app

Vi skal lage et prosjekt hvor vi tar inn data fra et åpent Api, og deploye siden.
Vi skal ta inn mattilsynets Api og hente inn resturanter i Trondheim og deres total karakter.

- Naviger til ønsket sted å legge prosjektet, eventuelt lag en ny mappe hvor man kan legge workshops man er med på og naviger inn i mappen

  Eksempel: `mkdir restauranter`

- Kjør

  npm: `npm create vite@latest restaurantraitings -- --template react`

  yarn: `yarn create vite restaurantraitings --template react`

- Kjør opp appen med:

  - naviger inn i prosjektet: `cd restaurantraitings`
  - installer dependencies

    npm: `npm install`

    yarn: `yarn`

  - Åpne prosjektet i deres code editor

  - kjør appen i dev miljø og åpne localhost linken

    npm: `npm run dev`

    yarn: `yarn dev`

  - Slett innholdet i App.jsx og skriv en enkel hello world
  - Slett index.css og app.css, og slett importene i main.jsx og app.jsx
  - Kopier global.css fra

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

  yarn: `yarn add -D gh-pages`

- I package.json legg til:

  øverst i filen: => vil være Url'en til nettsiden

  ```json
    "homepage": "http://<ditt-github-navn>.github.io/<repo>,"
  ```

  I script taggen under "dev":

  ```json
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist",
  ```

- Kjør:

  npm: `npm run deploy`

  yarn: `yarn deploy`

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

1. Skriv fetch funksjon som henter data fra endepunktet "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim" og console logge daten
2. Gjøre det om til en funksjon og bruke useEffect til å hente dataen når siden lastes inn
3. Lagre datasettet i en useState

### Oppgave 2 - Vise frem dataen

1. Mappe gjennom dataen og hente ut navnet og totalkarakteren
2. Refaktorisere restaurant

## Redeploye appen

- Kjør:

  npm: `npm run deploy`

  yarn: `yarn deploy`

## Gjøres indivduelt

### Oppgave 3 - Sorter restaurantene på total karakteren

<details><summary>Hint</summary>

Bruk [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) funksjonen

</details>

<details><summary>LF</summary>

```Javascript
    {restaurants
        .sort((a, b) => a.total_karakter - b.total_karakter)
        .map((restaurant, index) => (
        <Restaurant key={index} restaurant={restaurant}></Restaurant>
        ))}
```

</details>

### Oppgave 4 - Filtrer dataen

#### Vanskelihetsgrad 1:

Filtrer ut restauranter med en type karakter

<details><summary>Hint</summary>

Bruk [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) funksjonen

</details>

<details><summary>LF</summary>

```Javascript
    .filter((restaurant) => restaurant.total_karakter === "3")
```

</details>

#### Vanskelihetsgrad 2:

Lag en filter meny som lar deg hente ut Restauranter med en eller flere karakterer. F.eks karakter 0, eller med karekter 0 og 1

### Oppgave 5 - Hent ut 5 første restaurantene

<details><summary>Hint</summary>

Bruk [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) funksjonen

</details>

<details><summary>LF</summary>

```Javascript
    restaurants.slice(0, 5)
```

</details>

### Oppgave 6 - Finn en random restaurant

<details><summary>Hint 1</summary>

Bruk [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) funksjonen, som gir et random tall mellom 0 og 1

</details>

<details><summary>Hint 2</summary>

Bruk lengden av restaurant listen som max verdi, for å få en verdi mellom 0 og lengden av restaurant listen

</details>

<details><summary>Hint 3</summary>

Bruk Math.floor() for å ikke få desimaler

</details>

<details><summary>Hint 3</summary>

Bruk verdien veriden for å hente ut restauranten på indeksen tilsvarende den randome veriden

</details>

<details><summary>LF</summary>

```Javascript

  function getRandomRestaurants(restaurants) {
    return restaurants[Math.floor(Math.random() * restaurants.length)];
  }

  console.log(getRandomRestaurants(restaurants));
```

</details>

Lag en knapp som henter den randome restauranten når man klikker på den

Vis restauranten hvis man har trykket på knappen

<details><summary>Hint </summary>

Lagre restauranten i en local variabel, og vis informasjonen du ønsker hvis knappen er klikket

</details>

<details><summary>LF</summary>

```Javascript

  const [randomRestaurant, setRandomRestaurant] = useState({});

  function getRandomRestaurant(restaurants) {
    setRandomRestaurant(
      restaurants[Math.floor(Math.random() * restaurants.length)]
    );
  }

    //i return
  <button
    className="random-button"
    onClick={() => getRandomRestaurant(restaurants)}
    >
        random restaurant
    </button>
    {randomRestaurant && (
        <>
            <h1>{randomRestaurant.navn}</h1>
        </>
    )}
```

</details>

### Oppgave 7 - Legg til mer styling
