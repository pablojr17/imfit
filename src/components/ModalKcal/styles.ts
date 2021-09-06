import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #f4f4f4;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 0 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
`;

export const LinkArea = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 33px;
  font-weight: bold;
  color: #202124;
  text-align: center;
  margin-bottom: 24px;
 
`;

export const ShortLinkArea = styled.TouchableOpacity`
  height: 140px;
  width: 140px;
  background-color: #7ED957;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: center;
  
`;

export const ShortLinkUrl = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
  color: #202124;
  font-weight: bold;

  
  `;