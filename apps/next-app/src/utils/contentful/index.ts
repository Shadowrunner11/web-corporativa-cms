import { graphqlClient } from "@/modules"
import { RequestOptions } from "@/services/GraphQLCLient"
import { pathOr } from "ramda"

export async function contentfulGqlFetch<T = any>(documentName: string, query: string, options : RequestOptions= {}): Promise<T[]>{
  const { data: responseData } = await graphqlClient.request(query, options)

  return responseData.data[documentName].items
}

export const getContentfulIdOrEmpty = pathOr<string>('', ['sys', 'id'])
