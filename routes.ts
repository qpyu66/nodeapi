import {Express, Request, Response} from 'express'
export default function(app: Express){
    app.get("/healthcheck", (req:Request, res: Response)=> res.sendStatus(200));


//Register user
//POST /api/user

//login
// POST /api/sessions

//Get the user's sessions
// GET /api/sessions

//logout
//DELETE /api/sessions



//Get /api/posts

}
