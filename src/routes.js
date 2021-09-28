import React from 'react';
import Album from './views/pages/album/album'


const SidebarClendar = React.lazy(() => import('./views/pages/navCalendar/SidebarCalendar') )

const routes = [
    { path: '/', exact: true, name: 'Home' },
    {path: '/Album', exact: true, name: 'Album', component: Album}
];
export default routes;
 