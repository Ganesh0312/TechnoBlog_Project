import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashboarcCom/DashSidebar";
import DashProfile from "../components/DashboarcCom/DashProfile";
import DashPosts from "../components/DashboarcCom/DashPosts";
import DashUsers from "../components/DashboarcCom/DashUsers";
import DashComments from "../components/DashboarcCom/DashComments";
import DashboardComp from "../components/DashboarcCom/DashboardComp";
export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* Profile */}
      {tab === "profile" && <DashProfile />}

      {/* posts */}
      {tab === "posts" && <DashPosts />}

      {tab === "users" && <DashUsers />}

      {tab == "comments" && <DashComments />}

      {tab == "dash" && <DashboardComp />}
    </div>
  );
}
