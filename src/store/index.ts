import {CommitOptions, createStore, DispatchOptions, Store as VuexStore} from "vuex";
import {state, State} from "@/store/login/state";
import {mutations, Mutations} from "@/store/login/mutations";
import {Actions, actions} from "@/store/login/actions";

export const store = createStore({
    state,
    mutations,
    actions
})

export type Store = Omit<
    VuexStore<State>,
    'commit' | 'dispatch'
    > & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
}
