import { useEffect, useState } from 'react';
import { gql, request } from '../helpers/graphql';
import { Person } from './person';

export const usePerson = (id: string) => {
  const [person, setPerson] = useState<Person>();

  useEffect(() => {
    getPerson(id).then(setPerson);
  }, [id]);

  return person;
};

const getPerson = (id: string) =>
  request<QueryPerson>(
    gql`
      query Person($id: ID!) {
        person(id: $id) {
          name
          birthYear
          eyeColor
          gender
          hairColor
          height
          mass
          skinColor
          homeworld {
            name
            diameter
            rotationPeriod
            orbitalPeriod
            gravity
            population
            climates
            terrains
            surfaceWater
          }
          filmConnection {
            films {
              title
              episodeID
              director
              producers
              releaseDate
            }
          }
          species {
            language
            name
            classification
            designation
            averageHeight
            averageLifespan
            eyeColors
            hairColors
            skinColors
          }
        }
      }
    `,
    { id }
  ).then((d) => d.person);

interface QueryPerson {
  person: Person;
}
