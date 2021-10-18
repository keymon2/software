
const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'User',
    route: '/user',
    icon: 'cil-cursor',
    _children:[
      { 
        _tag: 'CSidebarNavItem',
        name: 'User',
        to: '/user/userprofile',  
      },
      {
        _tag:'CSidebarNavItem',
        name: 'Album',
        to:'/Album',
      },
      {
        _tag:'CSidebarNavItem',
        name: 'Chatting',
        to:'/Chat'
      },
      {
        _tag:'CSidebarNavItem',
        name: 'Chat',
        to:'/dev'
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'MyGroups',
    to: '/myGroups',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'SearchGroups',
    to: '/SearchGroups',
    icon: 'cil-cursor',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Today To do',
    to: '/myToDos',
    icon: 'cil-cursor',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Schedule',
    to: '/main',
    icon: 'cil-cursor',
  },
]

export default _nav
