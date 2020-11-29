import {MutationTree} from "vuex";
import {State} from "@/store/login/state";


export enum MutationTypes {
    LOGIN = 'LOGIN',
}

export type Mutations<S = State> = {
    [MutationTypes.LOGIN](state: S, payload: string): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.LOGIN](state, payload: string) {
        state.accessToken = payload
    },
}