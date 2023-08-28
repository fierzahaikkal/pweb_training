import Button from "../components/common/Button";
import { IconPlus } from "@tabler/icons-react";
import Form from "../components/Form";
import Table from "../components/Table";
import { useState } from "react";

export const Home = () => {
  //membuat state untuk setiap field yang dibutuhkan
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [tableData, setTableData] = useState([]);

  //handle untuk field name
  const handleName = (event) => {
    setName(event.target.value);
  };

  //handle untuk field username
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  //handle untuk field email
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  //handle saat form di submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { name, username, email };
    setTableData([...tableData, newData]);
    setName("");
    setUsername("");
    setEmail("");
  };
  console.log(tableData);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-royal-blue-300 to-royal-blue-600 gap-y-5">
      <Form onSubmit={handleSubmit}>
        <Form.FieldSet>
          <Form.Input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Name"
          ></Form.Input>
          <Form.Input
            type="text"
            value={username}
            onChange={handleUsername}
            placeholder="Username"
          ></Form.Input>
          <Form.Input
            type="text"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
          ></Form.Input>
        </Form.FieldSet>
        <Button
          type="submit"
          className="flex justify-center bg-royal-blue-500"
          text={
            <>
              <IconPlus />
              Add Data
            </>
          }
        ></Button>
      </Form>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Username</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {/* mapping untuk data yang sudah diinput */}
          {tableData.map((data, index) => {
            return (
              // menyebut setiap field data yang ter input
              <Table.Row key={index}>
                <Table.Data>{data.name}</Table.Data>
                <Table.Data>{data.username}</Table.Data>
                <Table.Data>{data.email}</Table.Data>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
