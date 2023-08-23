import Button from "../components/common/Button";
import FormField from "../components/FormField";
import { IconUser } from "@tabler/icons-react";
// import { onchange, submit } from "../hooks/FormEvent";
import { useState } from "react";

export const Login = () => {
  const [formInput, setFormInput] = useState({
    uname: "",
    passwd: "",
  });

  const onchange = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(formInput);
  };

  return (
    <div className="grid place-content-center min-h-screen bg-slate-900 gap-y-5">
      <FormField onSubmit={submit}>
        <FormField.FieldSet>
          <FormField.Input
            placeholder="username"
            type="text"
            id={"uname"}
            name={"uname"}
            value={formInput.uname}
            onChange={onchange}
          ></FormField.Input>
          <FormField.Input
            placeholder="password"
            type="password"
            id={"passwd"}
            name={"passwd"}
            value={formInput.passwd}
            onChange={onchange}
          ></FormField.Input>
        </FormField.FieldSet>
        <Button
          text={
            <>
              <IconUser />
              Login
            </>
          }
          className="bg-royal-blue-500"
        ></Button>
      </FormField>
    </div>
  );
};
