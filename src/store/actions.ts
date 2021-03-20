import {ActionContext, ActionTree} from "vuex";
import {Mutations, MutationTypes} from "@/store/mutations";
import {State, state} from "@/store/state";
import {store} from "@/store";
import axios from "axios";

export enum ActionTypes {
    LOGIN = 'LOGIN',
    LOAD_LINK = 'LOAD_LINK',
    CREATE_LINK = 'CREATE_LINK'
}

export type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface LoginPayload {
    email: string,
    password: string
}

export interface CreateLinkPayload {
    linkUrl: string,
    tags: Array<string>,
    rssUrl: string,
    pageTitle: string,
    notes: string
}

export interface Actions {
    [ActionTypes.LOGIN](
        { commit }: AugmentedActionContext,
        payload: LoginPayload
    ): Promise<void>,

    [ActionTypes.LOAD_LINK](
        { commit }: AugmentedActionContext,
        payload: string
    ): Promise<void>,

    [ActionTypes.CREATE_LINK](
        { commit }: AugmentedActionContext,
        payload: CreateLinkPayload
    ): Promise<void>,

}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.LOGIN]({ commit }, { email, password }) {
        return axios.post("http://localhost:8081/v1/users/auth", {
            email,
            password
        }).then(response => {
            commit(MutationTypes.LOGIN, response.data.accessToken)
        })
    },
    [ActionTypes.LOAD_LINK]({ commit }) {
        return axios.get("http://localhost:8081/v1/links", {
            headers: {
                Authorization: `Bearer ${store.state.accessToken}`
            }
        }).then(response => {
            commit(MutationTypes.LOAD_LINK, response.data)
        })
    },
    [ActionTypes.CREATE_LINK]({ dispatch }, payload) {
        return axios.post("http://localhost:8081/v1/links", payload, {
            headers: {
                Authorization: `Bearer ${store.state.accessToken}`
            }
        }).then(response => {
            dispatch(ActionTypes.LOAD_LINK)
        })
    },
}