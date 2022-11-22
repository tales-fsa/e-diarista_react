import React, { PropsWithChildren } from 'react';
import { Typography } from '@mui/material';
import {
  PasswordStrenghtBar,
  PasswordStrenghtLabel,
} from './PasswordStrenght.styled';
import { passwordStrength } from 'check-password-strength';

export interface PasswordStrenghtProps {
  password: string;
}

const PasswordStrenght: React.FC<PropsWithChildren<PasswordStrenghtProps>> = ({
  password,
}) => {
  const strength = password ? passwordStrength(password).id : 0,
    strenghtValue = ((strength + 1) / 4) * 100;
  return (
    <div style={{ gridArea: 'password-strength' }}>
      <Typography variant="body2" component={'span'} color={'textSecondary'}>
        Nível da senha:&nbsp;
        <PasswordStrenghtLabel value={strenghtValue}>
          {strength === 0 && 'FRACA'}
          {strength === 1 && 'MÉDIA'}
          {strength === 2 && 'FORTE'}
          {strength === 3 && 'FORTE'}
        </PasswordStrenghtLabel>
      </Typography>
      <PasswordStrenghtBar variant="determinate" value={strenghtValue} />
    </div>
  );
};

export default PasswordStrenght;
