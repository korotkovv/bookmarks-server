"use strict";

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
    url: env("PUBLIC_URL", "https://api-bookmarks.korotkovv.ru"),
  },
  webhooks: {
    // Add this to not receive populated relations in webhooks
    populateRelations: false,
  },
});
