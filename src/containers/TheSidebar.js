import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import SidebarCalendar from '../views/pages/navCalendar/SidebarCalendar'


// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebar.sidebarShow)
  console.log("start show")
  console.log(show)
  
  const imgA = "https://youimg1.tripcdn.com/target/100h1f000001grvlmE33E_C_750_500.jpg?proc=source%2Ftrip"
  return (
    <CSidebar
      size = "sm"
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <SidebarCalendar/>
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
