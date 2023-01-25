# Workshop React, Api og Github Page

## Workshop

Hva trenger man på forhånd: Node, npm/yarn, git, og Github bruker

### Web app

Hvor mange av dere har deployet en nettside før? Er det noen som har sendt localhost linken til en annen. De fleste av dere har sikkert jobbet med skoleprosjekten, og kjørt det lokalt men ikke tatt det lenger. I dag skal vi lære hvordan man kan gjøre en nettside synlige for andre, med andre ord deploye den. Sånn at når mamma lurer på hva dere driver med på studie så kan dere sende henne en link til prosjektet deres, eller hva dere driver til andre

Applikasjonen vi skal deploye er en REACT applikasjon som henter inn restauranter i trondheim fra et åpent api mattilsynets tilbyr. Jeg tenker vi skal hente ut restaurantene og karakteren mattilsynet, så får dere en liten guide over dere trygt kan gå ut å spise i trondheim og hvor dere kanskje burde unngå.

Da starter vi med å åpne terminalen og navigere oss til en mappe der vi ønsker å legge prosjektet. Man kan også eventuelt lage en ny mappe, jeg for eksempel vil gjerne lage en mappe som heter workshops hvor jeg kan legge prosjektet så da skriver jeg mkdir som betyr lag en mappe:

Eksempel: `mkdir workshops`

Navigerer så inn i mappen `cd workshops`

Så skal vi opprette prosjeketet. Dette gjør vi ved bruke et utviklingsmiljø som heter vite, det forenkler rett og slett utviklingen av et prosjekt. Mange har kanskje opprettet et prosjekt med create react app for å sette opp en react app er kanskje kjent for noen, vite gjør det samme, men er raskere.

- Kjør

  npm: `npm create vite@latest`

Får da valg om hva prosjektet skal hete
Forslag?

Hvilket rammeverk - React

Valg om typescript eller javascript, vil anbefale dere å bruke typescript til vanlig da det gjør debugging enklere, men for enkelhetensskyld tar vi javascript i dag.

- Kjør opp appen med:

  - naviger inn i prosjektet: `cd restaurantraitings`
  - installer dependencies

    npm: `npm install`

  - Åpne prosjektet i deres code editor. I vs code kan man skrive code ., så vil prosjektet åpnes i vs code i den mappen man står i. Ellrs så kan man åpne prosjektet gjennom code editoren ved å trykke på file, open folder også finne frem til prosjektet.

#### Pause pass på at alle er samme sted

- kjør deretter appen i dev miljø fra terminalen i code editoren og åpne localhost linken

  npm: `npm run dev`

- Slett innholdet i App.jsx og skriv en enkel hello world
- Og se at det skjer endringer

Før vi går videre så skal vi hente inn litt styling og slette den eksisterenede
CSS filer er et språk man bruker til å style nettsider

- Slett index.css og slett importene i main.jsx
- slett innholdet i app.css og kopier innholdet i app.css fra bredvid.no/ivdagene

### Push appen med git

Neste steg er å initiere prosjektet med git og pushe det til github. Git er et versjonskontroll system som lar deg administrere og holde styr på kildekodehistorikken din. Github er en skybasert verstjeneste som lar deg administrere git repositories. Git kan man si er et konsept, her er en fin sammenligning konseptet mail, mens github kan sammenlignes med gmail.

- Vi initiserer prosjektet ved å skrive i terminalen:

  `git init`

- ved å skrive `git status` kan vi se alle nye filer og alle filene som er endret

- Legg til alle filene (er mulig å velge hvilke man skal legge til også) Git add legger til nye eller endrede filer til det som kalles staging area i git og gjør dem klare til å commites. Skriver da

  `git add .`

  for å legge til alle filer. Man kan også velge enkelte filer, men nå ønsker vi å legge til alt .

- Commit endringene

  `git commit -m "initial commit"`

- Gå til github og lag repo, kan kalle repoet det samme som prosjektet (navnet på repoet vil også være med i Url'en når vi deployer med Github pages)
- Bruk https og ikke ssh
- Vi ønsker nå å linke det lokalet prosjektet vårt på pcen opp mot github. Vi Kopier linken og gå tilbake til terminalen og skriv inn:

  `git remote add origin <link>`

- Vi må så sette hovedbranchen til main, vi ønsker så å pushe filene vi har lagt til til github

  ```
    git branch -M main
    git push -u origin main
  ```

- Her kan det være at noen får problemer hvis dere ikke har laget dere en personlig token. Hvis det er noen som har problemer nå så kommer Torjus og Martin og hjelper dere. https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
- Sjekk at alle er med og får til å koble seg opp mot github
- Oppdater git og se at koden ligger der

#### Pause sjekke at alle er med!

### Github pages

(kopier reponavnet)
Neste steg er å gjøre klar til å deploye appen med github pages, her er det endel steg vi som må gjennom, før vi kan leke oss med å hente data og lage litt funksjonalitet

- Installer gh-pages i prosjeket

  npm: `npm install gh-pages`

- I vite.config.js legg til:

  `base "/<repo>/"`

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

- Legg til endringer, commit og push

  ```
    git add .
    git commit -m "configure gh-pages"
    git push
  ```

- Kjør:

  npm: `npm run deploy`

- Gå til github, man kan nå se gh-pages som en egen branch

- Sjekk at appen er deployet, nå mulig å sende linken til andre og de vil få opp det samme
- Kopier lenken som dere skrev i homepage, gå til: http://<ditt-github-navn>.github.io/<repo>
  (kan være litt treg)

## Gjøres sammen

Da skal vi gjøre noen oppgaver sammen for å komme igang og hente ut noe data

### Oppgave 1 - Hente inn data fra apiet

1. Skriv fetch funksjon som henter data fra endepunktet "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim" og console logge daten, vise at man får ut dataen i consolen i nettleseren

```Javascript
    fetch(
      "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim"
    )
      .then((response) => response.json()) //henter ut responsen i json format
      .then((result) => console.log(result)); //så vil vi ha ut resultatet fra responen, i første omgang så console logger vi denne for å se at vi får hentet ut data
      .then((error) => console.error(error)); //Også i tilfelle vi får en error så console logger vi denne
```

Viser så i console i nettleseren at vi får hentet ut dataen

2. Gjøre det om til en funksjon og bruke useEffect til å hente dataen når siden lastes inn

```Javascript
    const fetchRestaurants = () => {
    fetch(
      "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim"
    )
      .then((response) => response.json())
      .then((result) => setRestaurants(result.entries))
      .then((error) => console.error("error", error))
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);
```

3. For å få tak i datasettet og kunne manipulere det så må vi lagre det på en måte - Lagre datasettet i en useState (husk å bruke set usestate i fetch data)

```Javascript
    const [resturants, setRestaurants] = useState();
```

### Oppgave 2 - Vise frem dataen

Vi ser nå at vi får hentet dataen, men nå vil vi gjerne få vist den på nettsiden!

1. Mappe gjennom dataen og hente ut navnet og totalkarakteren => alle er kanskje kjent med smiley systemet til mattilsynet, her tilsvarer 0 og 1 smiley fjes, mens 2 er strek munn og 3 er sur munn.

Først skrive inn uten index => få error også fortelle at hvert element må ha en unik key, legger derfor til index, selvom man egentlig burde bruke id

```Javascript
    <div className="App">
        <h1>Restauranter i Trondheim</h1>
        <div className="restaurants-wrapper">
            {resturants &&
                resturants.map((restaurant, index) => (
                <div key={index} className="restaurant">
                    <h3>{restaurant.navn}</h3>
                    <p>{restaurant.total_karakter}</p>
                </div>
                ))}
        </div>
    </div>
```

- pushe endringene vi har gjort :

  ```
    git add .
    git commit -m "fetch restaurantsdata"
    git push
  ```

## Redeploye appen

Vis oppdateringen på local host, men at det ikke er noe endringer der vi har deployet siden så det må vi gjøre

- Kjør:

  npm: `npm run deploy`

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
