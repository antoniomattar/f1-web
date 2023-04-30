import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StreamChangeButton = (props) => {
  const [setLanguage] = useState(props.language);
  const navigate = useNavigate();
  function ChangeStreamLanguage() {
    if (props.newlang === 'English') {
      navigate('/');
      setLanguage('Arabic');
    } else if (props.newlang === 'Arabic') {
      navigate('/arabic');
      setLanguage('English');
    }
  }
  return (
    <div className='flex justify-center items-center'>
        <button
          className='bg-red-700 text-white justify-self-center m-2.5 font-sans font-bold mx-auto p-2 rounded-xl h-fit w-fit' onClick={()=>ChangeStreamLanguage()}
        >
          Change to {props.newlang}{' '}
        </button>
    </div>
  );
};

export default StreamChangeButton;
