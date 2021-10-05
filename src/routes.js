import React from 'react';
import Schedule from './views/pages/mainPage/'
import Daytimedev from './views/pages/mainPage/Daytimedev'
import Stat from './views/pages/mainPage/Daytimedev'
const SidebarClendar = React.lazy(() => import('./views/pages/navCalendar/SidebarCalendar') )


const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/main', exact: true, name: 'Main', component: Schedule },
    { path: '/dev', exact: true, name: 'DEV', component: Daytimedev },
    { path: '/dev', exact: true, name: 'DEV', component: Daytimedev }

];
export default routes;
