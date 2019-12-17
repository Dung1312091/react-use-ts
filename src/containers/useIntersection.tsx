import React, { useRef } from "react";
import { useIntersection } from "../hooks";
const UseIntersection = () => {
  const boxRef = useRef(null);
  const intersection = useIntersection(boxRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1
  });
  console.log("intersection", intersection);
  return (
    <>
      <h3>Scroll me</h3>
      <div style={{ height: 200, width: 400, overflow: "scroll", padding: 20 }}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          molestias ex officiis quaerat, dolor praesentium quisquam culpa. Neque
          placeat veniam odit sapiente nam voluptatum eveniet! Enim repellat
          repellendus velit reprehenderit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur molestias ex officiis
          quaerat, dolor praesentium quisquam culpa. Neque placeat veniam odit
          sapiente nam voluptatum eveniet! Enim repellat repellendus velit
          reprehenderit! repellendus velit reprehenderit! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consequuntur molestias ex officiis
          quaerat, dolor praesentium quisquam culpa. Neque placeat veniam odit
          sapiente nam voluptatum eveniet! Enim repellat repellendus velit
          reprehenderit!
        </div>
        <div
          ref={boxRef}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {intersection && intersection.intersectionRatio < 1
            ? "Obscured"
            : "Fully in view"}
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          molestias ex officiis quaerat, dolor praesentium quisquam culpa. Neque
          placeat veniam odit sapiente nam voluptatum eveniet! Enim repellat
          repellendus velit reprehenderit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur molestias ex officiis
          quaerat, dolor praesentium quisquam culpa. Neque placeat veniam odit
          sapiente nam voluptatum eveniet! Enim repellat repellendus velit
          reprehenderit!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          molestias ex officiis quaerat, dolor praesentium quisquam culpa. Neque
          placeat veniam odit sapiente nam voluptatum eveniet! Enim repellat
          repellendus velit reprehenderit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur molestias ex officiis
          quaerat, dolor praesentium quisquam culpa. Neque placeat veniam odit
          sapiente nam voluptatum eveniet! Enim repellat repellendus velit
          reprehenderit!
        </div>
      </div>
    </>
  );
};
export default UseIntersection;
