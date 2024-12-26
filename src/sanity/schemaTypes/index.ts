// import { type SchemaTypeDefinition } from 'sanity'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [],
// }



import { type SchemaTypeDefinition } from 'sanity'
import author from './author'
import category from './category' 
import post from './post'
import blockContent from './blockcontent'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent],
}