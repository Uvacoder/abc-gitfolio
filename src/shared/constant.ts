export const random = new Array(10).fill("1");

export const API_ENDPOINTS ={
  BASE : "https://api.github.com",
  LIST_USERS : "/users",
  REPOS : "/repos",
  SEARCH_USERS : "/search/users?q=",
  USER_DETAILS : function(id : string){ 
    return "/users/"+id
  },
  USER_REPOS : function(id : string){ 
    return "/users/"+ id + "/repos";
  }
}