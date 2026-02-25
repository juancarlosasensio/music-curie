import { defineCollection } from "astro:content";
import { airtableLoader } from "@ascorbic/airtable-loader";

const books = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE_ID,
    table: "Table 1",
  }),
});

export const collections = { books };