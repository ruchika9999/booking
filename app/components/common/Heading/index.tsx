import React from "react";

interface Props {
  title: string;
}

const Heading = (props: Props) => {
  const { title } = props;
  return <div className="text-base text-black font-semibold">{title}</div>;
};

export default Heading;
