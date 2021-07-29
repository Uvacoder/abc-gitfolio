import axios from "axios";
import { API_ENDPOINTS } from "../constant";

export async function getUserDetails(username : string){
   const {data} = await  axios.get(API_ENDPOINTS.BASE + API_ENDPOINTS.USER_DETAILS(username));
   return data;
}
export async function getUserRepos(username : string){
   const {data} = await  axios.get(API_ENDPOINTS.BASE + API_ENDPOINTS.USER_REPOS(username));
   return data;
}