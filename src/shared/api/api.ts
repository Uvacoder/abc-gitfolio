import axios from "axios";
import { API_ENDPOINTS } from "../constant";

export async function getUserDetails(username : string){
   const {data} = await  axios.get(API_ENDPOINTS.BASE + API_ENDPOINTS.USER_DETAILS(username));
   return data;
}
export async function getUserRepos(username : string,page : number){
   let query = "?";
   if(page){
      query = query  + "page="+ page
   }
   const {data} = await  axios.get(API_ENDPOINTS.BASE + API_ENDPOINTS.USER_REPOS(username)+query);
   return data;
}

export async function getUser(page : number){
   const {data} = await  axios.get(API_ENDPOINTS.BASE + API_ENDPOINTS.LIST_USERS + "?since=" + page);
   return data;
}
export async function searchUsers(searchQuery : string){
   const {data} = await  axios.get( API_ENDPOINTS.BASE + API_ENDPOINTS.SEARCH_USERS + searchQuery);
   return data.items;
}