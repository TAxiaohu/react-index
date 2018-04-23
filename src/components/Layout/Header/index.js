import React, { Component } from 'react';
import { Link } from 'dva/router';

import styles from './index.less';

const nvbIndexMap = {
  '#/': 0,
  '#/about': 1,
  '#/case': 2,
  // '#/news': 3,
  '#/contact': 3,
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: nvbIndexMap[window.location.hash] * 90,
      scrollNav: false,
      pathname: window.location.hash,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  componentWillReceiveProps() {
    const { hash } = window.location;
    console.log(hash);
    this.setState({ pathname: hash, left: nvbIndexMap[hash] * 90 })
  }

  handleScroll = () => {
    const scrollTop = window.visualViewport.pageTop;
    if (scrollTop >= 20) {
      this.setState({ scrollNav: true });
    } else {
      this.setState({ scrollNav: false });
    }
  };

  handleEnter = (index) => { // 导航菜单栏鼠标移入事件
    this.setState({ left: index * 90 });
  }

  handleMouse = (index) => { // 导航菜单栏鼠标移除事件
    const { pathname } = this.state;
    this.setState({ left: nvbIndexMap[pathname] * 90 });
  }

  render() {
    const { scrollNav } = this.state;
    return (
      <div className={[styles.Header, scrollNav && styles.scrollNavbar].join(' ')}>
        <h2 className={[styles.title, scrollNav && styles.scrollLogo].join(' ')}>
          <span>上海在久实业有限公司</span>
        </h2>
        <ul className={[styles.navBar, scrollNav && styles.scrollNav].join(' ')}>
          <li style={{ left: `${this.state.left}px` }}></li>
          <li onMouseEnter={() => this.handleEnter(0)} onMouseLeave={this.handleMouse}>
            <Link to="/">网站首页</Link>
          </li>
          <li onMouseEnter={() => this.handleEnter(1)} onMouseLeave={this.handleMouse}>
            <Link to="/about">关于我们</Link>
          </li>
          <li onMouseEnter={() => this.handleEnter(2)} onMouseLeave={this.handleMouse}>
            <Link to="/case">服务案列</Link>
          </li>
          {/* <li onMouseEnter={() => this.handleEnter(3)} onMouseLeave={this.handleMouse}>
            <Link to="/news">新闻中心</Link>
          </li> */}
          <li onMouseEnter={() => this.handleEnter(3)} onMouseLeave={this.handleMouse}>
            <Link to="/contact">联系我们</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;