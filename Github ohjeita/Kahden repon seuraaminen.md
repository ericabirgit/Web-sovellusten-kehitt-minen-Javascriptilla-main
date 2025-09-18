# Tyypillinen tilanne koodarille on, että haluat hakea dataa yhdestä reposta ja sitten puskea tekemäsi muutokset toiseen (omaan) repoosi. Tätä varten gittiin tulee lisätä toinen remote (eli repo).

Vaihtoehto 1: Komentorivillä (kopioi ja aja nämä omassa repossasi)

# 1. Tarkista nykyiset remotet

git remote -v

# 2. Nimeä alkuperäinen repo upstreamiksi

git remote rename origin upstream

# 3. Lisää oma repo originiksi

git remote add origin https://github.com/oma-kayttaja/uusi-repo.git

# 4. Hae päivitykset alkuperäisestä

git fetch upstream

# 5. Yhdistä upstream/main omaan mainiin

git merge upstream/main

# 6. Push omat muutokset omaan repoosi

git push origin main

# Vaihtoehto 2: VSCode Version Control -paneelissa

Avaa Source Control -paneeli
– Sivupalkissa on Ympyrän sisällä oleva haara-kuvake (Source Control / Version Control).
– Klikkaa sitä.

Remoten hallinta
– Yläpalkista (tai alareunasta) löydät … (More Actions).
– Valitse:
Remote → Manage Remotes.
– Näet listan nykyisistä remoteista.

Jos siellä on vain origin → paina kynäikonia ja nimeä se upstream.

Lisää uusi remote nimellä origin ja liitä siihen oman GitHub-reposi URL.

Päivitysten hakeminen upstreamista
– Source Control -paneelissa paina … → Pull, Push → Fetch from… → valitse upstream.
– Saat uudet commitit alkuperäisestä reposta.
– Yhdistä nämä haaraasi valitsemalla Merge Branch… ja valitse upstream/main.

Omien muutosten push
– Tee muutoksia tiedostoihin normaalisti.
– Source Control -paneelissa kirjoita commit-viesti ja paina ✔️ (Commit).
– Sen jälkeen paina … → Push to… → valitse origin.
– Nyt muutokset menevät omaan GitHub-repoosi.

# Tästä eteenpäin:

Pull/Fetch upstreamista kun haluat seurata alkuperäistä projektia.

Push origin kun haluat viedä omat muutoksesi omaan repoosi.
