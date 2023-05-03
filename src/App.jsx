import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
const App = (props) => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout {...props} />} />
      <Route path="admin/*" element={<AdminLayout {...props}  />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/auth/sign-in"  />} />
    </Routes>
  );
};

export default App;
