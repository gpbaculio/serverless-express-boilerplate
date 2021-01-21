import {graphql} from 'react-relay';

const HelloGraphQL = graphql`
  query HelloGraphQLQuery {
    message
  }
`;

export default HelloGraphQL;
