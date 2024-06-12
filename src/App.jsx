import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(0);

  const calculateAge = () => {
      const today = new Date();
      const birthdateDate = new Date(birthdate);

      let age = today.getFullYear() - birthdateDate.getFullYear();
      setAge(age);
  };

  const resetCalculator = () => {
      setBirthdate('');
      setAge(0);
    };

  return (
    <>
    
      <div className="app">
             <h2>Age Calculator</h2>

        
                        <h4>Date of Birth</h4>
                        <input className='date' type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />

                        <button className='button-65' onClick={calculateAge}>Calculate Age</button>
                        <button className="button-65" onClick={resetCalculator}> Reset</button>
                        <span>The Age is : {age > 0 ? ` ${age}` : ''}</span>
                    
                    </div>
          
        </>
    );
};
export default App