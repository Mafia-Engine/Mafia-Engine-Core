import { response, Router } from 'express';
import axios from 'axios';

const router = Router();

interface ThreadQuery {
    t?: string; // Thread
    f?: string; // Forum
    p?: string; // Post
    start?: string; // First post loaded for the page.
    ppp?: string; // Posts Per Page (max 200)
}

interface Page {
    title?: string;
    posts?: Post[];
    currentPageNum?: number;
    lastPageNum?: number;
    postsPerPage?: number; // Add later
}

interface Post {
    author?: string;
    postId?: string;
    postNum?: number;
    cleanContent?: string;
    votes?: Vote[];
    timestamp?: number;
}

interface Vote {
    target: string;
    isUnvote?: boolean;
}

interface MafiascumPageResponse {
    html?: string;
    hasError?: boolean;
}

const MafiaScumURI = 'https://forum.mafiascum.net/viewtopic.php';
const getPageHTML = async (query: ThreadQuery): Promise<MafiascumPageResponse> => {
    let html: MafiascumPageResponse = {};

    try {
        let parsedURI = MafiaScumURI + '?'
        if (query.t) parsedURI += `t=${query.t}&`
        if (query.f) parsedURI += `f=${query.f}&`
        if (query.start) parsedURI += `start=${query.start}&`
        if (query.ppp) parsedURI += `ppp=${query.ppp}&`
        const response = await axios.get(parsedURI);
        html.html = response.data as string;
    } catch (err: any) {
        html.hasError = err;
    }

    return html;
}

interface ThreadError {
    status: number;
    label?: string;
}

export default router;