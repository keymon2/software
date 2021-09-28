
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
        to:'/user/album',
      },
      {
        _tag:'CSidebarNavItem',
        name: 'PostsX',
        to:'/user/postsX'
      },
      {
        _tag:'CSidebarNavItem',
        name: 'Chat',
        to:'/user/chat'
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
