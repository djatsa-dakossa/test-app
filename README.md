# test-app

Documentation pour l'appliaction de test de Beta Remit.

Tout d'abord, il est important de noter que routes les interfaces ne seront pas disponibles si l'on n'est pas authentifié.
Les données de l'API ne sont pas mockées.
Il est important de lancer l'application <a href="https://github.com/djatsa-dakossa/test-app-backend.git">Test app backend</a> cette application sera servie sur le port 3003.


Dans cette documentation, je vais vous présenter l'application:


<strong>App setup:</strong>


Après avoir cloné le projet et installé les dépendances, il est important de pouvoir ajuster certains points, pour pouvoir faciliter le fonctionnement.

Dans le fichier <strong>/src/components/config/axios/AxiosConfig.ts</strong> modifier la const host par <strong>http://votreAddressIp:3003</strong>
Ensuite lancer le projet.

<strong>Passons maintenant aux vues:</strong>


<strong>Welcome page</strong>


![](/src/components/assets/welcome.jpeg)

Lorsque vous lancerez l'application pour vous verez affiché cette page. Après avoir cliqué sur le bouton Get started, vous serez redirigé vers la vue suivante.


<strong>Vue de choix de login ou register</strong>


![](/src/components/assets/login.jpeg)

Sur cette vue, vous aurez le choix de vous authentifier ou de créer votre compte.


<strong>Vue de création de compte</strong>


![](/src/components/assets/register.jpeg)

Sur cette vue, vous entrez vos informations pour créer votre compte.


<strong>Vue de login</strong>


![](/src/components/assets/login1.jpeg)

Sur cette vue, vous entrez vos informations pour vous connecter à votre compte.


<strong>Vue d'acceuil</strong>


![](/src/components/assets/home.jpeg)

Après vous etre connecté à votre compte, vous serez redirigé vers cette vue d'acceuil, où seront d'ailleurs listés tous vos cahiers de notes que vous allez créer.

Par la suite si vous voulez ajouter un cahier de note, cliquer sur le bouton +.

![](/src/components/assets/create_notebook.jpeg)

Ensuite, entrer les données et validez.

Si vous souhaitez modifier, ou supprimer un cahier de notes, cliquer sur les ... ensuite, choisissez une option.


![](/src/components/assets/home_menu.jpeg)

Si vous voulez supprimer, confirmer la suppression

![](/src/components/assets/confirm_deletion.jpeg)

Si vous voulez modifier, entrer les nouvelles données et valider

![](/src/components/assets/confirm_deletion.jpeg)


Cliquer sur le bouton "Read" pour afficher les notes d'un cahier.

![](/src/components/assets/confirm_deletion.jpeg)


<strong>Page de notes </strong>


![](/src/components/assets/notes_view.jpeg)

cliquer sur le boutton + pour ajouter une note

![](/src/components/assets/add_note.jpeg)


cliquer sur le boutton ... pour modifier ou supprimer une note

![](/src/components/assets/noteview_menu.jpeg).

Cliquer enfin sur <strong>Read pour lire une note</strong>


<strong>Page de lecture </strong>


![](/src/components/assets/read_note.jpeg)


Dans les champs de recherche, vous pourrez y entrer du text pout éffectuer votre recherche.
