import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import { Layout,Menu, Row, Col, Typography } from 'antd';
import { InstagramOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Table,Tag } from 'antd';
import 'antd/dist/reset.css';



const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className="custom-footer">
      <Row justify="space-between">
        <Col xs={24} sm={12} md={8}>
          <div className="footer-sectionn">
            <h2>Forinvest</h2>
            <p>Bizimle iletişime geçin:</p>
            <p>info@forinvest.com</p>
            <p>+90 123 456 7890</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="footer-section">
            <h2>Hızlı Linkler</h2>
            <Menu mode="vertical" theme="dark">
              <Menu.Item key="1">Hakkımızda</Menu.Item>
              <Menu.Item key="2">Hizmetlerimiz</Menu.Item>
              <Menu.Item key="3">Müşteri Yorumları</Menu.Item>
              <Menu.Item key="4">Kariyer</Menu.Item>
            </Menu>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <div className="footer-section">
            <h2>Bizi Takip Edin</h2>
            <div className="social-icons">
              <InstagramOutlined />
              <TwitterOutlined />
              <LinkedinOutlined />
            </div>
          </div>
        </Col>
      </Row>
      <div className="footer-bottom">
        Forinvest ©{new Date().getFullYear()} | Tüm Hakları Saklıdır
      </div>
    </Footer>
  );
};



const UserPackageTable = () => {
  const packageData = [ //finansal web sitesine uyarlanabilir paket fiyatları ve izinler antd ile çekildi
    {
      key: '1',
      packageName: 'Basic',
      price: '$10',
      permissions: ['Read'],
    },
    {
      key: '2',
      packageName: 'Premium',
      price: '$20',
      permissions: ['Read', 'Write'],
    },
    {
      key: '3',
      packageName: 'Enterprise',
      price: '$50',
      permissions: ['Read', 'Write', 'Delete'],
    },
   
  ];

  const packageColumns = [
    {
      title: 'Package Name',
      dataIndex: 'packageName',
      key: 'packageName',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Permissions',
      dataIndex: 'permissions',
      key: 'permissions',
      render: (permissions) => (
        <ul>
          {permissions.map((permission, index) => (
            <li key={index}>{permission}</li>
          ))}
        </ul>
      ),
    },
  ];

  return <Table dataSource={packageData} columns={packageColumns} />;
};



const ImportantNews = () => {
  
  

  
};
const IncreasedStocksTable = () => {
  const [stocksData] = useState([
    {
      key: '1',
      name: '1000 Yatırımlar Holding',
      symbol: 'BINHO',
      price: 120,
      change: 10,
    },
    {
      key: '2',
      name: 'Türk Hava Yolları',
      symbol: 'THYAO',
      price: 95,
      change: 5,
    },
    {
      key: '3',
      name: 'Türkiye Şişe ve Cam Fabrikalari A.Ş.',
      symbol: 'Şişecam',
      price: 80,
      change: 8,
    },
    {
      key: '4',
      name: 'Avrupakent Gayrimenkul Yatirim Ortakligi AS',
      symbol: 'AVPGY',
      price: 150,
      change: 15,
    },
    // Buraya istediğiniz kadar veri ekleyebilirsiniz
  ]);
 
  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Change',
      dataIndex: 'change',
      key: 'change',
      render: (change) => (
        <Tag color={change > 0 ? 'green' : 'red'}>{change > 0 ? `+${change}` : change}</Tag>
      ),
    },
  ];

  return (
    <div>
      <h2 className='yildiz'>Haftanın yıldızları</h2>
      <Table columns={columns} dataSource={stocksData} />
    </div>
  );
};


function LoginForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  
  
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Burada bir API'den veri çekmek için örnek bir fetch isteği yapıyoruz
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
       const data  = await response.json();

      // Kullanıcı adı ve şifre kontrolü yapılıyor
      const foundUser = data.find(
        (user) => user.username === username && user.email === email

      );

      if (foundUser) {
        setLoginStatus(<span className="login-message login-success">Kullanıcı girişi başarılı</span>);
      } else {
        setLoginStatus(<span className="login-message login-error">Kullanıcı adı veya şifre yanlış!</span>);
      }
    } catch (error) {
      console.error('Veri alınamadı veya işlenemedi: ', error);
    }
  };


    
  return (
    

    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Kullanıcı Adı:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            value={email}
            onChange={handlePasswordChange} />
        </div>
        <button type="submit">Giriş Yap</button>
        <div className='tablee-container'> 
          <IncreasedStocksTable /> 
        </div>
        
      <div className='yetki'>
      <h1>User Packages price and Permissions</h1>
      <UserPackageTable />
    </div>
      
      
      </form>
      
      
      <p>{loginStatus}</p>
      
    
      <>
      {/* LoginForm içeriği */}
      <Footer style={{ textAlign: 'center' }}>
        <CustomFooter />
      </Footer>
    </>
    </div>
   
    
  

  );
}




export default LoginForm;