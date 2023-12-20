import { Image, StyleSheet, Text, View } from 'react-native';

export const renderOrder = ({ item }: any) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.Iconwashing}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4596/4596011.png',
          }}
        />
      </View>
      <View>
        <Text style={styles.IdOrder}>{item.id}</Text>
        <Text style={styles.IdOrder}>Trạng thái</Text>
      </View>
      <View>
        <Text>{item.status}</Text>
        <Text>Trạng thái</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Iconwashing: {
    width: 20,
    height: 20,
  },
  iconContainer: {
    borderColor: '#7EB9C1',
    borderWidth: 2.5,
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#5A617B',
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  IdOrder: {
    color: 'white',
  },
});
