import { useEffect, useState } from 'react';
import { gql, request } from '../helpers/graphql';
import { Person } from './person';

export const usePeople = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    getPeople().then(setPeople);
  }, []);

  return people;
};

const getPeople = () =>
  request<QueryAllPeople>(gql`
    query {
      allPeople {
        people {
          id
          name
          homeworld {
            name
          }
          filmConnection {
            films {
              title
            }
          }
          species {
            language
          }
        }
      }
    }
  `).then((d) => d.allPeople.people);

interface QueryAllPeople {
  allPeople: {
    people: Person[];
  };
}
