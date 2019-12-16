import React, { useCallback, useState, useRef } from "react";
import { debounce } from "lodash";
import { useEvent } from "../hooks";
export default function UseEvent() {
  const elementRef = useRef<HTMLInputElement>(null);
  const [demistion, setDemistion] = useState({});
  const [scrollTop, setScrollTop] = useState(0);
  const [value, setValue] = useState("");
  const handleResize = useCallback(e => {
    setDemistion({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);
  useEvent("resize", handleResize);

  const handleScroll = useCallback(() => {
    if (elementRef && elementRef.current) {
      setScrollTop(elementRef.current.scrollTop);
    }
  }, []);
  useEvent("scroll", handleScroll, elementRef);

  const handleGetData = debounce(
    value => {
      console.log({ value });
    },
    1000,
    {
      leading: true,
      trailing: true,
      maxWait: 2000
    }
  );

  const handleChangeInput = useCallback(e => {
    const { value } = e.target;
    setValue(value);
    handleGetData(value);
  }, []);

  return (
    <div>
      <h4>React sensor hook that subscribes a handler to events.</h4>

      <h5>Resize windown</h5>
      <pre>{JSON.stringify(demistion)}</pre>
      <h5>Scroll Element</h5>
      <pre>{JSON.stringify(scrollTop)}</pre>

      <div
        ref={elementRef}
        style={{ width: 400, height: 200, overflow: "auto" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde
        consequatur explicabo et! Porro optio dolor, odit fuga eum dolorum vero
        iusto omnis consequuntur aliquid magnam ad natus eaque quod. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Deleniti unde consequatur
        explicabo et! Porro optio dolor, odit fuga eum dolorum vero iusto omnis
        consequuntur aliquid magnam ad natus eaque quod. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Deleniti unde consequatur explicabo
        et! Porro optio dolor, odit fuga eum dolorum vero iusto omnis
        consequuntur aliquid magnam ad natus eaque quod. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Deleniti unde consequatur explicabo
        et! Porro optio dolor, odit fuga eum dolorum vero iusto omnis
        consequuntur aliquid magnam ad natus eaque quod. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Deleniti unde consequatur explicabo
        et! Porro optio dolor, odit fuga eum dolorum vero iusto omnis
        consequuntur aliquid magnam ad natus eaque quod.
      </div>

      <h5>Test lodash</h5>
      <input value={value} onChange={handleChangeInput}></input>
    </div>
  );
}
