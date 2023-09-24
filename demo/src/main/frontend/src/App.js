import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e)=>{
      setInputId(e.target.value);
  };
  const handleInputPw = (e)=>{
        setInputPw(e.target.value);
  };


  const onClickLogin = async () => {
      console.log("ID: ", inputId);
      console.log("PW: ", inputPw);
      const user = {
          inputId,
          inputPw
      };
      try {
          const response: Response = await fetch('/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
          });
          if(response.ok){
              alert('login success')
          }else{
              alert('login fail')
          }
      }catch (error){
          console.error('Error',error)
      }

  }

  // useEffect(() => {
  //   axios.post('/api/hello')
  //       .then(response => setInputId(response.data))
  //       .catch(error => console.log(error))
  // }, []);

  return (
      <>
          <div>
              <input
                  type="email"
                  name="input_id"
                  value={inputId}
                  onChange={handleInputId}
              />
              <input
                  type="password"
                  name="input_pw"
                  value={inputPw}
                  onChange={handleInputPw}
              />

              <button type="button" onClick={onClickLogin}>제출</button>
              <button type="button"> 회원가입 </button>
          </div>

      </>

  );
}

export default App;