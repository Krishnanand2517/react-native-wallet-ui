import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import {RootStackParamsList} from '../navigators/RootStack';
import AmountSection from '../components/Balance/AmountSection';
import BalanceCard from '../components/Balance/BalanceCard';
import ButtonSection from '../components/Balance/ButtonSection';

const BalanceContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  padding: 25px;
  flex: 1;
`;

type BalanceScreenProps = StackScreenProps<RootStackParamsList, 'Balance'>;

const Balance: React.FC<BalanceScreenProps> = ({route}) => {
  return (
    <BalanceContainer>
      <StatusBar />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCard {...route?.params} />
      <ButtonSection />
    </BalanceContainer>
  );
};

export default Balance;
