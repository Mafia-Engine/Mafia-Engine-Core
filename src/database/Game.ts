type GameType = 'MAFIASCUM' | 'DISCORDMAFIA';
type GamePhase = 'QUEUE' | 'PRE-GAME' | 'IN-GAME' | 'POST-GAME';

export const GAME_TYPE_ENUM: Record<string,number> = {
    'MAFIASCUM': 0,
    'DISCORDMAFIA': 1
}
export const GAME_PHASE_ENUM: Record<string,number>  = {
    'QUEUE': 0,
    'PRE_GAME': 1,
    'IN_GAME': 2,
    'POST_GAME': 3
}

export interface User {
    id: string;
    focused: string;
    linkedUsers: string[];
}

export interface UserGroup {
    users: User[] | string;
    removed?: string[]; // List of those that cannot join.
    linked?: string[]; // List
}

export interface Game {
    type: number;
    phase?: number; // Default: QUEUE (0)
    id: string; // Thread ID for Forums. Game chat ID for Discord.
    userGroups?: UserGroup[];
}


export default (): Game => {
    return {
        type: GAME_TYPE_ENUM.MAFIASCUM,
        phase: GAME_PHASE_ENUM.QUEUE,
        id: '',
        userGroups: [{ users: [] }]
    }
}