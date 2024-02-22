import React from 'react';
import { Card } from '../components';
import { Person as PersonType } from '../core/person';
import * as styles from './person.module.scss';

interface Props {
  person: PersonType;
  onSelect?: () => void;
}

export const Person = ({ person, onSelect }: Props) => (
  <Card className={styles.card} onClick={() => onSelect?.()}>
    <h2 className={styles.name}>{person.name}</h2>
    <div>
      {person.homeworld.name !== 'unknown' && (
        <p className={styles.paragraph}>
          <h3 className={styles.title}>From:</h3> {person.homeworld.name}
        </p>
      )}
      {(person.species?.language ?? 'n/a') !== 'n/a' && (
        <p className={styles.paragraph}>
          <h3 className={styles.title}>Speaks:</h3> {person.species?.language}
        </p>
      )}
      <h3 className={styles.title}>Appears in:</h3>
      <ul>
        {person.filmConnection.films.map((f) => (
          <li key={f.title}>{f.title}</li>
        ))}
      </ul>
    </div>
  </Card>
);
