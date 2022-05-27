export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu',
    route: '/menus',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Sub Menu',
        to: '/menus/sub-menu',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sub Menu1',
        to: '/menus/new',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sub Menu2',
        to: '/menus/new2',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sub Menu3',
        to: '/menus/new3',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sub Menu4',
        to: '/menus/new4',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sub Menu5',
        to: '/menus/new5',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'SampleFormIndex',
        to: '/menus/new6',
      }
    ]
  },
  {
    // _tag: 'CSidebarNavDropdown',
    // name: 'Pages',
    // route: '/pages',
    // icon: 'cil-star',
    // _children: [
    //   {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      // }
      // ,
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Register',
      //   to: '/register',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Error 404',
      //   to: '/404',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Error 500',
      //   to: '/500',
      // },
    // ]
  }
]

