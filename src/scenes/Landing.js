import React, { useEffect } from 'react';

const Landing = (props) => {
  useEffect(() => {
    setTimeout(() => props.history.push('/list'), 3000);
  }, [props.history]);

  return (
    <div className='landing-page' onClick={() => props.history.push('/list')}>
      Expense Manager
    </div>
  )
}

export default Landing;
