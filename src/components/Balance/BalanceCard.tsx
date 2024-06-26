import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {BalanceCardProps} from './types';
import {colors} from '../colors';
import card_bg from '../../../assets/bgs/background_transparent.png';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

const CardBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  overflow: hidden;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;

const BalanceCard: React.FC<BalanceCardProps> = props => {
  return (
    <View style={{height: '45%'}}>
      <CardBackground source={card_bg}>
        <TouchableView>
          <CardRow>
            <RegularText textStyles={{color: colors.white}}>
              ****** {props?.accountNo?.slice(6, 10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{flex: 3}}>
              <SmallText
                textStyles={{marginBottom: 5, color: colors.graylight}}>
                Total Balance
              </SmallText>
              <RegularText textStyles={{fontSize: 19}}>
                {props.balance}
              </RegularText>
            </View>
            <Logo source={props.logo} />
          </CardRow>
        </TouchableView>
      </CardBackground>
    </View>
  );
};

export default BalanceCard;
