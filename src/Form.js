import React, { useState } from 'react';
import axios from 'axios';

const Form = props => {
  const [username, setUsername] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${username}`).then(resp => {
      props.onSubmit(resp.data);
      setUsername('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Github username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default Form;
