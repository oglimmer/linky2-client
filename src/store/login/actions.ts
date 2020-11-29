import {ActionContext, ActionTree} from "vuex";
import {Mutations, MutationTypes} from "@/store/login/mutations";
import {State} from "@/store/login/state";

export enum ActionTypes {
    LOGIN = 'LOGIN',
}

export type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.LOGIN](
        { commit }: AugmentedActionContext,
        payload: string
    ): Promise<string>
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.LOGIN]({ commit }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = "foo"
                commit(MutationTypes.LOGIN, data)
                resolve(data)
            }, 500)
        })
    },
}