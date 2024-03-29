/**
 * @Author: eipex
 * @Date:   2017-03-29T16:33:35-05:00
 * @Last modified by:   eipex
 * @Last modified time: 2017-04-26T01:47:01-05:00
 */



//TODO: Major todo - paging for loading messages

class ChatController{
    constructor(API, ToastService, $mdSidenav, $scope, $state, ChatService,UserService){
        'ngInject';

      this.API = API;
      this.ToastService = ToastService;
      this.$mdSidenav = $mdSidenav;
      this.$scope = $scope;
      this.$state = $state;
      this.ChatService = ChatService;
      this.UserService = UserService;
      // this.newMessageId = 1;
      // $scope.callbackNotifications = 0;
      // $scope.callbackNotification = '';
      //
      // $scope.eventNotifications = 0;
      // $scope.eventNotification = '';
      //
      // Pusher.subscribe('notifications', 'new', function (notification) {
      //   console.log('callback notification', notification);
      //   $scope.callbackNotifications++;
      //   $scope.callbackNotification = notification.message;
      // });
      //
      // $scope.$on('notifications:new', function (event, notification) {
      //     console.log('event notification', notification);
      //     $scope.eventNotifications++;
      //     $scope.eventNotification = notification.message;
      // });

    }

    $onInit(){

    }

    //close contacts side nav
    closeContacts(){
      this.$mdSidenav("contacts-sidenav")
       .close()
    }

    /**
     * toggleExchange hide or show contacts-sidenav
     */
    toggleContacts(){
      this.$mdSidenav("contacts-sidenav")
       .toggle()
    }

    /**
     * toggleExchange hide or show exchange-sidenav
     */
    toggleExchange(){
      this.$mdSidenav("exchange-sidenav")
       .toggle()
    }

    /**
     * show contacts div if activeRecipient is null
     * @return {bool} show or hide div
     */
    nonSelected(){
      return this.activeRecipient?true:false;
    }

    /**
     * set this conversation as active
     * @param  {object} convo conversation
     */
    setActiveConversation(convo){
      this.activeRecipient = this.ChatService.getOtherUser(convo);
      var data = {
        other_user_id:this.activeRecipient.id
      }
      this.ChatService.getConversation(data).then((response) => {
          this.currentConversation = response.data.conversation;
      });
    }

    /**
     * sender message to other user
     */
    sendMessage(){
      if(this.message){
        //push message
        this.currentConversation.push({
            id: Math.random(),
            firstname:this.currentUser.firstname,
            lastname:this.currentUser.lastname,
            message:this.message,
            create_at:new Date(),
            sender:this.currentUser
          })

        var data = {
          recipient: this.activeRecipient.id,
          message: angular.copy(this.message)
        }

        this.ChatService.sendMessage(data).then(() => {

        },()=>{

        })

        //reset message
        this.message = '';
      }
    }
}


// class Messages {
//     constructor(API,message){
//       'ngIngect';
//
//       this.API = API;
//
//       this.message = message;
//       this.recipient = this.message.sender.id;
//
//       this.loadedPages = {};
//
//       this.numItems = 0;
//
//       this.PAGE_SIZE = 10;
//
//       this.topIndex = 0;
//       this.fetchNumItems_();
//     }
//
//     getItemAtIndex(index){
//        var pageNumber = Math.floor(index / this.PAGE_SIZE);
//        var page = this.loadedPages[pageNumber];
//
//        if (page) {
//          return page[index % this.PAGE_SIZE];
//        } else if (page !== null) {
//          this.fetchPage_(pageNumber);
//        }
//     };
//
//     getLength(){
//       return this.numItems;
//     };
//
//     fetchPage_(pageNumber){
//
//         // Set the page to null so we know it is already being fetched.
//         this.loadedPages[pageNumber] = null;
//         var vm = this;
//
//         this.API.one('chat/getuserconversation/',this.recipient).customGET("items",{page:pageNumber+1}).then((response) => {
//             //this.lastpage+=1;
//             var conversation = response.data.conversation.data;
//             //reverse list
//             conversation = conversation.slice().reverse();
//             this.currentpage = response.current_page;
//
//             this.loadedPages[pageNumber] = [];
//
//             this.loadedPages[pageNumber] = conversation;
//             //this.loadedPages = this.loadedPages.reverse();
//             console.log(this.loadedPages[pageNumber]);
//         });
//
//
//
//     };
//
//     fetchNumItems_(){
//       this.API.one('chat/getuserconversation/count/',this.recipient).get().then((response) => {
//         this.numItems = response.data.count;
//         this.topIndex = response.data.count;
//       });
//     };
//
//
// }

export const ChatComponent = {
    templateUrl: './views/app/components/chat/chat.component.html',
    controller: ChatController,
    controllerAs: 'vm',
    bindings: {
      conversations:'<conversations',
      currentUser:'<currentUser'
    }
}
