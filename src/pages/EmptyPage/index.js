import React from "react";
import EmptyState from "components/Empty";
import { container } from "./styles.module.scss";

const EmptyPage = () => {
  return (
    <div className={container}>
      <EmptyState />
    </div>
  );
};

export default EmptyPage;
