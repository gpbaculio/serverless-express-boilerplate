/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HelloGraphQLQueryVariables = {};
export type HelloGraphQLQueryResponse = {
    readonly message: string | null;
};
export type HelloGraphQLQuery = {
    readonly response: HelloGraphQLQueryResponse;
    readonly variables: HelloGraphQLQueryVariables;
};



/*
query HelloGraphQLQuery {
  message
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HelloGraphQLQuery",
    "selections": (v0/*: any*/),
    "type": "HelloWorld",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HelloGraphQLQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9f4f290334ec5f1803c03f8c93164fb3",
    "id": null,
    "metadata": {},
    "name": "HelloGraphQLQuery",
    "operationKind": "query",
    "text": "query HelloGraphQLQuery {\n  message\n}\n"
  }
};
})();
(node as any).hash = 'f5661c6466237d765cdd43713b5e8477';
export default node;
