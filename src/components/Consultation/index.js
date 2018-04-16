import React, { Component } from 'react';
import { Row, Col, Icon } from "antd";
import { Link } from 'dva/router';
import styles from "./index.less";

const Article = [
  {
    time: '2017-05-22',
    title: '设计师JCY进行设计交流',
    brief: '品经理考虑要做什么产品才有价值，交互设计师考虑怎么把这个想法最有效的转化成一系列的界面展现给用户。除了展现，还有和用户的交互。这个展现、交互的过程就需要一定的表达能力。'
  },
  {
    time: '2017-05-22',
    title: '汇智绘美 编程未来——2015微软编程之美挑战赛',
    brief: 'xx编程之美挑战赛”是面向在校学生开展的大型编程比赛，致力于为年轻开发者提供国际一流水平的开发与交流机会，鼓励他们开发潜能、通过创新方法应对现实问题。本届大赛分为资格赛、初赛、复赛和决赛四轮，历时近两个月。'
  },
  {
    time: '2017-05-22',
    title: '助力学生创新实践改变世界',
    brief: '	想象有这么一个地方——来自世界各地的学生可以通力合作、共同创新，那里既充满大学学术的无限活力，也满载业界拼搏的实践真知。'
  },
  {
    time: '2017-05-22',
    title: '让计算更为透明、更加可控',
    brief: '移动设备和云应用的爆炸式增长让以上问题变得更为复杂，因为 IT 技术既要保护企业信息，又要让员工高效率地运用自己选择的应用和设备。'
  }
]

class Consultation extends Component {
  render() {
    return (
      <div className={styles.consultation}>
        <div className={styles.container}>
          <Row gutter={16}>
            <Col span={12}>
              <h2 className={styles.title}>最新资讯</h2>
              <Row style={{ paddingTop: '60px' }}>
                <Col span={12} style={{ padding: '0 15px' }}>
                  <Link to="/news-detail">
                    <img width="100%" src={require('../../assets/news1.jpg')} alt="" />
                  </Link>
                </Col>
                <Col className={styles.newRec} span={12} style={{ padding: '0 15px' }}>
                  <Link to="/news-detail">
                    <h3>协同创新大数据驱动旅游未来　</h3>
                  </Link>
                  <p className={styles.newtim}>
                    <Icon className={styles.newtim} type="dashboard" />2017-5-22
								</p>
                  <p className={styles.newcon}>
                    今日，由北京联合大学旅游学院打造的“旅游大数据协同创新中心”在京正式创立。
                    中心旨在推动中国旅游信息化领域内学术研究和支撑旅游公共信息服务
								</p>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <ul>
                {Article.map((item, index) => (
                  <li key={index}>
                    <Link to="/news-detail">
                      <div>
                        <span>{item.time}</span>
                        <h3>{item.title}</h3>
                      </div>
                      <p>{item.brief}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Consultation;