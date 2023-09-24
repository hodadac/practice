import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e)=>{
      setEmail(e.target.value);
  };
  const handlePassword = (e)=>{
        setPassword(e.target.value);
  };


  const onClickLogin = async () => {
      console.log("ID: ", email);
      console.log("PW: ", password);
      const user = {
          email,
          password
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
              console.log(response.json())
          }else{
              alert('login fail')
          }
      }catch (error){
          console.error('Error',error)
      }

  }

  // useEffect(() => {
  //   axios.post('/api/hello')
  //       .then(response => setemail(response.data))
  //       .catch(error => console.log(error))
  // }, []);

  return (
      <>
          <div>
              <input
                  type="email"
                  name="input_id"
                  value={email}
                  onChange={handleEmail}
              />
              <input
                  type="password"
                  name="input_pw"
                  value={password}
                  onChange={handlePassword}
              />

              <button type="button" onClick={onClickLogin}>제출</button>
              <button type="button"> 회원가입 </button>
          </div>

      </>

  );
}

export default App;