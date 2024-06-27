import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      variant="outline"
      type="text"
      color="black"
      onChange={changeFn}
      {...props}
    ></Input>
  );
};
