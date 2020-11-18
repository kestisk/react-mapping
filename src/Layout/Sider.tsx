import React, { useEffect, useState } from "react";
import "../styles/Layout.css";
import { getVersion } from "../Services/version";
const Sider = () => {
  const [version, setVersion] = useState<string>();
  const fetchAPI = async () => {
    const res = await getVersion();
    debugger;
    if (!res.isError) {
      setVersion(res.data);
    }
  };
  useEffect(() => {
    fetchAPI();
  });
  return (
    <div className="sider">
      <div>Fleet management v{version}</div>
    </div>
  );
};
export default Sider;
