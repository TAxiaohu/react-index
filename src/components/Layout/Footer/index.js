import React, { Component } from 'react';
import { Icon } from "antd";
import { Link } from 'dva/router';

import styles from "./index.less";

class Footer extends Component {
  render() {
    return (
      <div className={styles.Footer}>
        <nav>
          <ul>
            <li><Link to="/">网站首页</Link></li>
            <li><Link to="/about">关于我们</Link></li>
            <li><Link to="/service">服务案例</Link></li>
            <li><Link to="/news">新闻中心</Link></li>
            <li><Link to="/contact">联系我们</Link></li>
          </ul>
        </nav>
        <p>
          <span><Icon type="phone" />400-12345678</span>
          <span><Icon type="tablet" />12345678900</span>
          <span><Icon type="mail" />123456@123.com</span>
        </p>
      </div>
    );
  }
}

export default Footer;