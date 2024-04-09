import React, {useRef} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {SendMoneySectionProps} from './types';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import SendMoneyItem from './SendMoneyItem';

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneySection: React.FC<SendMoneySectionProps> = props => {
  const sheetRef = useRef<BottomSheet>(null);

  const renderContent = () => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow style={{marginBottom: 25}}>
          <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>
            Send money to
          </RegularText>
          <TextButton onPress={() => Alert.alert('Add')}>
            <SmallText
              textStyles={{fontWeight: 'bold', color: colors.tertiary}}>
              + Add
            </SmallText>
          </TextButton>
        </SendMoneyRow>

        <SendMoneyList
          data={props.data}
          contentContainerStyle={{alignItems: 'flex-start'}}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({id}: any) => id.toString()}
          renderItem={({item}: any) => <SendMoneyItem {...item} />}
        />
      </SendMoneySectionBackground>
    );
  };

  return (
    <BottomSheet ref={sheetRef} snapPoints={[40, 85, 240]}>
      <BottomSheetView style={{borderRadius: 25}}>
        {renderContent()}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default SendMoneySection;
