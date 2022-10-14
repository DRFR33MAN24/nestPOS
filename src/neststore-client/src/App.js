// in src/App.js
import * as React from 'react';
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from 'react-admin';
import { AdminList, ad, AdminCreate, AdminShow } from './AdminList';
import { OfferList, OfferCreate, OfferShow, OfferEdit } from './OfferUI';
import { UserCreate, UserEdit, UserList, UserShow } from './UserUI';
import { GameList, GameEdit, GameShow, GameCreate } from './GameList';
import authProvider from './authProvider';
import addUploadFeature from './addUploadFeature';

import LoginPage from './LoginPage';
import { Dashboard } from './Dashboard';
//import jsonServerProvider from "ra-data-json-server";

//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
import dataProvider from './dataProvider';
// import crudProvider from 'ra-data-nestjsx-crud';
// let dataProvider = crudProvider('http://localhost:5000');
const App = () => (
  <Admin
    dashboard={Dashboard}
    loginPage={LoginPage}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="admins"
      list={AdminList}
      show={AdminShow}
      create={AdminCreate}
    />
  </Admin>
);

export default App;
