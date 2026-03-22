[![Coverage Status](https://coveralls.io/repos/github/Nuutimin/exercise8-ci/badge.svg?branch=main)](https://coveralls.io/github/Nuutimin/exercise8-ci?branch=main)

# exercise8-ci

Harjoitustehtävä VIII — JavaScript-apufunktioiden testaus ja jatkuva integraatio (CI) GitHub Actionsin ja Coverallsin avulla.

## Projektin kuvaus

Projekti sisältää kokoelman JavaScript-apufunktioita (`src/`), joiden toiminta testataan automaattisesti. Osaan funktioista on tarkoituksella jätetty tunnettuja bugeja, jotka on dokumentoitu testeissä.

Testit ajetaan automaattisesti GitHub Actionsin avulla jokaisen `push`-tapahtuman yhteydessä, ja testikattavuusraportti lähetetään Coverallsiin.

## Testatut funktiot

| Kategoria | Funktiot |
|---|---|
| Math | `add`, `divide`, `ceil` |
| Array | `chunk`, `compact`, `difference`, `drop`, `filter`, `map`, `slice` |
| String | `capitalize`, `endsWith`, `upperFirst`, `words` |
| Type | `isBoolean`, `isDate`, `isObject`, `isObjectLike`, `isArrayLike`, `eq`, `defaultTo` |
| Collection | `reduce`, `every`, `clamp`, `at`, `countBy` |

## Tunnetut bugit

| Issue | Funktio | Kuvaus |
|---|---|---|
| #1 | `divide.js` | Palauttaa aina 1 — laskee `divisor / divisor` eikä `dividend / divisor` |
| #2 | `compact.js` | Menettää ensimmäisen truthy-arvon — `resIndex` alkaa arvosta `-1` eikä `0` |
| #3 | `chunk.js` | Jää ikuiseen silmukkaan — `resIndex++` puuttuu while-silmukasta |
| #4 | `clamp.js` | Palauttaa väärän raja-arvon — vertailuoperaattorit ovat käänteisiä |
| #5 | `countBy.js` | Laskee yhdellä liian vähän — avaimet alustetaan arvoon `0` eikä `1` |

## Teknologiat

- **[Vitest](https://vitest.dev/)** — testikehys
- **[@vitest/coverage-v8](https://vitest.dev/guide/coverage)** — testikattavuus
- **[GitHub Actions](https://docs.github.com/en/actions)** — CI-pipeline
- **[Coveralls](https://coveralls.io/)** — kattavuusraportointi
- **[Claude](https://claude.ai/)** — tuutorointi ja koodausapu
## Käyttö

Asenna riippuvuudet:

```bash
npm install
```

Aja testit:

```bash
npm test
```

Aja testit kattavuusraportin kanssa:

```bash
npm run coverage
```

## CI-pipeline

GitHub Actions ajaa `.github/workflows/test.yml`-tiedoston mukaisen pipelinen jokaisella `push`-tapahtumalla:

1. Checkout — ladataan repositorion koodi
2. Node.js 20 — asennetaan Node.js-ympäristö
3. `npm install` — asennetaan riippuvuudet
4. `npm run coverage` — ajetaan testit ja generoidaan kattavuusraportti
5. Coveralls — lähetetään kattavuusdata Coverallsiin

## Projektin rakenne

```
exercise8-ci/
├── .github/
│   └── workflows/
│       └── test.yml       # GitHub Actions CI-pipeline
├── src/                   # Apufunktioiden lähdekoodit
├── test/
│   ├── array.test.js      # Taulukko-funktioiden testit
│   ├── collection.test.js # Kokoelmafunktioiden testit
│   ├── math.test.js       # Matemaattisten funktioiden testit
│   ├── string.test.js     # Merkkijonofunktioiden testit
│   └── type.test.js       # Tyypintarkistusfunktioiden testit
├── package.json
└── README.md
```
