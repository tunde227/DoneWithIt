import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparatoR";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
]

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = (message) => {
        // Delete the message from messages array
        setMessages(messages.filter(m => m.id !== message.id));

        // call the server
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => <ListItem
                    title={item.title}
                    subtitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message Selected", item)}
                    renderRightActions={() =>
                        <ListItemDeleteAction onPress={() => handleDelete(item)}/>}/>}
                ItemSeparatorComponent={ListItemSeparator}/>
        </Screen>
    );
}

const styles = StyleSheet.create({});