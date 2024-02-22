import { Icons } from '@onfido/castor-icons';
import React, { useState } from 'react';
import { List } from '../components';
import { Person as PersonType } from '../core/person';
import { usePeople } from '../core/usePeople';
import * as styles from './app.module.scss';
import { Person } from './person';
import { PersonDetails } from './person-details';

/* REST: https://swapi.dev
         https://swapi.dev/api
*/

/* GraphQL: https://graphql.org/swapi-graphql
            https://swapi-graphql.netlify.app/.netlify/functions/index
*/

export function App() {
  const people = usePeople();
  const [selected, setSelected] = useState<PersonType>();

  return (
    <main className={styles.main}>
      <Icons />
      {selected ? (
        <PersonDetails id={selected.id} onBack={() => setSelected(undefined)} />
      ) : (
        <List className={styles.list}>
          {people.map((p) => (
            <li key={p.name}>
              <Person person={p} onSelect={() => setSelected(p)} />
            </li>
          ))}
        </List>
      )}
    </main>
  );
}
