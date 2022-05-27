import React from 'react';

const SubMenu = React.lazy(() => import('./views/menus/sub-menu/SubMenu'));
const SubMenu1 = React.lazy(() => import('./views/menus/new/SubMenu1'));
const SubMenu2 = React.lazy(() => import('./views/menus/new2/SubMenu2'));
const SubMenu3 = React.lazy(() => import('./views/menus/new3/SubMenu3'));
const SubMenu4 = React.lazy(() => import('./views/menus/new4/SubMenu4'));
const SubMenu5 = React.lazy(() => import('./views/menus/new5/SubMenu5'));
const SampleFormIndex = React.lazy(() => import('./views/menus/new6/SampleFormIndex'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/menus/sub-menu', name: 'Sub Menu', component: SubMenu },
  { path: '/menus/new', name: 'Sub Menu1', component: SubMenu1 },
  { path: '/menus/new2', name: 'Sub Menu2', component: SubMenu2 },
  { path: '/menus/new3', name: 'Sub Menu3', component: SubMenu3 },
  { path: '/menus/new4', name: 'Sub Menu4', component: SubMenu4 },
  { path: '/menus/new5', name: 'Sub Menu5', component: SubMenu5 },
  { path: '/menus/new6', name: 'Sub SampleFormIndex', component: SampleFormIndex},

];

export default routes;
