import Button from "../components/common/Button";
import { IconPlus } from "@tabler/icons-react";
import FormField from "../components/FormField";
import Table from "../components/Table";

export const Home = () => {
  return (
    <div className="grid place-content-center min-h-screen bg-slate-900 gap-y-5">
      <FormField>
        <FormField.FieldSet>
          <FormField.Input placeholder="Name"></FormField.Input>
          <FormField.Input placeholder="Username"></FormField.Input>
          <FormField.Input placeholder="Email"></FormField.Input>
        </FormField.FieldSet>
      </FormField>
      <div className="flex justify-center">
        <Button
          onClick={() => console.log("di klik!")}
          className="bg-royal-blue-500"
          text={
            <>
              <IconPlus />
              Add Data
            </>
          }
        ></Button>
      </div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Username</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Data>Joko</Table.Data>
            <Table.Data>Joko123</Table.Data>
            <Table.Data>Joko@mail</Table.Data>
          </Table.Row>
          <Table.Row>
            <Table.Data>Joko</Table.Data>
            <Table.Data>Joko123</Table.Data>
            <Table.Data>Joko@mail</Table.Data>
          </Table.Row>
          <Table.Row>
            <Table.Data>Joko</Table.Data>
            <Table.Data>Joko123</Table.Data>
            <Table.Data>Joko@mail</Table.Data>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
