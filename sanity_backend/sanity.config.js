import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'my blog',

  projectId: 'cszqmh4e', // আপনার প্রোজেক্ট আইডি
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),
    codeInput() // <--- প্লাগইন যোগ করা হলো
  ],

  schema: {
    types: schemaTypes,
  },
})