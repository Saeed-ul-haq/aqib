import React,{useState} from "react";
import logo from "../../assets/logo.jpg";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { DatePicker, Space, Input } from "antd";
import { Select, Table } from "antd";
import { AudioOutlined,MoreOutlined } from "@ant-design/icons";
import { Drawer,Button } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio';

const { Option } = Select;
export default function Dashboard() {
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  
  const onClose = () => {
    setVisible(false);
  };
  const dataSource = [
    {
      key: "1",
      tokenno: "1",
      mr_no: 32,
      p_name: " Downing Street",
      apttime: "",
      arrival_time: "05: 00 am",
      assess_time: "03: 00 pm",
      seen_time: "04: 00 pm",
      amount: 45,
      status: "viewed",
    },
  ];

  const columns = [
    {
        title: "",
        dataIndex: "tokenno",
        render: () => <img src='https://www.shifa.com.pk/wp-content/uploads/2020/10/Munir-Zafar-150x150.png' alt="" style={{width: '20px',borderRadius: '10px'}}/>
      },
    {
      title: "Token NO",
      dataIndex: "tokenno",
      key: "token no",
    },
    {
      title: "MR no",
      dataIndex: "mr_no",
      key: "mr no",
    },
    {
      title: "Patient Name",
      dataIndex: "p_name",
      key: "p.name",
    },
    {
      title: "Apt time",
      dataIndex: "apttime",
      key: "a.time",

      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
           defaultSortOrder: 'descend',

    },
    {
      title: "Arrival time",
      dataIndex: "arrival_time",
      key: "arrival time",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
           defaultSortOrder: 'descend',

    },
    {
      title: "Assess time",
      dataIndex: "assess_time",
      key: "assess time",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
           defaultSortOrder: 'descend',

    },
    {
      title: "Seen time",
      dataIndex: "seen_time",
      key: "seen time",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
           defaultSortOrder: 'descend',

    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      defaultSortOrder: 'descend',
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <p className="invite">{text} </p>
    },
    {
      title: "",
      dataIndex: "view",
      render: (text) => <p className="invite" onClick={showDrawer}>View </p>,
    },
    {
      title: "",
      dataIndex: "outline",
      render: (text) => <MoreOutlined />,
    },
  ];
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  return (
    <div className="dashbaord">
          <Drawer
        title="Profile"
        placement={'right'}
        width={500}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <div className='d-flex '>
            <div className='mr-30'>
               <div className="drawer-photo">
               <UserOutlined />
               </div>
            </div>
            <div className='user-info'>
                <p><b >Ijaz khan</b></p>
                <p>MR No: <b>203403</b></p>
                <p>Age: <b>34</b></p>
            </div>
            <div className="userplace">
                <p></p>
            </div>
        </div>
        <div className='p-2 d-flex align-items-center'>
        <Button onClick={onClose}>Cancel</Button>
        </div>
      </Drawer>
      <div className="topbar">
        <div>
          <div className="d-flex">
            <img
              src={logo}
              alt=""
              style={{ width: "40px", height: "35px", borderRadius: "50%" }}
            />
            <div>
              <p style={{ margin: "0px", marginLeft: "5px" }}>
                <b>Shifa</b>
              </p>
              <small>
                <b>International Hospital limited</b>
              </small>
            </div>
          </div>
        </div>
        <div className="right">
          <Select defaultValue="lucy" style={{ width: 120, margin: "0px 6px" }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
          <DatePicker style={{ margin: "0px 6px" }} />

          <div className="create">Create New Visit</div>
          <div className="search">Search patient</div>
          <div className="token">
            <p className="no-oftoken">1</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Next</p>
              <p>token no</p>
            </div>
          </div>
          <UserOutlined className="user-profile" />
        </div>
      </div>
      <div className="table-container">
        <div className="table-filter">
          <div>
            <p>OPD Appointment list</p>
          </div>
          <div className="d-flex align-items-center">
            <p style={{ margin: "0px" }}>
              <b>Safe Ehsan | NR</b>
            </p>
            <Select
              defaultValue="lucy"
              style={{ width: 150, margin: "0px 8px" }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
            <Search
              placeholder="input search text"
              onSearch={(onSearch) => {}}
              style={{ width: 150, margin: "0px 8px" }}
            />
          </div>
        </div>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
}
