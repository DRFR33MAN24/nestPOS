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
  Edit,
} from 'react-admin';
import { apiUrl } from './multipartDataProvider';

const validateEmail = [required(), email()];
const validatePassword = [required(), minLength(2), maxLength(15)];
export const AdminShow = () => (
  <Show>
    <SimpleShowLayout>
      <CustomImageField source="profileImg" />
      <TextField source="email" />
    </SimpleShowLayout>
  </Show>
);
export const AdminList = () => (
  <List>
    <Datagrid rowClick="show">
      <CustomImageField
        source="profileImg"
        width={64}
        height={64}
        style={{ borderRadius: '64px' }}
      />
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
export const AdminEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />

      <TextInput source="email" validate={validateEmail} />
      <TextInput source="password" validate={validatePassword} />
      <CustomImageField source="profileImg" width={96} height={96} />
      <ImageInput source="file" multiple={true} accept="image/png">
        <ImageField source="src" title="profile image" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const CustomImageField = (props) => {
  const record = useRecordContext(props);

  const imgSrc = `${apiUrl}/admins/getFile/${record[props.source]}`;
  return record ? (
    <div>
      <img
        src={imgSrc}
        title={props.title}
        width={props.width}
        height={props.height}
        style={props.style}
      />
    </div>
  ) : null;
};
