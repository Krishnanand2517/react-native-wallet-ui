import React from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

import {Container} from '../components/shared';
import {colors} from '../components/colors';
import logo1 from '../../assets/cards/mc.png';
import logo2 from '../../assets/cards/visa_white.png';
import CardSection from '../components/Cards/CardSection';

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: React.FC = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: '7829054501',
      balance: 30500.15,
      alias: 'Work Debit',
      logo: logo1,
    },
    {
      id: 2,
      accountNo: '2290501854',
      balance: 12408.01,
      alias: 'Personal Prepaid',
      logo: logo2,
    },
    {
      id: 3,
      accountNo: '4857173583',
      balance: 22006.11,
      alias: 'School Prepaid',
      logo: logo1,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar />
      <CardSection data={cardsData} />
    </HomeContainer>
  );
};

export default Home;
