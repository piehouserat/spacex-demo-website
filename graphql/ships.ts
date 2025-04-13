import gql from "graphql-tag";

const ships = gql`
  query ships($limit: Int!, $offset: Int!) {
    ships(input: { pagination: { limit: $limit, offset: $offset } }) {
      id
      name
      image
      active
      class
      year_built
      home_port
      type
      missions {
        id
        name
        description
      }
    }
  }
`;

const shipMissingAttributes = gql`
  query shipMissingAttributes(
    $attributes: [String!]!
    $limit: Int!
    $offset: Int!
  ) {
    shipMissingAttributes(
      input: {
        attributes: $attributes
        pagination: { limit: $limit, offset: $offset }
      }
    ) {
      shipId
      missingCount
    }
  }
`;

const query = { ships, shipMissingAttributes };
const mutations = {};
const Ships = { query, mutations };
export { Ships };
