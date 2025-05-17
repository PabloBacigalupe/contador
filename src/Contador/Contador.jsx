import React, {useState} from 'react';

const Contador = () => {
    const [count, setCount] = useState(0);


    const aumentar = () => {
        setCount(count + 1);
    };


    const disminuir = () => {
        setCount(count - 1);
    }

    const resetear = () => {
        setCount(0);
      };

    return (
        <div style={{textAlign:'center',marginTop:'2rem'}}>
            <h1> {count} </h1>

            <button onClick={disminuir} style={{ marginRight: '1rem' }}>➖</button>
            <button onClick={aumentar} style={{  }}>➕</button><br/>
            <button onClick={resetear} style={{ marginTop: '2rem' }}> Reset</button>
            
        
        </div>
    )


}

export default Contador;
