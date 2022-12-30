const express = require ('express');
const DatabaseManager = require('../utils/mysql');

const router = express.Router();
const Database = new DatabaseManager();

const routeRoots = {
    'user': '/users',
    'auth': '/auth',
    'reg': '/registration',
};

// ========== USER ROUTES ============
// #region
router.get('/users', async function(req, res) {
    let users = await Database.getUsers();
    res.send(users);
})
// #endregion

// ========== AUTHENTICATION ============
// #region 

router.post(routeRoots.auth + '/login', async function(req, res) {
    const response = {
        'accessToken': "f3efa4b86886",
    };

    res.send(response);
})

router.post(routeRoots.auth + '/refreshToken', (req, res) => {
    // TODO
    // const response = {
    //     'accessToken': "f3efa4b86886"
    // };

    // res.send(response);
    res.status(401).send([]);
})

router.get(routeRoots.auth + '/logout', (req, res) => {
    res.send([]);
});
// #endregion 



// ========== TEST ROUTES ============
// #region
router.get('/test', function(req, res) {
    // res.status(401).send('hey there'); // ! uncomment this to logout user everytime he goes to profile. hahaha.
    res.send([]);
});
// #endregion


module.exports = router;