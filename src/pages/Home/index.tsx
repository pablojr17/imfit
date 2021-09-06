import React, { useState } from "react";
import { FlatList, Text } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { useData } from "../../hooks/data";
import * as FileSystem from 'expo-file-system';

import {
  Container,
  HeaderContainer,
  HeaderContainerHighlight,
  HeaderTextCounterHighlight,
  HeaderTextHighlight,
  HeaderTitle,
  BodyContainer,
} from "./styles";
import ItemList from "../../components/ItemList";
import {  Modal } from 'react-native';
import ModalKcal from "../../components/ModalKcal";

function Home() {
  const navigation = useNavigation();
  const { handleChangeDate, currentList, currentKcal, currentDate } = useData();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOneNewItem = (): void => {
    navigation.navigate("NewItem");
  };
  
  const handleViewData = (): void => {
    setModalVisible(true);
  };


  return (
    <Container>
      <HeaderContainer>
        <CalendarStrip
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "white",
          }}
          style={{ height: 100, paddingTop: 20, paddingBottom: 5 }}
          calendarHeaderStyle={{ color: "white", marginBottom: 15 }}
          dateNumberStyle={{ color: "white" }}
          dateNameStyle={{ color: "white" }}
          scrollable={true}
          highlightDateNumberStyle={{ color: '#7ED957' }}
          highlightDateNameStyle={{ color: "#7ED957" }}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey" }}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={handleChangeDate}
          startingDate={moment(currentDate).subtract(3, "days")}
          selectedDate={moment(currentDate)}
          scrollerPaging={true}
          iconLeft={require("../../assets/img/arrow-left.png")}
          iconRight={require("../../assets/img/arrow-right.png")}
        />
        <HeaderTitle>Consumido no dia</HeaderTitle>
        <HeaderContainerHighlight>
          <HeaderTextCounterHighlight>{currentKcal}</HeaderTextCounterHighlight>
          <HeaderTextHighlight> /kcal</HeaderTextHighlight>
        </HeaderContainerHighlight>
      </HeaderContainer>
      <BodyContainer>
        <FlatList
          data={currentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemList item={item} />}
        />
        <FAB
          icon={<Feather name="plus" size={20} color="white" />}
          visible={true}
          placement="right"
          color="#7ED957"
          style={{ marginRight: 5, right: 5, bottom: 20 }}
          onPress={handleOneNewItem}
        />
        <FAB
          icon={<Feather name="info" size={20} color="white" />}
          visible={true}
          placement="right"
          color="#7ED957"
          style={{ marginRight: 35, right: 35, bottom: 20 }}
          onPress={handleViewData}
        />
      </BodyContainer>
      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalKcal onClose={() => setModalVisible(false)} data={currentKcal} />
      </Modal>
    </Container>
  );
}

export default Home;
