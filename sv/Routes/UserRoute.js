import express from "express";
import {deletUser, followerUser, getUser, UnFollowerUser, updateUser} from "../Controllers/UserController.js";

const router = express.Router();

// router.get('/',async (req,res)=>{
//     res.send("user route")
// })

router.get('/:id',getUser)
router.put('/:id',updateUser)
router.delete('/:id',deletUser)
router.put('/:id/follow',followerUser)
router.put('/:id/unfollow',UnFollowerUser)
export default router