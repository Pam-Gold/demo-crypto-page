import { useState } from "react";

const useToggle = () => {

  const [toggleState, setToggleState] = useState(false)

  const renderToggledState = () => {
    setToggleState(prevState=>!prevState)
  }

  return[toggleState, renderToggledState]
}

export default useToggle;