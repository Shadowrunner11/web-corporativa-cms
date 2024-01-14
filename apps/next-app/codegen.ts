import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'
 
const config: CodegenConfig = {
   schema: { 
    [process.env['CMS_URL'] ?? '']: {
      headers: {
        'Authorization': process.env['CMS_TOKEN'] ?? ''
      }
    }
  },
   documents: ['src/**/*.gql'],
   generates: {
    './src/gql/': {
      preset: 'client',
    }
   }
}

export default config