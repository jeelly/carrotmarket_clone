import axios from "axios";
import { getCookie } from "../shared/cookie";

//인스턴스 생성
const instance = axios.create({
  baseURL: "http://localhost:5001",
  headers: { "Content-Type": "application/json" },
});
//토큰값
// const token = getCookie("is_login");
// instance.defaults.headers.common["Authorization"] = `Bearer ${token}`; 
instance.defaults.headers.common["Authorization"] = `Bearer 임시토큰값`; 

export default instance;