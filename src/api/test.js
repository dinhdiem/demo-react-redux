import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:3001"
})

export const list = async () => {
    const url = `users`;
    return instance.get(url)
}

export const add = async (data) => {
    const url = `users`;
    return instance.post(url, data)
}

export const listOne = async (id) => {
    const url = `users/${id}`;
    return instance.get(url)
}
export const remove = (id) => {
    const url = `users/${id}`;
    return instance.delete(url)
}

export const update = async (data) => {
    const url = `users/${data.id}`;
    return instance.put(url, data)
}