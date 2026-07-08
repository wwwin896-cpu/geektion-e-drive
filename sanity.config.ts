import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './src/sanity/schema';

export default defineConfig({
  name: 'default',
  title: 'Geektion B2B Studio',

  projectId: 'cp7pt6bn',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
