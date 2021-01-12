import { Row, Col, Divider, Button, Typography } from 'antd';
import { DeleteOutlined, PushpinTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Title, Text } = Typography;
const style = { background: '#0000', padding: '8px 0', boxShadow: '0px 1px 6px', paddingTop: '23px', borderRadius: '6px'};
const styleB = { background: '#0000', padding: '8px 0', boxShadow: '0px 1px 6px', paddingTop: '23px', borderRadius: '6px', position: 'relative', top: '22px'};
const btn = {padding: '6px 22px', borderRadius: '6px', position: 'relative', right: '-255px',top:'-14px',  marginLeft: '6px'};
const letter = {paddingLeft: '12px'}
const icon = {fontSize: '18px', paddingLeft: '9px'}

const grid = () => {
    return (
    <>
    <Divider orientation="left"></Divider>
    <Row gutter={[16, 24]} align="middle" justify="space-around">
      <Col className="gutter-row" span={9} style={style}>
        <Title level={4} style={letter}>SandalWood</Title>
        <Text style={letter}>Kitiuru Road</Text>
        <DeleteOutlined style={icon} />
        <PushpinTwoTone style={icon}/>
        <Button type="primary" size="large" style={btn}>12</Button>
        <Button style={btn} size="large">3</Button>
      </Col>
      <Col className="gutter-row" span={9} style={style}>
      <Title level={4} style={letter}>Astoria</Title>
      <Text style={letter}>Kitiuru Road</Text>
      <DeleteOutlined style={icon}/>
        <PushpinTwoTone style={icon}/>
        <Button type="primary" style={btn} size="large">12</Button>
        <Button style={btn} size="large">3</Button>
      </Col>
      <Col className="gutter-row" span={9} style={styleB}>
      <Title level={4} style={letter}>Pearl</Title>
      <Text style={letter}>Kitiuru Road</Text>
      <DeleteOutlined style={icon}/>
        <PushpinTwoTone style={icon}/>
        <Button type="primary" style={btn} size="large">12</Button>
        <Button style={btn} size="large">3</Button>
      </Col>
      <Col className="gutter-row" span={9} style={styleB}>
      <Title level={4} style={letter}>SandalWood</Title>
        <Text style={letter}>Kitiuru Road</Text>
        <DeleteOutlined style={icon}/>
        <PushpinTwoTone style={icon}/>
        <Button type="primary" style={btn} size="large">12</Button>
        <Button style={btn} size="large">3</Button>
      </Col>
    </Row>
  </>
    );
};

export default grid