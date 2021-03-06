import left from '../layouts/left_menu'
import header from '../layouts/header_menu'

export default [
  {
    path: '',
    component: () => import('../layouts/index'),
    children: [
      {
        path: '/',
        components: {
          left, header,
          page: () => import('../pages/home/index')
        }
      },
      {
        path: '/index',
        components: {
          left, header,
          page: () => import('../pages/home/index')
        }
      },
      {
        path: '/diff',
        components: {
          left, header,
          page: () => import('../pages/diff/index')
        }
      },
      {
        path: '/clipboard',
        components: {
          left, header,
          page: () => import('../pages/clipboard/index')
        }
      },
      {
        path: '/wordcloud',
        components: {
          left, header,
          page: () => import('../pages/wordcloud/index')
        }
      },
      {
        path: '/ace',
        components: {
          left, header,
          page: () => import('../pages/ace/index')
        }
      },
      {
        path: '/vuetouch',
        components: {
          left, header,
          page: () => import('../pages/vuetouch/index')
        }
      },
      {
        path: '/echarts',
        components: {
          left, header,
          page: () => import('../pages/echarts/index')
        }
      },
      {
        path: '/vue_data_editor',
        components: {
          left, header,
          page: () => import('../pages/vue_data_editor/index')
        }
      },
      {
        path: '/vuelidate',
        components: {
          left, header,
          page: () => import('../pages/vuelidate/index')
        }
      },
      {
        path: '/baidu_search',
        components: {
          left, header,
          page: () => import('../pages/baidu_search/index')
        }
      },
    ]
  },
]
