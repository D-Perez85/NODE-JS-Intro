const getUserSync = (id) => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000) {
        // Waiting...
        // Making fetch of data bases...
        // Stoling data from facebook...
    }
        return {
            id,
            name: `User ${ id }`
        };
    }

const getUser = (id, callback) => {
    const user = {
        id,
        name: `User ${ id }`
    };
        setTimeout(() => {
            callback(user);
        }, 3000);
    }
    
module.exports = { getUser, getUserSync}