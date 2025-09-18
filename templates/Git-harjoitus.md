# Komentorivi ja Git-harjoitus aloittelevalle opiskelijalle

## Komentorivin peruskomennot

### 1. Siirry kotihakemistoon
Aloitetaan siirtymällä hakemistoihin ja tutustumalla peruskomentoihin.

**Tehtävä:**
- Avaa **Komentokehote** (Windowsin komentokehote).
- Tarkista, missä hakemistossa olet kirjoittamalla komentoriviin:

    ```
    echo %cd%
    ```

- Siirry kotihakemistoon:

    ```
    cd %HOMEPATH%
    ```

- Tarkista hakemiston sisältö komennolla:

    ```
    dir
    ```

### 2. Luo uusi hakemisto ja siirry siihen
Harjoitellaan hakemiston luomista ja siihen siirtymistä.

**Tehtävä:**
- Luo uusi hakemisto nimeltä **harjoitus**:

    ```
    mkdir harjoitus
    ```

- Siirry tähän hakemistoon:

    ```
    cd harjoitus
    ```

- Tarkista, että olet oikeassa hakemistossa:

    ```
    echo %cd%
    ```

### 3. Luo tiedosto ja muokkaa sitä
Harjoitellaan tiedoston luomista ja sen sisällön tarkastelua.

**Tehtävä:**
- Luo uusi tiedosto nimeltä **testi.txt**:

    ```
    type nul > testi.txt
    ```

- Avaa tiedosto **Notepadilla**:

    ```
    notepad testi.txt
    ```

- Kirjoita tiedostoon jotain ja tallenna se. Sulje editori.
- Tarkista tiedoston sisältö:

    ```
    type testi.txt
    ```

---

## Git-ohjelman perusteet

### 4. Git-repositorion luominen
Aloitetaan gitin perusteista ja luodaan git-repositorio.

**Tehtävä:**
- Alusta git-repositorio hakemistossa:

    ```
    git init
    ```

- Tarkista gitin tila:

    ```
    git status
    ```

### 5. Tiedoston lisääminen ja commit
Lisätään tiedosto git-versionhallintaan ja tallennetaan muutos (commit).

**Tehtävä:**
- Lisää **testi.txt** gitin seurantaan:

    ```
    git add testi.txt
    ```

- Tee ensimmäinen commit:

    ```
    git commit -m "Ensimmäinen commit: lisätty testi.txt"
    ```

- Tarkista gitin tila:

    ```
    git status
    ```

### 6. Versionhallinnan historian tarkastelu
Tarkastellaan versionhallinnan historiaa.

**Tehtävä:**
- Katso commit-historia:

    ```
    git log
    ```

---

## GitHub-käyttöönottaminen

### 7. Yhdistä GitHub-repositorio
Opitaan yhdistämään paikallinen git-repositorio GitHubiin.

**Tehtävä:**
- Luo uusi repositorio GitHubissa.
- Lisää GitHub-repositorion etäosoite paikalliseen git-repositorioon (korvaa `URL` oikealla repositorion osoitteella):

    ```
    git remote add origin URL
    ```

### 8. Pushaa muutokset GitHubiin
Työnnetään (push) paikalliset muutokset GitHubiin.

**Tehtävä:**
- Lähetä (push) muutokset GitHubiin:

    ```
    git push -u origin master
    ```

---

## Uuden projektin kloonaaminen ja muutosten hakeminen

### 9. Git-repositorion kloonaaminen
Opitaan kloonaamaan (kopioimaan) etärepositorio paikalliseksi.

**Tehtävä:**
- Kloonaa GitHubissa oleva repositorio paikalliseksi kopioksi (korvaa `URL` oikealla repositorion osoitteella):

    ```
    git clone URL
    ```

- Siirry kloonattuun hakemistoon:

    ```
    cd hakemiston_nimi
    ```

- Tarkista hakemiston sisältö:

    ```
    dir
    ```

### 10. Muutosten hakeminen (git pull)
Jos joku muu on tehnyt muutoksia etärepositorioosi, voit hakea ne `git pull` -komennolla.

**Tehtävä:**
- Hae etärepositoriosta kaikki uudet muutokset paikalliseen repositorioosi:

    ```
    git pull origin master
    ```

- Tarkista, mitä muutoksia on tullut:

    ```
    git log
    ```

---

## Loppuyhteenveto

Tässä harjoituksessa opiskelija on oppinut:
- Komentorivin peruskäytön Windowsissa (hakemistoon siirtyminen, tiedostojen luominen ja muokkaaminen).
- Git-versionhallinnan perusteet (git init, git add, git commit, git log, git clone, git pull).
- Yhdistämään paikallisen git-repositorion GitHubiin ja tekemään muutoksia GitHubissa (git push).

Näiden taitojen avulla opiskelija voi hallita projekteja versionhallinnan avulla sekä tehdä yhteistyötä GitHubin kautta.
