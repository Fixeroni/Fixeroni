import React, { ReactNode,   useEffect} from "react";

function AuthLayout({ children }: { children: ReactNode }) {

  useEffect(() => {
    document.body.style.backgroundColor = "white"; 

    // Reset background when component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);


  return (
    <div className="flex flex-col  w-full">
    <div className="max-sm:w-full">
    <img src="/assets/images/login-bg-image.png" alt=""  className="w-full h-[357px]"/>
    </div>
    
      {/* <article className="h-1/4"></article>
      <article className="h-3/4 bg-white"></article> */}
      <div className=" w-full h-full">
      {children}
      </div>
      
    </div>
  );
}

export default AuthLayout;


