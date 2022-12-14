import axios from "axios";

axios.defaults.params ={
    token: "ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562",
    key: "857433641f31e33014fd315ea42cdb2a"
}

export function getBoards(){
    return axios.get('https://api.trello.com/1/members/me/boards?key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562')
}

export function createBoard(val){
    return axios.post(`https://api.trello.com/1/boards/?name=${val}&key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function deleteBoards(id){
    return axios.delete(`https://api.trello.com/1/boards/${id}?key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}