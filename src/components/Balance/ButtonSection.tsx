import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RegularButton from '../Buttons/RegularButton';
import {colors} from '../colors';

const ButtonSectionBackground = styled.View`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const ButtonSection: React.FC = () => {
  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{width: '50%'}} onPress={() => {}}>
        Cancel Card{'     '}
        <Ionicons name="card" size={17} color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;
