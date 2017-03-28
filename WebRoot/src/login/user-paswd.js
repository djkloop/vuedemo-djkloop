import AV from '../assets/js/av-min.js'

function isCurrentUser () {
    var currentUser = AV.User.current();
    if (currentUser) {
        return true;
    }
    return false;
}

export default {
    isCurrentUser:isCurrentUser
}