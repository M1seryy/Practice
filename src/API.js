import axios from "axios";

const BASE_URL = "https://dev1-api.twelve.football";

export let authRequest = async () => {
  const URL = `${BASE_URL}/auth/login/username`;

  // let [token, setToken] = useState("");
  let tokenApi;
  // const [data, setData] = useState("");

  let usernameValue = document.getElementById("exampleInputEmail1").value;
  let passValue = document.getElementById("exampleInputPassword1").value;
  try {
    const response = await axios.post(URL, {
      id: usernameValue,
      secret: passValue,
    });
    let dataRequest = response.data;
    tokenApi = dataRequest.accessToken;
    return tokenApi;
  } catch (err) {
    throw new Error("Unable to establish a login session.");
  }
};
