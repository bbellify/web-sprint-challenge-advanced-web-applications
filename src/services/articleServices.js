import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = async ()=> {

    const res = await axiosWithAuth().get('/articles')
    
    return res.data
    
    // .then( res => {
    //     let list = []
    //     // console.log('service: ', res)
    //     list = res.data
    //     return list
    // })
    // .catch( err => {
    //     console.log({err})
    // })
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.