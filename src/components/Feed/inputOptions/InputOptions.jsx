import React from 'react';

function InputOptions({ Icon, title, color, onClick }) {
  return (
    <div className="inputOptionsContainer flex items-center cursor-pointer hover:bg-[#ebebeb] transition p-2 rounded-md mt-2 gap-1">
      <Icon className="inputOptions" style={{ color }} />
      <h3 className="inputOptionsTitle font-normal">{title}</h3>
    </div>
  );
}

export default InputOptions;
