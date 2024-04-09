import React from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamsList} from '../navigators/RootStack';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import logo1 from '../../assets/cards/mc.png';
import logo2 from '../../assets/cards/visa_white.png';
import portrait1 from '../../assets/portraits/1.jpg';
import portrait2 from '../../assets/portraits/2.jpg';
import portrait3 from '../../assets/portraits/3.jpg';

import CardSection from '../components/Cards/CardSection';
import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

export type HomeScreenProps = StackScreenProps<RootStackParamsList, 'Home'>;

const Home: React.FC<HomeScreenProps> = () => {
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

  const transactionData = [
    {
      id: 1,
      amount: '-₹581.00',
      date: '12 Mar 2024',
      title: 'Taxi',
      subTitle: 'Uber',
      art: {
        background: colors.primary,
        icon: 'car',
      },
    },
    {
      id: 2,
      amount: '-₹810.00',
      date: '28 Feb 2024',
      title: 'Shopping',
      subTitle: 'Amazon',
      art: {
        background: colors.tertiary,
        icon: 'cart',
      },
    },
    {
      id: 3,
      amount: '-₹1805.00',
      date: '16 Feb 2024',
      title: 'Travel',
      subTitle: 'IRCTC',
      art: {
        background: colors.accent,
        icon: 'airplane',
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: '₹ 2000',
      name: 'Alex',
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      amount: '₹ 650',
      name: 'Betty',
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: '₹ 1200',
      name: 'Carl',
      background: colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
