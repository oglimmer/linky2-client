import {MutationTree} from "vuex";
import {Link, State} from "@/store/state";


export enum MutationTypes {
    LOGIN = 'LOGIN',
    LOAD_LINK = 'LOAD_LINK'
}

export type Mutations<S = State> = {
    [MutationTypes.LOGIN](state: S, payload: string): void,
    [MutationTypes.LOAD_LINK](state: S, payload: Array<Link>): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.LOGIN](state, payload: string) {
        state.accessToken = payload
    },
    [MutationTypes.LOAD_LINK](state, payload: Array<Link>) {
        state.links = payload
    },
}