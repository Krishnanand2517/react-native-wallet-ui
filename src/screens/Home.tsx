import React from 'react';
import styled from 'styled-components/native';

import {Container} from '../components/shared';
import {colors} from '../components/colors';
import {StatusBar} from 'react-native';

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <StatusBar />
    </HomeContainer>
  );
};

export default Home;
