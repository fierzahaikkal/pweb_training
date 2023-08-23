import Button from "../components/common/Button";
import FormField from "../components/FormField";
import { IconUser } from "@tabler/icons-react";

export const Login = () => {
  return (
    <div className="grid place-content-center min-h-screen bg-slate-900 gap-y-5">
      <FormField>
        <FormField.FieldSet>
          <FormField.Input placeholder="username"></FormField.Input>
          <FormField.Input
            placeholder="password"
            type="password"
          ></FormField.Input>
        </FormField.FieldSet>
      </FormField>
      <Button
        text={
          <>
            <IconUser />
            Login
          </>
        }
        className="bg-royal-blue-500"
      ></Button>
    </div>
  );
};
