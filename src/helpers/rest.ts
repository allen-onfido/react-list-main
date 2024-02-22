/**
 * Calls SWAPI REST with the specified resource and query arguments.
 * @param search Search within `resource` for specified text.
 * @example
 * request('people')
 *  .then(console.log, console.log);
 */
export const request = (
  resource: Resource,
  queryArgs: QueryArgs = {},
  // eslint-disable-next-line no-undef
  { headers, ...init }: RequestInit = {}
) =>
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  fetch(endpoint + resource + query(queryArgs), {
    ...init,
    headers,
  }).then((res) => res.json());

const endpoint = 'https://swapi.dev/api/';

const query = (args: QueryArgs) =>
  '?' +
  Object.entries(args)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

type Resource =
  | 'films'
  | 'people'
  | 'planets'
  | 'species'
  | 'starships'
  | 'vehicles';

interface QueryArgs {
  page?: number;
  search?: string;
}
