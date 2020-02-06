import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, HeaderNavigation, IconSidebar } from "./layouts";

// Route Views
import Analytics from "./views/Analytics";
import OnlineStore from "./views/OnlineStore";
import BlogOverview from "./views/BlogOverview";
import UserProfile from "./views/UserProfile";
import UserProfileLite from "./views/UserProfileLite";
import EditUserProfile from "./views/EditUserProfile";
import Login from "./views/Login";
import Register from "./views/Register";
import ForgotPassword from "./views/ForgotPassword";
import ChangePassword from "./views/ChangePassword";
import FileManagerList from "./views/FileManagerList";
import FileManagerCards from "./views/FileManagerCards";
import TransactionHistory from "./views/TransactionHistory";
import Calendar from "./views/Calendar";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import HeaderNav from "./views/HeaderNavigation";
import IconSidebarView from "./views/IconSidebar";
import Home from "./views/Home";

const BlankIconSidebarLayout = ({ children }) => (
  <IconSidebar noNavbar noFooter>
    {children}
  </IconSidebar>
);

export default [
  {
    path: "/",
    exact: true,
    layout: IconSidebar,
    component: Home 
  },
  {
    path: "/analytics",
    layout: IconSidebar,
    component: Analytics
  },
  {
    path: "/ecommerce",
    layout: IconSidebar,
    component: OnlineStore
  },
  {
    path: "/blog-overview",
    layout: IconSidebar,
    component: BlogOverview
  },
  {
    path: "/user-profile",
    layout: IconSidebar,
    component: UserProfile
  },
  {
    path: "/user-profile-lite",
    layout: IconSidebar,
    component: UserProfileLite
  },
  {
    path: "/edit-user-profile",
    layout: IconSidebar,
    component: EditUserProfile
  },
  {
    path: "/login",
    layout: BlankIconSidebarLayout,
    component: Login
  },
  {
    path: "/register",
    layout: BlankIconSidebarLayout,
    component: Register
  },
  {
    path: "/forgot-password",
    layout: BlankIconSidebarLayout,
    component: ForgotPassword
  },
  {
    path: "/change-password",
    layout: BlankIconSidebarLayout,
    component: ChangePassword
  },
  {
    path: "/file-manager-list",
    layout: IconSidebar,
    component: FileManagerList
  },
  {
    path: "/file-manager-cards",
    layout: IconSidebar,
    component: FileManagerCards
  },
  {
    path: "/transaction-history",
    layout: IconSidebar,
    component: TransactionHistory
  },
  {
    path: "/calendar",
    layout: IconSidebar,
    component: Calendar
  },
  {
    path: "/add-new-post",
    layout: IconSidebar,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: BlankIconSidebarLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: IconSidebar,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: IconSidebar,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: IconSidebar,
    component: BlogPosts
  },
  {
    path: "/header-navigation",
    layout: HeaderNavigation,
    component: HeaderNav
  },
  {
    path: "/icon-sidebar-nav",
    layout: IconSidebar,
    component: IconSidebarView
  }
];
