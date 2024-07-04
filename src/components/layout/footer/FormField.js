import * as React from "react";
import { Field } from "@headlessui/react";
import clsx from "clsx/lite";

const FormField = ({ className, ...props }) => {
  return (
    <Field
      className={clsx(
        className,
        "flex flex-col gap-1 [&_textarea]:w-full",
      )}
      {...props}
    />
  );
};

export default FormField;
