import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { microAppsName } from './micro-app';
import { registerMicroApps, start } from 'qiankun';
import router from './router/micro-router';
/**
 * 主体函数
 */
function render() {
  console.log(`NODE_ENV=${process.env.NODE_ENV}`);
  console.log(`BASE_ENV=${process.env.BASE_ENV}`);

  const rootContainer = document.getElementById('root')!;
  const root = createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
  );
}
// 渲染主体
render();

/**
 * 微应用注册
 */
function microAppInit() {
  registerMicroApps([
    {
      name: 'mat-cloud-qiankun-react',
      entry: 'http://localhost:3000/',
      activeRule: '/mat-cloud-qiankun-react/books',
      container: '#mat-cloud-web-qiankun',
    },
  ]);
}

/**
 * 微应用启动
 */
function microAppStart() {
  // 启动乾坤
  start({
    prefetch: true, // 取消预加载
    sandbox: {
      // 样式隔离特性
      experimentalStyleIsolation: true,
    },
  });
}

// 注册微应用
microAppInit();
microAppStart();
