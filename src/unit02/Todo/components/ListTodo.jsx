import { Row, Col, List, Checkbox, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const ListTodo = (props) => {

    const { onRemove = () => { } } = props;
    const deleteByValue = value => {
     
        onRemove(value)
        
    }
  
    return (
        <Row>
            <Col span={24}>
                <List
                    itemLayout="horizontal"
                    dataSource={props.data}
                    renderItem={(item, index) => (
                        <List.Item key={index}>
                            <List.Item.Meta
                                avatar={<Checkbox onChange={(() => props.finish(item.id))}
                                        checked = {item.done}
                                />}
                                title={<span style={item.done ? {color: 'red', textDecoration: 'line-through'} : null}>{item.name}</span>}
                            />
                            <DeleteOutlined onClick={() => deleteByValue(item.id)}/>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    )
}
ListTodo.propTypes = {
    data: PropTypes.array.isRequired,
    finish: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}
export default ListTodo 