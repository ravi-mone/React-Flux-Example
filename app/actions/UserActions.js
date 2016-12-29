

class UserActions{

    fetchUsers(){
         return {
            actionType: 'FETCH_USER_DATA'
        };
    }
}
const useraction = new UserActions();
export default useraction;