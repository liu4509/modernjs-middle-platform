import './App.css';
import { Typography, Button } from 'antd';

const { Title } = Typography;

const App = () => (
  <div>
    <Title>This is a landing page</Title>
    <Button type="primary" href="/console/dashboard">
      Go to console
    </Button>
  </div>
);

export default App;
