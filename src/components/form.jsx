import React, { useState, useEffect, useRef } from 'react';

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = x => {
    setInput(x.target.value);
  };
  const handleSubmit = x => {
    x.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      {props.edit ? (
        <>
          <input
            placeholder='Atualizar a tarefa'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='task-input edit'
          />
          <button onClick={handleSubmit} className='task-button edit'>
            Atualizar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Adicione uma tarefa'
            value={input}
            onChange={handleChange}
            name='text'
            className='task-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='task-button'>
            Adicionar
          </button>
        </>
      )}
    </form>
  );
}

export default Form;