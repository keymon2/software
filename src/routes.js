import React from 'react';
import Schedule from './views/pages/mainPage/Schedule'
const SidebarClendar = React.lazy(() => import('./views/pages/navCalendar/SidebarCalendar') )

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/main', exact: true, name: 'Main', component: Schedule }
];
export default routes;
 