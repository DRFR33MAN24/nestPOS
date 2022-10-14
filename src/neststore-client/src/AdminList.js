import {
  List,
  Datagrid,
  NumberField,
  TextField,
  EmailField,
  DateField,
  ImageField,
} from 'react-admin';
export const AdminList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ImageField source="profileImg" />
      {/* 
      <TextField source="name" /> */}
      <EmailField source="email" />
    </Datagrid>
  </List>
);
