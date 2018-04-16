import React, { Component } from 'react';
import { Row, Col } from "antd";
import styles from "./index.less";

const serviceItem = [
  {
    id: '01',
    title: '软件定制',
    describe: '通过专业的软件定制流程来满足各大企业不同的软件需求',
  },
  {
    id: '02',
    title: 'APP开发',
    describe: '	移动办公OA、社交通讯、儿童教育、商务平台、信息管理等各类手机应用',
  },
  {
    id: '03',
    title: '外包服务',
    describe: 'app开发、智能硬件开发、020平台开发、电商平台开发、大数据系统开发等',
  },
  {
    id: '04',
    title: 'O2O平台开发',
    describe: '打车软件。外卖外接、水电电商平台、上门服务平台等各大O2O平台',
  },
  {
    id: '05',
    title: '网站系统开发',
    describe: '具有丰富的网站系统开发经验和新颖的创意水平，以客户为中心的开发理念',
  },
  {
    id: '06',
    title: '智能硬件开发',
    describe: '智能水杯、智能手环、智能生活用品、智能家居、智慧社区等',
  }
]

class ServicePage extends Component {
  render() {
    return (
      <div className={styles.service}>
        <div className={styles.container}>
          <h2>我们的服务</h2>
          <Row>
            <ul className={styles.rowPadding}>
              {serviceItem.map((item, index) => (
                <Col key={index} className={styles.ColPage} span={8}>
                  <li>
                    <span>{item.id}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.describe}</p>
                    </div>
                  </li>
                </Col>
              ))}
            </ul>
          </Row>
        </div>
      </div>
    );
  }
}

export default ServicePage;