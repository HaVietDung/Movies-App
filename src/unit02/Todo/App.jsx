import { Row, Col } from 'antd'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import { useState } from 'react'

export default function TodoApp() {
    const [nameTodo, setNameTodo] = useState("");
    const [listData, setListData] = useState([]);//currentList
    const [idTodo, setIdTodo] = useState(1);
    // Luu ten cong viec vao trong state
    const changeNameTodo = (event) => {
        let value = event.target.value;
        // if(value==' ') value='';
        // console.log(value);
        if (value.length >= 0) {
            setNameTodo(value)
        }
    }
    //them moi cong viec
    const addTodo = (work = '') => {
        work = work.trim();
        if (work.length >= 0) {
            setIdTodo(idTodo + 1);
            setListData([...listData, {
                id: idTodo,
                name: work,
                done: false
            }]);
            setNameTodo(null);
        }
    }

    // xoa cong viec
    const removeItemTodo = (id) => {
        // console.log(id);
        if (!id) return;
        const newListData = listData.filter((item) => item.id !== id)
        setListData(newListData)
    }

    // hoan tahnh cong viec
    const finishToto = (id) => {
        const newWork = listData.map(item => {
            return item.id === id ? {...item, done: !item.done} : item;
    
        } )
        if (newWork !== undefined){
            setListData(newWork);
        }
    }

    return (
        <Row>
            <Col span={12} offset={6}>
                <AddTodo 
                    change={changeNameTodo}
                    add={addTodo}
                    value={setNameTodo}   
                />
                <ListTodo
                    onRemove={removeItemTodo}
                    data={listData} 
                    change={removeItemTodo} 
                    finish = {finishToto}
                />
            </Col>
        </Row>
    )
}