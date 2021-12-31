import React, { useState } from 'react'

function Tabs(props) {
  const { children, defaultTabIndex = 0 } = props
  const [activeTabIndex, setActiveTab] = useState(defaultTabIndex)

  function onChangeTabEvent(tabIndex) {
    setActiveTab(tabIndex)
  }

  return (
    <div className="tabs">
      <ul className="tab-list">
        {children.map(({ props: { id, title } }, tabIndex) => (
          <li
            key={id}
            id={id}
            className={tabIndex === activeTabIndex ? 'active' : ''}
            onClick={() => {
              onChangeTabEvent(tabIndex)
            }}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className={'tab-content'}>
        {children.length > 0 && children[activeTabIndex]}
      </div>
    </div>
  )
}

const TabsItem = ({children}) => children;
Tabs.Item = TabsItem;

export default Tabs
