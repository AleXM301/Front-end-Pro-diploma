import store from "../store";
import {getDestinations} from "@thunks/destinationsThunk.js";
import {getHotels} from "@thunks/hotelsThunk.js";


export async function hotelsLoader() {
    await store.dispatch(getDestinations())
    await store.dispatch(getHotels({filters:{}, currentPage:1}))
    return null
}