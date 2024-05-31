import React from 'react';

const HeaderIcon = ({ Icon, name }) => {
  return (
    <div className='hover:bg-black  transition rounded text-black  hover:text-white cursor-pointer p-2'>
      <Icon className="" size={25} />
    </div>
  );
};

export default HeaderIcon;