import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import Dash from "./dash";

export default function Auth() {
  const [auth, setAuth] = useState(false);
  const cookie = new Cookies();
  const router = useRouter();

  React.useEffect(() => {
    const authenticate = () => {
      Axios.post("http://localhost:3001/auth", { token: String(router.query.token) })
        .then((res) => {
          // setAuth(true);
          console.log("RESPONSE THAT WE GET BACK", res.data);
          // cookie.set("sessionToken", router.query.token);
        })
        .catch((err) => console.log(err));
    };
    authenticate(); }, [])


  return <React.Fragment />;
}
