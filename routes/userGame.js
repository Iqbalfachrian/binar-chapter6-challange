var express = require('express');
var router = express.Router();
const app = express();

const models = require('../models');
const userGameModel = models.user_game;
const userGameBiodataModel = models.user_game_biodata;
const userGameHistoryModel = models.user_game_history;

/* GET home page. */
router.get('/', async function(req, res, next) {
    const userGame = await userGameModel.findAll({
       include: ["user"]
    })
    res.json(userGame);
});

router.get('/biodata', async function(req, res, next){
    const userGameBiodata = await userGameBiodataModel.findAll({
        include: ["user"]
    });
    const userMapped = userGameBiodata.map((item) => {
        return {
            id: item.id,
            name: item.user.name,
            hobby: item.hobby,
            age: item.user.age,
            favorite_game: item.favorite_game,
        }
    })
    res.json(userMapped);
})

router.get('/history', async function(req, res, next){
    const userGameHistory = await userGameHistoryModel.findAll({
        include: ["history"]
    });
    const userMapped = userGameHistory.map((item) => {
        return {
            id: item.id,
            //hobby: item.history.hobby,
            favorite_game : item.history.favorite_game,
            result: item.result,
        }
    })
    res.json(userMapped);
})

router.post('/biodata', async function (req, res, next){
    const name = req.body.name;
    const hobby = req.body.hobby;
    const favorite_game = req.body.favorite_game;
    const age = req.body.age;
    const address = req.body.address;

    const userGameSave = await userGameModel.create({
        name: name
    });

    const userGameId = userGameSave.id;
    const userGameName = userGameSave.name;

    const userGameModelSave = await userGameModel.create({
        name: userGameName,
        age,
        address,
    })
    const userGameBiodataSave = await userGameBiodataModel.create({
        user_game_id : userGameId,
        hobby,
        favorite_game,
    })

    const newUserGameModel = await userGameModel.findByPk(userGameModelSave.id, {
        include: ["user"]
    })

    const newUserGame = await userGameBiodataModel.findByPk(userGameBiodataSave.id, {
        include: ["user"]
    })

    res.json(newUserGame);
    //res.json(newUserGameModel)
})

router.delete('/biodata/:id', async function(req, res){
    const userGameId = parseInt(req.params.id);
    try{
        await userGameBiodataModel.destroy({
            where : {
                id: userGameId
            }
        }).then(function(userGameDeleted){
            res.send({
                message: `Success deleted id ${userGameId}`
            })
        })
    } catch (error){
        res.status(500).json({
            error: error.parent.sqlMessage
        })
    }
})

router.delete('/user/:id', async function(req, res){
    const userGameId = parseInt(req.params.id);
        try{
            await userGameModel.destroy({
                where : {
                    id: userGameId
                }
            }).then(function(userGameDeleted){
                res.send({
                    message: `Success deleted id ${userGameId}`
                })
            })
        } catch (error){
            res.status(500).json({
                error: error.parent.sqlMessage
            })
        }
})

module.exports = router;