export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: 'sub-app-1',
    icon: 'smile',
    path: '/sub-app-1',
    microApp: 'sub-app-1',
    type: 'name1'
  },
  {
    name: 'sub-app-2',
    icon: 'smile',
    path: '/sub-app-2',
    microApp: 'sub-app-2',
    type: 'name2'
  },
  {
    component: './404',
  },
];
