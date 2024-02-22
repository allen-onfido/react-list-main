/**
 * Calls SWAPI Graphql with the specified query and variables.
 * @example
 * request(gql`
 *  query {
 *    allPeople {
 *      people {
 *        name
 *        homeworld {
 *          name
 *        }
 *        filmConnection {
 *          films {
 *            title
 *          }
 *        }
 *        species {
 *          language
 *        }
 *      }
 *    }
 *  }`)
 *  .then(console.log, console.log);
 */
export const request = <T = unknown>(
  query: string,
  variables?: Record<string, unknown>,
  // eslint-disable-next-line no-undef
  { headers, ...init }: RequestInit = {}
): Promise<T> =>
  fetch(endpoint, {
    ...init,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify({ query, variables }),
  }).then(async (response) => {
    const result = await response.json();
    if (response.ok && !result.errors) return result.data;
    throw new Error(result.errors[0].message);
  });

export const gql = (chunks: TemplateStringsArray, ...variables: unknown[]) =>
  chunks.reduce(
    (prev, next, index) =>
      `${prev}${next}${index in variables ? variables[index] : ''}`,
    ''
  );

const endpoint = 'https://swapi-graphql.netlify.app/.netlify/functions/index';
