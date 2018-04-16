import React, { Component } from 'react';
import { BackTop, Icon, Tooltip } from 'antd';
import styles from './BaseLayout.css';

import { Header, Content, Footer } from "../components/Layout";

class BaseLayout extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <Header />

        <Content {...this.props} />

        <Footer />

        <BackTop>
          <Tooltip title="返回顶部">
            <div className={styles.antBackTopInner}>
              <Icon type="arrow-up" />
            </div>
          </Tooltip>
        </BackTop>
      </div>
    );
  }
}

export default BaseLayout;