import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const MilkProductions = Loadable(lazy(() => import('views/milk-production/MilkProductions')));
const MilkProduction = Loadable(lazy(() => import('views/milk-production/MilkProduction')));
const CattleDetails = Loadable(lazy(() => import('views/cattle/CattleDetails')));
const CattleFood = Loadable(lazy(() => import('views/cattle-food/CattleFood')));
const CattleFoods = Loadable(lazy(() => import('views/cattle-food/CattleFoods')));
const Expenses = Loadable(lazy(() => import('views/expense/Expenses')));
const Expense = Loadable(lazy(() => import('views/expense/Expense')));
const Reports = Loadable(lazy(() => import('views/report/Reports')));
const AddDetails = Loadable(lazy(() => import('views/add-details/AddDetails')));
// const CustomersList = Loadable(lazy(() => import('views/list-details/CustomersList')));
const Customers = Loadable(lazy(() => import('views/customer/Customers')));
const Customer = Loadable(lazy(() => import('views/customer/Customer')));
const DoctorsList = Loadable(lazy(() => import('views/list-details/DoctorsList')));
const EmployeeList = Loadable(lazy(() => import('views/list-details/EmployeeList')));
const MilkRate = Loadable(lazy(() => import('views/milk-rate/MilkRate')));
const MilkRates = Loadable(lazy(() => import('views/milk-rate/MilkRates')));
const Income = Loadable(lazy(() => import('views/income/Income')));
const Cattle = Loadable(lazy(() => import('views/cattle/Cattle')));
const Transaction = Loadable(lazy(() => import('views/transactions/Transaction')));
const Transactions = Loadable(lazy(() => import('views/transactions/Transactions')));
// const MilkProduction = Loadable(lazy(() => import('views/milk-production/MilkProduction')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const isAdminLogin = true;

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '',
      children: [
        {
          path: 'milk-productions',
          element: <MilkProductions />
        }
      ]
    },
    {
      path: '',
      children: [
        {
          path: 'cattle-food',
          element: <CattleFood />
        }
      ]
    },
    {
      path: '',
      children: [
        {
          path: 'cattle-foods',
          element: <CattleFoods />
        }
      ]
    },
    // { path: '', children: [{ path: 'expenses', element:  <Expenses /> }]},

    // { path: '/expenses', element: isAdminLogin ? <Expenses /> : <Navigate to={'/default'} /> },
    // { path: '/expense', element: isAdminLogin ? <Expense /> : <Navigate to={'/default'} /> },
    {
      path: '',
      children: [{ path: 'add-details', element: <AddDetails /> }]
    },

    {
      path: '',
      children: [{ path: 'expenses', element: <Expenses /> }]
    },

    {
      path: '',
      children: [{ path: 'expense', element: <Expense /> }]
    },


    {
      path: '',
      children: [{ path: 'cattle-details', element: <CattleDetails /> }]
    },
    {
      path: '',
      children: [{ path: 'milk-production', element: <MilkProduction /> }]
    },
    {
      path: '',
      children: [{ path: 'reports', element: <Reports /> }]
    },
    { path: '/transactions', element: isAdminLogin ? <Transactions /> : <Navigate to={'/add-details'} /> },
    { path: '/transaction', element: isAdminLogin ? <Transaction /> : <Navigate to={'/add-details'} /> },
    { path: '/details', element: isAdminLogin ? <AddDetails /> : <Navigate to={'/add-details'} /> },
    { path: '/milk-rates', element: isAdminLogin ? <MilkRates /> : <Navigate to={'/add-details'} /> },
    { path: '/milk-rate', element: isAdminLogin ? <MilkRate /> : <Navigate to={'/add-details'} /> },
    { path: '/customers', element: isAdminLogin ? <Customers /> : <Navigate to={'/add-details'} /> },
    { path: '/customer', element: isAdminLogin ? <Customer /> : <Navigate to={'/add-details'} /> },
    { path: '/customer/:id', element: isAdminLogin ? <Customer /> : <Navigate to={'/add-details'} /> },
    { path: '/doctors-list', element: isAdminLogin ? <DoctorsList /> : <Navigate to={'/add-details'} /> },
    { path: '/employee-list', element: isAdminLogin ? <EmployeeList /> : <Navigate to={'/add-details'} /> },
    { path: '/income', element: isAdminLogin ? <Income /> : <Navigate to={'/add-details'} /> },
    { path: '/cattle', element: isAdminLogin ? <Cattle /> : <Navigate to={'/add-details'} /> },
    { path: '/cattle/:id', element: isAdminLogin ? <Cattle /> : <Navigate to={'/add-details'} /> },
    { path: '/cattle-food/:id', element: isAdminLogin ? <CattleFood /> : <Navigate to={'/add-details'} /> },

    {
      path: 'sample-page',
      element: <AddDetails />
    }
  ]
};

export default MainRoutes;
