import React from "react";
import classNames from "classnames";
import "./Container.styles.scss";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ className, children, ...props }) => {
  return <div className={classNames("container", className)} {...props}>{children}</div>;
}

