

export interface Link {
    id: string,
    linkUrl: string,
    callCounter: number,
    lastCalled: number,
    createdDate: number,
    tags: Array<string>,
    rssUrl: string,
    pageTitle: string,
    notes: string,
    faviconUrl: string,
    userid: string
}

export const state = {
    accessToken: "",
    links: Array<Link>()
}

export type State = typeof state
