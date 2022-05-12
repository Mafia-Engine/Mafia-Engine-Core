import { Router } from 'express';
import MafiaRouter from './mafiagame';
import MafiaScumRouter from './mafiascum';
const router = Router();

// router.use('/mafia', MafiaRouter);
router.use('/mafiascum', MafiaScumRouter)
router.get('/testimage', (req, res) => {
    let url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Italian_States-Venice_%281779-89%29_50_Zecchini.jpg/1000px-Italian_States-Venice_%281779-89%29_50_Zecchini.jpg';
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(ip);
    res.redirect(url);
})
router.get('/ping', (_req, res) => {
    res.status(200).json({ value: 'pong'});
})

const generatePM = (users: string[], subject: string, message: string): string | null=> {
    let recipients = encodeURIComponent(users.join('\n'));
    let cleanedSubject = encodeURIComponent(subject);
    let cleanedMessage = encodeURIComponent(message);
    return `https://forum.mafiascum.net/ucp.php?i=pm&mode=compose&username_list=${recipients}&subject=${cleanedSubject}&message=${cleanedMessage}`;

}

router.get('/replacement', (_req, res) => {
    let identifier = '[identifier]';
    let pm = generatePM(['JacksonVirgo', 'Morning Tweet', 'Mafia Engine'], `Game Replacement ${identifier}`, `I would like to replace into game ${identifier}`);
    res.send(pm);
})

export default router;