import { graphqlClient } from "@/modules";
import { RequestOptions } from "@/services/GraphQLCLient";
import { pathOr, paths } from "ramda";

export async function fetchContentfulGql<T = any>(
  documentName: string,
  query: string,
  options: RequestOptions = {},
): Promise<T> {
  const { data: responseData, response } = await graphqlClient.request(query, options);

  if(response.status > 399)
    throw new Error(JSON.stringify(responseData))

  return responseData.data[documentName];
}

export const fetchContentfulCollectionGql = async <T = any>(
  ...args: Parameters<typeof fetchContentfulGql>
): Promise<T[]> => (await fetchContentfulGql(...args)).items;

const pathId = ["sys", "id"];

export const getContentfulIdOrEmpty = pathOr<string>("", pathId);

const pathType = ["__typename"];

export const getType = pathOr<string>("", pathType);

export const getEntryBasicInfo = paths<string>([pathId, pathType]);
