import { Router } from 'express';
import { Game, GAME_TYPE_ENUM } from 'src/database/Game';
const router = Router();


router.route('/game')
    .get(() => {}) // Get mafia game data.
    .post((req, res) => {
        const { gameID, service } = req.body;
        try {
            // Check if service is valid
            if (!GAME_TYPE_ENUM[service]) {
                let hasService = false;
                for (const serviceVal in GAME_TYPE_ENUM) {
                    if (GAME_TYPE_ENUM[serviceVal] == service) hasService = true;
                }

                if (!hasService) return res.status(400).json({error: 'Invalid service value'});
            }




            const newGame: Game = {
                id: gameID,
                type: service
            };
        } catch (err) {
            console.log(err);
            res.status(500).json({error: 'The server has hit an unknown error.'})
        }
        
    }) // Create mafia game data.
    .put(() => {}) // Edit mafia game data.
    .delete(() => {}) // Remove mafia game data.

export default router;