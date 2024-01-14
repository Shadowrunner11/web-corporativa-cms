/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetMiddlePageBySlug($slug: String!) {\n  middlePageCollection(where: {slug: $slug}, limit: 1) {\n    items {\n      slug\n      title\n      contentCollection(limit: 10) {\n        items {\n          contentfulMetadata {\n            __typename\n          }\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}": types.GetMiddlePageBySlugDocument,
    "query GetPageBySlug($slug: String!) {\n  pageCollection(where: {slug: $slug}, limit: 1) {\n    items {\n      slug\n      title\n      contentCollection(limit: 10) {\n        items {\n          contentfulMetadata {\n            __typename\n          }\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}": types.GetPageBySlugDocument,
    "query GetEndPageBySlug($slug: String!) {\n  endPageCollection(where: {slug: $slug}, limit: 1) {\n    items {\n      slug\n      title\n      contentCollection(limit: 10) {\n        items {\n          contentfulMetadata {\n            __typename\n          }\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}": types.GetEndPageBySlugDocument,
    "query GetCategoryHeroById($id: String!) {\n  categoryHero(id: $id) {\n    subtitle\n    title\n    image {\n      description\n      url\n    }\n    sxStyles\n    cta {\n      classNames\n      text\n      id\n      sxStyles\n    }\n  }\n}": types.GetCategoryHeroByIdDocument,
    "query GetColumns {\n  columnsCollection {\n    items {\n      sys {\n        id\n      }\n      topicsCollection {\n        items {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}": types.GetColumnsDocument,
    "query GetPages {\n  pageCollection {\n    items {\n      isInNavbar\n      slug\n      title\n    }\n  }\n}": types.GetPagesDocument,
    "query GeMiddlePages {\n  middlePageCollection {\n    items {\n      sys {\n        id\n      }\n      slug\n      title\n      externalHref\n      childrenPagesCollection(limit: 4) {\n        items {\n          isInNavbar\n          slug\n          title\n          externalHref\n        }\n      }\n    }\n  }\n}": types.GeMiddlePagesDocument,
    "query GetTopics {\n  topicCollection {\n    items {\n      title\n      sys {\n        id\n      }\n      itemsCollection {\n        items {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}": types.GetTopicsDocument,
    "query GeWebData($id: String!) {\n  webData(id: $id) {\n    contentCollection {\n      items {\n        __typename\n        ... on Page {\n          title\n          slug\n          externalHref\n        }\n        ... on PageGroup {\n          title\n          slug\n          columnsCollection(limit: 4) {\n            items {\n              topicsCollection(limit: 5) {\n                items {\n                  sys {\n                    id\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GeWebDataDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMiddlePageBySlug($slug: String!) {\n  middlePageCollection(where: {slug: $slug}, limit: 1) {\n    items {\n      slug\n      title\n      contentCollection(limit: 10) {\n        items {\n          contentfulMetadata {\n            __typename\n          }\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetMiddlePageBySlug($slug: String!) {\n  middlePageCollection(where: {slug: $slug}, limit: 1) {\n    items {\n      slug\n      title\n      contentCollection(limit: 10) {\n        items {\n          contentfulMetadata {\n            __typename\n          }\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPageBySlug($slug: String!) {\n  pageCollection(where: {slug: $slug}, limit: 1) {\n    items {\n      slug\n      title\n      contentCollection(limit: 10) {\n        items {\n          contentfulMetadata {\n            __typename\n          }\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetPageBySlug($slug: String!) {\n  pageCollection(where: {slug: $slug}, limit: 1) {\n    items {\n      slug\n      title\n      contentCollection(limit: 10) {\n        items {\n          contentfulMetadata {\n            __typename\n          }\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetEndPageBySlug($slug: String!) {\n  endPageCollection(where: {slug: $slug}, limit: 1) {\n    items {\n      slug\n      title\n      contentCollection(limit: 10) {\n        items {\n          contentfulMetadata {\n            __typename\n          }\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetEndPageBySlug($slug: String!) {\n  endPageCollection(where: {slug: $slug}, limit: 1) {\n    items {\n      slug\n      title\n      contentCollection(limit: 10) {\n        items {\n          contentfulMetadata {\n            __typename\n          }\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCategoryHeroById($id: String!) {\n  categoryHero(id: $id) {\n    subtitle\n    title\n    image {\n      description\n      url\n    }\n    sxStyles\n    cta {\n      classNames\n      text\n      id\n      sxStyles\n    }\n  }\n}"): (typeof documents)["query GetCategoryHeroById($id: String!) {\n  categoryHero(id: $id) {\n    subtitle\n    title\n    image {\n      description\n      url\n    }\n    sxStyles\n    cta {\n      classNames\n      text\n      id\n      sxStyles\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetColumns {\n  columnsCollection {\n    items {\n      sys {\n        id\n      }\n      topicsCollection {\n        items {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetColumns {\n  columnsCollection {\n    items {\n      sys {\n        id\n      }\n      topicsCollection {\n        items {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPages {\n  pageCollection {\n    items {\n      isInNavbar\n      slug\n      title\n    }\n  }\n}"): (typeof documents)["query GetPages {\n  pageCollection {\n    items {\n      isInNavbar\n      slug\n      title\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GeMiddlePages {\n  middlePageCollection {\n    items {\n      sys {\n        id\n      }\n      slug\n      title\n      externalHref\n      childrenPagesCollection(limit: 4) {\n        items {\n          isInNavbar\n          slug\n          title\n          externalHref\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GeMiddlePages {\n  middlePageCollection {\n    items {\n      sys {\n        id\n      }\n      slug\n      title\n      externalHref\n      childrenPagesCollection(limit: 4) {\n        items {\n          isInNavbar\n          slug\n          title\n          externalHref\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTopics {\n  topicCollection {\n    items {\n      title\n      sys {\n        id\n      }\n      itemsCollection {\n        items {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetTopics {\n  topicCollection {\n    items {\n      title\n      sys {\n        id\n      }\n      itemsCollection {\n        items {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GeWebData($id: String!) {\n  webData(id: $id) {\n    contentCollection {\n      items {\n        __typename\n        ... on Page {\n          title\n          slug\n          externalHref\n        }\n        ... on PageGroup {\n          title\n          slug\n          columnsCollection(limit: 4) {\n            items {\n              topicsCollection(limit: 5) {\n                items {\n                  sys {\n                    id\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GeWebData($id: String!) {\n  webData(id: $id) {\n    contentCollection {\n      items {\n        __typename\n        ... on Page {\n          title\n          slug\n          externalHref\n        }\n        ... on PageGroup {\n          title\n          slug\n          columnsCollection(limit: 4) {\n            items {\n              topicsCollection(limit: 5) {\n                items {\n                  sys {\n                    id\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;