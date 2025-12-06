# Strapi Setup: Sektionen als Single Types, Listen als Collection Types

Alle vordefinierten Inhalte sind entfernt. Lege die Sektionen als **Single Types** an und die Listen als **Collection Types**. Das Frontend (`apps/frontend`) ruft die Sektionen über Single-Type-Endpoints ab und die Listen über Collection-Endpoints.

## Starten
- `npm install` und `npm run develop` (oder `yarn develop`) im Ordner `apps/backend`.
- Single Types und Collection Types wie unten anlegen, Inhalte veröffentlichen.
- Öffentliche Rolle: `find` und `findOne` für alle genannten Types aktivieren.

## Single Types (jeweils 1 Eintrag anlegen & veröffentlichen)
- **Navigation** (`navigation`)
  - `phone` (Text, Short)
  - `email` (Email)
  - `tagline` (Text, Short)

- **Hero** (`hero`)
  - `eyebrow` (Text, Short, optional)
  - `title` (Text, Long)
  - `highlight` (Text, Short, optional)
  - `primaryCtaLabel` (Text, Short)
  - `primaryCtaTarget` (Text, Short)
  - `secondaryCtaLabel` (Text, Short)
  - `secondaryCtaTarget` (Text, Short)
  - `image` (Media, Single)

- **Service Section** (`service-section`)
  - `eyebrow` (Text, Short, optional)
  - `heading` (Text, Short)
  - `subheading` (Text, Long, optional)
  - `detailsHeading` (Text, Short, optional)
  - `detailsSubheading` (Text, Long, optional)

- **Brand Section** (`brand-section`)
  - `eyebrow` (Text, Short, optional)
  - `heading` (Text, Short)
  - `subheading` (Text, Long, optional)

- **Team Section** (`team`)
  - `eyebrow` (Text, Short, optional)
  - `heading` (Text, Short)
  - `subheading` (Text, Long, optional)
  - `story` (Rich Text, optional)

- **Contact Section** (`contact`)
  - `eyebrow` (Text, Short, optional)
  - `heading` (Text, Short)
  - `subheading` (Text, Long, optional)
  - `mapEmbedUrl` (Text, Long, optional)
  - `mapLabel` (Text, Short, optional)
  - `mapDescription` (Text, Short, optional)

- **Footer** (`footer`)
  - `description` (Text, Long, optional)
  - `servicesText` (Text, Long, optional) – eine Zeile pro Service.
  - `legalText` (Text, Short, optional)

## Collection Types (beliebig viele Einträge)
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
- Single Types: `navigation`, `hero`, `service-section`, `brand-section`, `team`, `contact`, `footer`.
- Listen: `hero-stats`, `services`, `service-categories`, `brands`, `team-members`, `contact-cards` (sortiert nach `order`).
- Text-Listen (`itemsText`, `linesText`, `servicesText`) werden zeilenweise getrennt und als Arrays ins UI gemappt.

## API-Berechtigungen
- Settings → Users & Permissions → Roles → Public
- Für alle genannten Single und Collection Types: `find` und `findOne` aktivieren.
