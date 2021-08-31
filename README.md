Pour installer : 
Modifier la clé Zendesk (account_key) dans App.js
Npm install
Npm start

- MEP de redux (c'est une première pour moi :D)
- Affichage des messages depuis le store.
- Reset du chat et cloture de la connection Zendesk au click du bouton fermer.
- Ajout d'une animation lumineuse du header et modification de style
- Integration des envois de fichier (via le sdk).
- Integration du rating du chat + commentaire (via le sdk).

Reste à faire : 

- Integration de l'authentification du visiteur (via le sdk).
- Integration de bulles automatiques quand on envoie des liens youtube (un peu comme sur messenger).
- Meilleur état initial (animé?).


Synopsys de l'application :

1) Contexte : 
L'objectif de l'application est de creer une fenêtre de chat intégrable a un site web professionnel pour permettre au client de pouvoir discuter avec ses prospects. Elle utilisera le backend de Zendesk (Logiciel de support client) pour pouvoir répondre aux visiteurs et consigner les informations (qualifier des leads en terme commercial.)

2) Objectifs :
Avoir une fênetre de chat soignée qui disposera de toutes les fonctionnalités attendues : 
- Envoyer des messages depuis l'application.
- Recevoir des messages depuis un agent utilisant Zendesk.
- Pouvoir informer le visiteur des divers evenements du chat (Position dans la queue, un agent qui rejoint le chat, ...).
- L'utilisateur doit pouvoir envoyer des fichiers (Informations personnelles, images ...)
- Permettre au visiteur de s'identifier pour qu'il puisse reprendre ses conversations passées.
- Permettre au visiteur de disposer de l'historique du chat par mail.

3) Technologies : 
- Frontend à base de React et redux. (+ css)
- Backend Zendesk

