/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FavoriteItem_favorite$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FavoritesTable_favorites$ref: FragmentReference;
declare export opaque type FavoritesTable_favorites$fragmentType: FavoritesTable_favorites$ref;
export type FavoritesTable_favorites = {|
  +favorites: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: FavoriteItem_favorite$ref,
      |}
    |}>
  |},
  +$refType: FavoritesTable_favorites$ref,
|};
export type FavoritesTable_favorites$data = FavoritesTable_favorites;
export type FavoritesTable_favorites$key = {
  +$data?: FavoritesTable_favorites$data,
  +$fragmentRefs: FavoritesTable_favorites$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FavoritesTable_favorites",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "options",
      "type": "SortOptions",
      "defaultValue": {
        "sortDirection": "ASC",
        "sortBy": "NAME"
      }
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "favorites",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "options",
          "variableName": "options"
        }
      ],
      "concreteType": "TvShowConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "TvShowEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "TvShow",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "FavoriteItem_favorite",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bb168013290e775a1ea506c61a6ff9ad';
module.exports = node;
