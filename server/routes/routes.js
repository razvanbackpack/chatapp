const express = require ('express');
const DatabaseManager = require('../utils/mysql');

const router = express.Router();
const Database = new DatabaseManager();

// ========== USER ROUTES ============
// #region
router.get('/users', async function(req, res) {
    let users = await Database.getUsers();
    res.send(users);
})
// #endregion

// ========== AUTHENTICATION ============
// #region 

// #endregion 

// ========== AUTHENTICATION ============
// #region
// #endregion


// ========== TEST ROUTES ============
// #region

// #endregion


module.exports = router;