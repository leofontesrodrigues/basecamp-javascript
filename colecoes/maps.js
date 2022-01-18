const getAdmins = (map) => {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'ADMIN') {
            admins.push(key);
        }
    }

    return admins;
};

const userRoles = new Map();

userRoles.set('Leonardo', 'SUDO');
userRoles.set('Bryan', 'ADMIN');
userRoles.set('Bia', 'ADMIN');
userRoles.set('Patricia', 'USER');
userRoles.set('Jhonny', 'USER');

console.log(getAdmins(userRoles));