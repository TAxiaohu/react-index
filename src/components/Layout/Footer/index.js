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
            <li><Link to="/case">服务案例</Link></li>
            {/* <li><Link to="/news">新闻中心</Link></li> */}
            <li><Link to="/contact">联系我们</Link></li>
          </ul>
        </nav>
        <p>
          <span><Icon type="phone" /> 400-0011092</span>
          <span><Icon type="tablet" /> 133-8390-7636</span>
          <span><Icon type="mail" /> 877576953@qq.com</span>
        </p>
        <p>
          <span>上海在久实业有限公司 <a target="_blank" rel="noopener noreferrer" href="http://www.miitbeian.gov.cn">沪ICP备18011773号</a></span>
        </p>
      </div>
    );
  }
}

export default Footer;