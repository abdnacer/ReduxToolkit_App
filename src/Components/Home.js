import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, selectCount } from '../Features'

const Home = () => {
  const count = useSelector(selectCount)
  const value = useSelector(state => state.counter.value)
  console.log(value)
  const dispatch = useDispatch()
  // const [incrementAmount, setIncrementAmount] = useState('2');
  return (

    <View style={styles.container}>
      <Button title="decrement" disabled={value <= 0} onPress={() => value > 0 && dispatch(decrement())} />
      <Text style={styles.text}>{value}</Text>
      <Button title="increment" onPress={() => dispatch(increment())} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 20,
    padding: 15
  },
});