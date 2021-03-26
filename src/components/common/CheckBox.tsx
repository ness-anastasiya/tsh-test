import React from "react";
import { Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import { FreeCheckbox, ActiveCheckbox } from "../helpers/icons";

type CheckBoxProps = {
  checked: boolean;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  name,
  label,
  onChange,
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          name={name}
          color="primary"
          icon={<FreeCheckbox />}
          checkedIcon={<ActiveCheckbox />}
        />
      }
      label={<Typography variant="body1">{label}</Typography>}
    />
  );
};
