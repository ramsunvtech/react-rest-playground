import React, { useState } from 'react'
import { TabList, TabListItem } from '@/styled/tabs'

function Tabs(props) {
  const { children, defaultTabIndex = 0 } = props
  const [activeTabIndex, setActiveTab] = useState(defaultTabIndex)

  function onChangeTabEvent(tabIndex) {
    setActiveTab(tabIndex)
  }

  return (
    <div data-testid="tabs" className="rpg-tabs">
      <TabList className="rpg-tab-list">
        {children.map(({ props: { id, title } }, tabIndex) => (
          <TabListItem
            key={id}
            id={id}
            isActive={tabIndex === activeTabIndex}
            onClick={() => {
              onChangeTabEvent(tabIndex)
            }}
            className="rpg-tab-item"
          >
            {title}
          </TabListItem>
        ))}
      </TabList>
      <div data-testid="tab-content" className="rpg-tab-content">
        {children.length > 0 && children[activeTabIndex]}
      </div>
    </div>
  )
}

const TabsItem = ({ children }) => children
Tabs.Item = TabsItem

export default Tabs
