import { useEffect } from 'react';
import {
  List,
  Datagrid,
  NumberField,
  TextField,
  EmailField,
  DateField,
  ImageField,
  Show,
  SimpleShowLayout,
  useRecordContext,
  required,
  minLength,
  maxLength,
  TextInput,
  NumberInput,
  ImageInput,
  SimpleForm,
  Create,
  ShowButton,
  EditButton,
  email,
  DeleteButton,
  useDataProvider,
} from 'react-admin';

const validateEmail = [required(), email()];
const validatePassword = [required(), minLength(2), maxLength(15)];
export const AdminShow = () => (
  <Show>
    <SimpleShowLayout>
      <AdminImageField source="profileImg" />
      <TextField source="email" />
    </SimpleShowLayout>
  </Show>
);
export const AdminList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <AdminImageField source="profileImg" />
      {/* 
      <TextField source="name" /> */}
      <EmailField source="email" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const AdminCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />

      <TextInput source="email" validate={validateEmail} />
      <TextInput source="password" validate={validatePassword} />

      <ImageInput source="file" multiple={true} accept="image/png">
        <ImageField source="src" title="profile image" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const AdminImageField = (props) => {
  const record = useRecordContext(props);
  const url = useDataProvider().apiUrl;
  // console.log(record);
  useEffect(() => {}, []);
  return record ? (
    <div>
      <img
        src={record[props.source]}
        title="profileImg"
        width="64"
        height="64"
        style={{
          borderRadius: '64px',
        }}
      />
    </div>
  ) : null;
};
