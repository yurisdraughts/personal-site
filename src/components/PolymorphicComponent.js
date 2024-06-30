import * as React from "react";

const PolymorphicComponent = ({
  className,
  component: Component,
  ...props
}) => <Component className={className} {...props} />;

export default PolymorphicComponent;
