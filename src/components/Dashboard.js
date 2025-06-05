import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [role, setRole] = useState('');

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    setRole(userRole);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {role === 'admin' && <p>Welcome Admin!</p>}
      {role === 'user' && <p>Welcome User!</p>}
    </div>
  );
};

export default Dashboard;