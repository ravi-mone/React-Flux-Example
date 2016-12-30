

class UserActions{

    fetchUsers(){
         return {
            actionType: 'FETCH_USER_DATA'
        };
    }

    addTodoItem(val) {
      return {
        actionType: 'ADD_TODO_ITEM',
        payload: val
      }
    }

    fetchTodoItems() {
      return {
        actionType: 'FETCH_TODO_ITEMS'
      }
    }

    deleteTodoItems(i) {
      return {
        actionType: 'DELETE_TODO_ITEM',
        id: i
      }
    }

}
const useraction = new UserActions();
export default useraction;

