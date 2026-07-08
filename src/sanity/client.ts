import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "cp7pt6bn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});
