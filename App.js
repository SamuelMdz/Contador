
import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';

const style = {
  fontSize: 38,
};

const NuevoComponente = ({title}) => {
  return <Text style={style}>{title}</Text>;
};

const App = () => {

  const [seconds, setSeconds] = useState(0);
  const [minutos, setMinutos] = useState(0);


    useEffect(() => {

      const interval = setInterval(() => {
        setSeconds (seconds => seconds + 1);
      }, 1000);

        if (seconds == 60) {
          setMinutos (minutos => minutos + 1);
          setSeconds (0);
        };
        return () => clearInterval(interval);

  }, [seconds]);




  return (
    <View>
      <NuevoComponente title="Contador:" />
      <Text style={{fontSize: 40}}> {minutos < 10 ? '0' + minutos : minutos} : {(seconds < 10) ? '0' + seconds : seconds}</Text>

    </View>
  );

};




export default App;