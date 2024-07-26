import React, { ReactNode } from 'react';

const AdminLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <div>
        <header>Admin Page Header</header>
        <main>{children}</main>
        <footer>Landing Page Footer</footer>
    </div>
  );
};

export default AdminLayout;
