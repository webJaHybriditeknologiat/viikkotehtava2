import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      
      {!modalVisible && (
        <View style={styles.homeView}>
          <Pressable
            onPress={() => setModalVisible(true)}>
            <Text style={styles.homeText}>Show Modal message</Text>
          </Pressable>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalCloseText}>Close</Text>
            </Pressable>
          </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

    homeView: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      },
      homeText: {
        fontSize: 16,
      },

    modalView: { 
      backgroundColor: "#fbfbfb", 
      marginTop: 240,
      padding: 24, 
      alignItems: "center", 
      elevation: 3, 
      width: '100%',
      },
      modalText: {
        marginBottom: 24,
        textAlign: "center",
        fontSize: 16,
      },
      modalCloseText: {
        marginTop: 24,
        textAlign: "center",
        fontSize: 16,
      },

});
