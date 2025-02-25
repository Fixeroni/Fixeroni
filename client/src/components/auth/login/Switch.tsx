import React, { ReactNode, useState } from 'react'

function Switch({login, register} : {login: ReactNode, register: ReactNode}) {
    // Track the selected content;
    const [content, setContent] = useState<"login" | "register">("login");

  return (
    content === "login" ?
        login :
        register
  )
}

export default Switch
