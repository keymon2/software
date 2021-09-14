import React from 'react';

const SidebarClendar = React.lazy(() => import('./views/pages/main/SidebarCalendar') )

const routes = [
    { path: '/', exact: true, name: 'Home' },
];
export default routes;
 