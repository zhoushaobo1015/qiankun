# qiankun demo案例

根据 [qiankun官网](https://qiankun.umijs.org/zh) 和 [博客](https://www.yuque.com/blueju/blog/huuie8)

搭建出了个小demo，实现互通

目前了解到:
    本地缓存(localStorage/sessionStorage)实现共享
    路由参数使用 ?name=xxx&age=18 ,如果使用 /a/b/c 这种类型无法获取

### 注意
#### main-app
config/config.ts 添加
qiankun: {
    master: {
        apps: [
            {
                name: 'sub-app-1',
                entry: '//localhost:8001',
            },
            {
                name: 'sub-app-2',
                entry: '//localhost:8002',
            },
        ],
    },
},

config/router.ts 添加
{
    name: 'sub-app-1',
    icon: 'smile',
    path: '/sub-app-1',
    microApp: 'sub-app-1',
    type: 'name1'
},

#### sub-app-1 or sub-app-2 
package.json    添加
"name": "sub-app-1",

umirc.ts    添加
qiankun: {
    slave: {},
},

src/app.ts 没有添加，有修改
export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('app1 unmount', props);
  },
};
