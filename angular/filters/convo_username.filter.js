/**
 * @Author: eipex
 * @Date:   2017-04-25T11:53:24-05:00
 * @Last modified by:   eipex
 * @Last modified time: 2017-04-26T01:28:28-05:00
 */



export function ConvoUsernameFilter(UserService){
    'ngInject';

    return function( input ){
      if(input && UserService.user){
        //if sender is current user return recipient info else return sender info
        if(input.sender_id === UserService.user.id){
          return input.recipient.firstname + ' ' + input.recipient.lastname;
        }else{
          return input.sender.firstname + ' ' + input.sender.lastname
        }
      }else{
        return
      }
    }
}
