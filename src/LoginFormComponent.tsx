import { UseRiveParameters } from "@rive-app/react-canvas";
import React, {
  useRef,
  useState,
  ChangeEvent,
  SyntheticEvent,
  // useEffect
} from "react";

// TODO: Uncomment these exports as you walk through the Teddy Login tutorial
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
  RiveState,
  StateMachineInput,
} from "@rive-app/react-canvas";
import "./LoginFormComponent.css";

const STATE_MACHINE_NAME = "Login Machine";

const LOGIN_PASSWORD = "teddy";
/**
 * Use case for a simple login experience that incorporates a Rive asset with a
 * state machine to coordinate user interaction with a form
 * @param riveProps
 */
const LoginFormComponent = (riveProps: UseRiveParameters = {}) => {
  const { rive: riveInstance, RiveComponent }: RiveState = useRive({
    src: "login-teddy.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    ...riveProps,
  });
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const inputRef = useRef(null);

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    setUserValue(newVal);
    console.log({ rival: riveInstance?.contents });
  };
  const onSubmit = (e: SyntheticEvent) => {};

  return (
    <div className="login-form-component-root">
      <div className="login-form-wrapper">
        <div className="rive-wrapper">
          <RiveComponent className="rive-container" />
        </div>
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <label>
              <input
                type="text"
                className="form-username"
                name="username"
                placeholder="Username"
                value={userValue}
                onChange={onUsernameChange}
                ref={inputRef}
              />
            </label>
            <label>
              <input
                type="password"
                className="form-pass"
                name="password"
                placeholder="Password (shh.. it's 'teddy')"
                value={passValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassValue(e.target.value)
                }
              />
            </label>
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;
