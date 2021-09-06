import React from 'react';
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native';
import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  ShortLinkArea,
  ShortLinkUrl

} from './styles';
import { Feather } from '@expo/vector-icons';
// import Clipboard from 'expo-clipboard';

interface ModalProps {
  data: number;
  onClose: () => void;
}

export default function ModalKcal({ onClose, data }: ModalProps) {
  function copyLink() {
    // Clipboard.setString(data)
    alert('Dados copiados com sucesso!')
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Olá, estou bastante focado, hoje eu consumi: ${data} kcal 💪🏼`
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('ActivityType')
        } else {
          console.log('Compartilhado')
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Modal fechado')
      }
    } catch (error) {
      console.log('Modal fechado')
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Quantidade de calorias ingeridas hoje: </Title>

          <ShortLinkArea activeOpacity={1} onPress={copyLink} >
            <ShortLinkUrl numberOfLines={1}>
              {data} kcal
            </ShortLinkUrl>
            <TouchableOpacity onPress={copyLink}>
              <Feather name="copy" color="#202124" size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  )
}