# Strapi Setup mit Collection Types (ohne Components/Seeds)

Alle vordefinierten Content-Types/Components und Seeds sind entfernt. Lege die folgenden **Collection Types** an (keine Components, nur Felder + Relationen/Listen als eigene Collections). Das Frontend (`apps/frontend`) lädt den jeweils neuesten Eintrag der Sektionen sowie alle Listen-Collections.

## Starten
- `npm install` und `npm run develop` (oder `yarn develop`) im Ordner `apps/backend`.
- Unten aufgeführte Collection Types erstellen, Einträge anlegen und veröffentlichen.
- Öffentliche Rolle: `find` und `findOne` für alle genannten Collection Types aktivieren.

## Sektionen (jeweils 1 Eintrag anlegen & veröffentlichen)
- **Navigation** (`navigations`)
  - `phone` (Text, Short)
  - `email` (Email)
  - `tagline` (Text, Short)

- **Hero** (`heroes`)
  - `eyebrow` (Text, Short, optional)
  - `title` (Text, Long)
  - `highlight` (Text, Short, optional)
  - `primaryCtaLabel` (Text, Short)
  - `primaryCtaTarget` (Text, Short)
  - `secondaryCtaLabel` (Text, Short)
  - `secondaryCtaTarget` (Text, Short)
  - `image` (Media, Single)

- **Service Section** (`service-sections`)
  - `eyebrow` (Text, Short, optional)
  - `heading` (Text, Short)
  - `subheading` (Text, Long, optional)
  - `detailsHeading` (Text, Short, optional)
  - `detailsSubheading` (Text, Long, optional)

- **Brand Section** (`brand-sections`)
  - `eyebrow` (Text, Short, optional)
  - `heading` (Text, Short)
  - `subheading` (Text, Long, optional)

- **Team Section** (`teams`)
  - `eyebrow` (Text, Short, optional)
  - `heading` (Text, Short)
  - `subheading` (Text, Long, optional)
  - `story` (Rich Text, optional)

- **Contact Section** (`contacts`)
  - `eyebrow` (Text, Short, optional)
  - `heading` (Text, Short)
  - `subheading` (Text, Long, optional)
  - `mapEmbedUrl` (Text, Long, optional)
  - `mapLabel` (Text, Short, optional)
  - `mapDescription` (Text, Short, optional)

- **Footer** (`footers`)
  - `description` (Text, Long, optional)
  - `servicesText` (Text, Long, optional) – eine Zeile pro Service.
  - `legalText` (Text, Short, optional)

## Listen-Collections (beliebig viele Einträge)
- **Hero Stats** (`hero-stats`)
  - `value` (Text, Short)
  - `label` (Text, Short)
  - `description` (Text, Long, optional)
  - `order` (Number, Integer, optional)

- **Services** (`services`)
  - `title` (Text, Short)
  - `description` (Text, Long, optional)
  - `iconName` (Text, Short, optional) – Icon-Name aus dem Frontend (z. B. `Wrench`).
  - `order` (Number, Integer, optional)

- **Service Categories** (`service-categories`)
  - `title` (Text, Short)
  - `description` (Text, Long, optional)
  - `image` (Media, Single, optional)
  - `itemsText` (Text, Long, optional) – eine Zeile pro Bullet.
  - `order` (Number, Integer, optional)

- **Brands** (`brands`)
  - `name` (Text, Short)
  - `description` (Text, Long, optional)
  - `order` (Number, Integer, optional)

- **Team Members** (`team-members`)
  - `name` (Text, Short)
  - `role` (Text, Short, optional)
  - `experience` (Text, Short, optional)
  - `specialization` (Text, Short, optional)
  - `photo` (Media, Single, optional)
  - `order` (Number, Integer, optional)

- **Contact Cards** (`contact-cards`)
  - `type` (Enumeration: `phone`, `email`, `address`, `hours`)
  - `title` (Text, Short)
  - `description` (Text, Long, optional)
  - `linesText` (Text, Long, optional) – eine Zeile pro Adresse/Öffnungszeit.
  - `actionValue` (Text, Short, optional) – z. B. `+4155...`, `info@...`.
  - `order` (Number, Integer, optional)

## Wie das Frontend die Daten nutzt
- Es lädt pro Sektion den **neuesten Eintrag** (Sortierung `createdAt:desc`) aus `navigations`, `heroes`, `service-sections`, `brand-sections`, `teams`, `contacts`, `footers`.
- Listen werden komplett geladen:
  - Stats: `hero-stats` (sortiert nach `order`)
  - Services: `services` (sortiert nach `order`)
  - Service-Kategorien: `service-categories` (sortiert nach `order`)
  - Brands: `brands` (sortiert nach `order`)
  - Team-Mitglieder: `team-members` (sortiert nach `order`)
  - Contact Cards: `contact-cards` (sortiert nach `order`)
- Text-Listen (`itemsText`, `linesText`, `servicesText`) werden zeilenweise getrennt und als Arrays ins UI gemappt.

## API-Berechtigungen
- Settings → Users & Permissions → Roles → Public
- Für alle oben genannten Collection Types: `find` und `findOne` aktivieren.

## Hinweis
- Wenn du mehrere Varianten einer Sektion brauchst, passt im Frontend `apps/frontend/src/lib/api.ts` die Abfrage an (z. B. Filter/Slug).
