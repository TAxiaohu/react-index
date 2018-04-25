import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, message, Spin } from "antd";
import styles from "./Contact.less";
import { setTimeout } from 'core-js';

const { TextArea } = Input;
const FormItem = Form.Item;
@Form.create()
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
          message.success('发送成功！');
          this.props.form.resetFields();
        }, 1500);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.body}>
        <Spin spinning={this.state.loading}>
          <Row gutter={48} style={{ margin: 0 }}>
            <Col span={12}>
              <p style={{ lineHeight: 1.8, fontSize: 14 }}>固定电话: 400-0011092</p>
              <p style={{ lineHeight: 1.8, fontSize: 14 }}>移动电话: 133-8390-7636</p>
              <p style={{ lineHeight: 1.8, fontSize: 14 }}>联系邮箱: 877576953@qq.com</p>
              <img src={require('../assets/contact.jpg')} alt="" />
            </Col>
            <Col span={12}>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入姓名!' }],
                  })(
                    <Input placeholder="姓名" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('phone', {
                    rules: [
                      { required: true, message: '请输入您的联系电话' }
                    ],
                  })(
                    <Input placeholder="联系电话" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remark')(
                    <TextArea rows={4} placeholder="消息" />
                  )}
                </FormItem>

                <FormItem>
                  <Button type="primary" htmlType="submit">
                    发送
                </Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}

export default Contact;