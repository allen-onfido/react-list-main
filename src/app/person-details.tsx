import { Button, Icon } from '@onfido/castor-react';
import React from 'react';
import { Code, Loading } from '../components';
import { usePerson } from '../core/usePerson';
import * as styles from './person-details.module.scss';

interface Props {
  id: string;
  onBack?: () => void;
}

export const PersonDetails = ({ id, onBack }: Props) => {
  const person = usePerson(id);

  if (!person) return <Loading />;

  return (
    <div className={styles.details}>
      <Button variant="tertiary" onClick={() => onBack?.()}>
        <Icon name="arrow-back" />
        Go back
      </Button>

      <Code>{JSON.stringify(person, null, 2)}</Code>
    </div>
  );
};
