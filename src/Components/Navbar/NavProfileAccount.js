import React from 'react'

const NavProfileAccount = ({toggle}) => {
    return (
      <>
        <button onClick={toggle} className='button btn-blue'> your profile </button>
      </>
    );
};
    
export default NavProfileAccount;
