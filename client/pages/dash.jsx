import Axios from "axios";
import Cookies from "universal-cookie";

const Dash = () => {
  const cookie = new Cookies();

  const testAPI = () => {
    Axios.post(
      "http://localhost:3001/test",
      {},
      { headers: { sessiontoken: cookie.get("sessionToken").session_token } }
    )
      .then((resp) => {
        alert(resp.data);
      })
      .catch((err) => {
        alert("USER NOT AUTHENTICATED");
      });
  };
  
  return (
    <div>
      <p>DASHBOARD</p>
      <button onClick={testAPI}>Test API</button>
    </div>
  );
}

export default Dash;
