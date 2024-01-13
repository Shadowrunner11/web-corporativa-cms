import { indexBy, path, pathOr} from "ramda";

import { Columns, EndPage, MiddlePage, Topic } from "@/gql/graphql";
import { getContentfulIdOrEmpty } from "@/utils/contentful";

export const getById = <T = unknown>(data: Record<string, T>)=> (id: string)=>data[id];

export const getByContentfulId = <T = unknown>(items : T[])=>getById(indexBy(getContentfulIdOrEmpty, items))

export const getItemsOrArray = <T = unknown>(collectionName: string)=> pathOr<T[]>([], [collectionName, 'items'])

export const getItems =  <T = unknown>(collectionName: string)=> path<T[]>([collectionName, 'items'])

export const getMiddlePages = getItemsOrArray<MiddlePage>('itemsCollection')
export const getTopics = getItemsOrArray<Topic>('topicsCollection')
export const getColumns = getItemsOrArray<Columns>('columnsCollection')
export const getEndPages = getItemsOrArray<EndPage>('childrenPagesCollection')