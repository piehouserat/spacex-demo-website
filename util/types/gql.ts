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
    "\n  query ships($limit: Int!, $offset: Int!) {\n    ships(input: { pagination: { limit: $limit, offset: $offset } }) {\n      id\n      name\n      image\n      active\n      class\n      year_built\n      home_port\n      type\n      missions {\n        id\n        name\n        description\n      }\n    }\n  }\n": types.ShipsDocument,
    "\n  query shipMissingAttributes($attributes: [String!]!, $limit: Int!, $offset: Int!) {\n    shipMissingAttributes(input: {\n      attributes: $attributes,\n      pagination: {\n        limit: $limit,\n        offset: $offset\n      }\n    }) {\n      shipId\n      missingCount\n    }\n  }\n": types.ShipMissingAttributesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ships($limit: Int!, $offset: Int!) {\n    ships(input: { pagination: { limit: $limit, offset: $offset } }) {\n      id\n      name\n      image\n      active\n      class\n      year_built\n      home_port\n      type\n      missions {\n        id\n        name\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query ships($limit: Int!, $offset: Int!) {\n    ships(input: { pagination: { limit: $limit, offset: $offset } }) {\n      id\n      name\n      image\n      active\n      class\n      year_built\n      home_port\n      type\n      missions {\n        id\n        name\n        description\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query shipMissingAttributes($attributes: [String!]!, $limit: Int!, $offset: Int!) {\n    shipMissingAttributes(input: {\n      attributes: $attributes,\n      pagination: {\n        limit: $limit,\n        offset: $offset\n      }\n    }) {\n      shipId\n      missingCount\n    }\n  }\n"): (typeof documents)["\n  query shipMissingAttributes($attributes: [String!]!, $limit: Int!, $offset: Int!) {\n    shipMissingAttributes(input: {\n      attributes: $attributes,\n      pagination: {\n        limit: $limit,\n        offset: $offset\n      }\n    }) {\n      shipId\n      missingCount\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;