import axios from 'axios'
import config from './components/register'

let url='http://localhost:4000';

export function  getProducts(){
    return axios.get(`${url}/products`)
    .then(response => response.data)
}

export function  getPretendToys(){
    return axios.get(`${url}/pretendtoys`)
    .then(response => response.data)
}

export function  getScienceToys(){
    return axios.get(`${url}/sciencetoys`)
    .then(response => response.data)
}

export function  getMusicalToys(){
    return axios.get(`${url}/musicaltoys`)
    .then(response => response.data)
}

export function  getBuildingToys(){
    return axios.get(`${url}/buildingtoys`)
    .then(response => response.data)
}

export function  getElectronicToys(){
    return axios.get(`${url}/electronictoys`)
    .then(response => response.data)
}