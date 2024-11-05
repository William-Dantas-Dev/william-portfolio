import React from 'react'

const TabButton = ({ active, selectTab, title  } : {
  active: boolean,
  selectTab: () => void,
  title: string,
}) => {
  const buttonClass = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
        {title}
      </p>
    </button>
  )
}

export default TabButton
