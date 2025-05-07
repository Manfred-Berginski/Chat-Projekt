## Chat-Projekt mit Node.js, Express und Lowdb

# Projektbeschreibung
In diesem Projekt wurde ein einfacher Chat mit Node.js, Express, Socket.io und Lowdb umgesetzt. Benutzer können Nachrichten in Echtzeit senden und empfangen. Die Nachrichten werden lokal in einer JSON-Datei (db.json) gespeichert. Das Frontend besteht aus HTML, CSS und JavaScript.

# Features
Live-Chat über WebSockets

Speicherung aller Chatnachrichten in db.json (Lowdb)

Anzeige des bisherigen Chatverlaufs beim Seitenladen

Einfaches, modernes Layout

Unterstützt Emojis im Chattext

# Verwendete Technologien
Node.js – Serverlaufzeitumgebung

Express – Webframework für Node.js

Socket.io – Echtzeit-Kommunikation zwischen Client und Server

Lowdb – Lokale JSON-Datenbank

HTML/CSS/JS – Frontend

# Start des Projekts
Repository klonen oder Projektordner öffnen

Terminal öffnen und ins Projektverzeichnis wechseln

Abhängigkeiten installieren:

npm install
Projekt starten:

node server.js
Im Browser http://localhost:3000 aufrufen

# Hinweise
Sollte beim Starten ein Fehler bezüglich der Datenbank auftreten, kann es helfen, die Datei db.json zu löschen oder auf folgenden Inhalt zurückzusetzen:

{
  "messages": []
}
Die Datei db.json wird beim ersten Start automatisch angelegt, wenn sie nicht existiert.