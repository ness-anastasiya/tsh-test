import { Button } from "@material-ui/core";
import { ReactChild } from "react";

type PrimaryButtonType = {
  children: ReactChild;
  className: any;
};

export const PrimaryButton: React.FC<PrimaryButtonType> = ({
  children,
  className,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth={true}
      className={className}
    >
      {children}
    </Button>
  );
};
