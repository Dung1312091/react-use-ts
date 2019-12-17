import React, { useCallback, useState, useRef } from "react";
import { useGeolocation } from "../hooks";
const UseGeolocation = () => {
  const state = useGeolocation();
  return (
    <div>
      <pre>{JSON.stringify(state)}</pre>
    </div>
  );
};
export default UseGeolocation;
