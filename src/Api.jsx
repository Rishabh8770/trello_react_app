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

export function getLists(id){
    return axios.get(`https://api.trello.com/1/boards/${id}/lists?key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function addList(id, name){
    return axios.post(`https://api.trello.com/1/boards/${id}/lists?name=${name}&key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function deleteList(id){
    return axios.put(`https://api.trello.com/1/lists/${id}/closed?value=true&key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function getCards(id){
    return axios.get(`https://api.trello.com/1/lists/${id}/cards?key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function createCard(name, idList){
    return axios.post(`https://api.trello.com/1/cards?name=${name}&idList=${idList}&key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function deleteCard(id){
    return axios.delete(`https://api.trello.com/1/cards/${id}?key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function getChecklist(id){
    return axios.get(`https://api.trello.com/1/cards/${id}/checklists?key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function createChecklist(id, name){
    return axios.post(`https://api.trello.com/1/checklists?idCard=${id}&name=${name}&key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function deleteChecklist(id){
    return axios.delete(`https://api.trello.com/1/checklists/${id}?key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function getCheckItems(id){
    return axios.get(`https://api.trello.com/1/checklists/${id}/checkItems?key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function addCheckItems(id, name){
    return axios.post(`https://api.trello.com/1/checklists/${id}/checkItems?name=${name}&key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function deleteItem(id, idCheckItem){
    return axios.delete(`https://api.trello.com/1/checklists/${id}/checkItems/${idCheckItem}?key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}

export function checkItemStatus(id, idCheckItem, status){
    return axios.put(`https://api.trello.com/1/cards/${id}/checkItem/${idCheckItem}?state=${status}&key=857433641f31e33014fd315ea42cdb2a&token=ATTA54d866403fc3ceb960638e84ecbe6027fa6d870cf1c996afee6f26b24451e2fdD8FC6562`)
}