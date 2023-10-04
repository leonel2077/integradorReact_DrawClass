import React from 'react';
import DrawClass from './components/DrawClass'; // Asegúrate de importar el componente

const CLASS_UML = {
  name: 'Person',
  attributes: ['+name:str', '+phoneNumber:str', '+emailAddress:str'],
  methods: ['+purchaseParkingPass()'],
  borderColor: 'red',
  headColor: 'pink',
  textColor: '#333333',
};

function App() {
  return (
    <div className="App">
      <DrawClass data={CLASS_UML} />
    </div>
  );
}

export default App;
