import { Layout } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

export default function App() {
  return (
    <Layout>
      <Header>Header With Qiankun</Header>
      <Sider>
        <NavLink to={'/'}>Root</NavLink>
        <NavLink to={'/mat-cloud-qiankun-react/books'}>Books With React-Qiankun</NavLink>
      </Sider>
      <Content id="mat-cloud-web-qiankun"></Content>
      <Footer>Footer With Qiankun</Footer>
    </Layout>
  );
}
