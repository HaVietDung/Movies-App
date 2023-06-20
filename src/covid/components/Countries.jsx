import { Row, Col, Table} from 'antd';
import { NumericFormat } from 'react-number-format';

const columns = [
    {
        title: 'Country',
        dataIndex: 'Country',
        key: 'CoutryCode'
    },
    {
        title: 'Country Code',
        dataIndex: 'CountryCode',
        key: 'CountryCode'
    },
    {
        title: 'New Confirmed',
        dataIndex: 'NewConfirmed',
        key: 'CoutryCode'
    },
    {
        title: 'Total Confirmed',
        dataIndex: 'TotalConfirmed',
        key: 'CoutryCode',
        render: (text) => <NumericFormat
                            value={text}
                            allowLeadingZeros 
                            thousandSeparator=","
                            displayType="text"
                           /> 
    },
    {
        title: 'New Deaths',
        dataIndex: 'NewDeaths',
        key: 'CoutryCode'
    },
    {
        title: 'New Recovered',
        dataIndex: 'NewRecovered',
        key: 'CoutryCode'
    },
    {
        title: 'Total Recovered',
        dataIndex: 'TotalRecovered',
        key: 'CoutryCode'
    },
    
]



const Countries = ({countries}) => {

    return (
        <Row style={{ marginBottom: '30px' }}>
            <Col span={24}>
                <Table columns={columns}
                        dataSource={countries}
                        rowKey='ID'>
                        
                </Table>
            </Col>
        </Row>
    )
}

export default Countries