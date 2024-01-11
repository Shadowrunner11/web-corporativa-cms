import graphqlQueryGetOne from 'raw-loader!./getOne.graphql'
const queries: Record<string, Record<string, string>> =  {
  getOneQueries: {
    section: graphqlQueryGetOne
  }
}
export default queries