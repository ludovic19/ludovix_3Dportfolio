# portfolio 3D

## objectifs

- renouveler mon portfolio avec un code plus technique qui soit un peu une vitrine de ce que j'ai appris, un projet 
- suivre un tuto qui m'apprenne à intégrer la 3D
- connaitre le vocabulaire de la 3D


## ce que j'ai appris

- ECRIRE UN README
 https://www.freecodecamp.org/french/news/comment-ecrire-un-bon-fichier-readme/#:~:text=Qu'est%2Dce%20qu',expliquant%20comment%20utiliser%20le%20projet.

- no-undef rule (node)
  https://eslint.org/docs/latest/rules/no-undef#nodejs

## problemes et questions rencontrés

- Dès la mise en plce de l'infrastructure je rencontre des soucis de config de tailwind et 


## Commandes GIT

créer son repo
git init => crée un  fichier .git caché à la racine (permet de créer le lien avec git)
git add nom_du_fichier (git add . pour tous les fichiers) => rassemble le ou les fichiers à envoyer en distance
git commit -m"message descriptif  => "titre" de l'envoi pour savoir ce que chaque fichier fait (normalement une feature ou une fonction)
git remote add origin url (à copier depuis le repo distant) créer la connexxion avec repo distant (commande à faire que pour l'initialisation)
git remmote -v => verifier la connexion 
git push -u origin master (ou main suivant version) => envoie sur repo distant (-u pour user)

----------------------------------------------------

git clone url_du_repo pour récupérer un repo existant
git pull pour recupérer les modifications depuis git => conflits
git branch nom creer une branche
git branch -av => verifier etat des branches
git checkout nom => changer de branche
git checkout -b nom => créer branche et passer dessus
+ nom de la branch = feature (about us, navbar ...)

----------------MERGE-----------------

1- sur branche de retard (master pour mise en prod)
2- git merge branche à récupérer
3- git add . + commit + push

SECURITE avant merge

git stash (mémorise les modif en mémoire tampon)
git checkout branche (pour switcher)
git stash pop => ajoute les changements en mémoire sur la branche


## commande bash
mv nom => déplacer fichier vers nom 