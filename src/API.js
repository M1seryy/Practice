import axios from "axios";

export let postRequest = () => {
  const URL = "https://dev1-api.twelve.football/auth/login/username";

  // let [token, setToken] = useState("");
  let tokenApi;
  // const [data, setData] = useState("");
  let dataRequest;

  let usernameValue = document.getElementById("exampleInputEmail1").value;
  let passValue = document.getElementById("exampleInputPassword1").value;

  axios.post(URL, { id: usernameValue, secret: passValue }).then((response) => {
    let dataRequest = response.data;
    console.log(dataRequest);
    console.log(dataRequest.accessToken);
    return dataRequest;
  });
};
