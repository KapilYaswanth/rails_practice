import React from "react";

function Name({ name }: {name: string}): JSX.Element {

  // const someFunc = (n: number): number => n+2;
  
  return <>Name: {name}</>;
}

export default Name;
