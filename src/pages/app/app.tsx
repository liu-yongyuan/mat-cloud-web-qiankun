import React from 'react';

import { Layout } from 'antd';

import './app.less';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  console.log(`NODE_ENV=${process.env.NODE_ENV}`);
  console.log(`BASE_ENV=${process.env.BASE_ENV}`);

  return <Layout></Layout>;
};

export default App;
