import {$authHost, $host} from './index'

export const getPlacements = async () => {
    try {
        const {data} = await $host.get('api/placement')
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const getPlacement = async (id) => {
    try {
        const {data} = await $host.get('api/placement/' + id)
        return data
    } catch (e) {
        console.log(e.message)
    }
}

export const getInformations = async () => {
    try {
        const {data} = await $host.get('api/information')
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const getInformation = async (id) => {
    try {
        const {data} = await $host.get('api/information/' + id)
        return data
    } catch (e) {
        console.log(e.message)
    }
}

export const getAnimals = async (informationId, placementId, limit, page, search) => {
    try {
        const {data} = await $host.get('api/animal', {params: {
            informationId, placementId, limit, page, search
        }})
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const getAnimal = async (id) => {
    try {
        const {data} = await $host.get('api/animal' + id)
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const createAnimal = async (animal) => {
    try {
        const {data} = await $authHost.post('api/animal', animal)
        return data
    } catch (e) {
        console.log(e.message)
    }
}