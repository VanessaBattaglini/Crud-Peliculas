import { defineStore } from 'pinia';
import { FirstUser } from '~/server/models/Admin.model';
import { type IDatabase } from "~~/types";


export const useDataStore = defineStore('firstUsers', {
    state: () => ({
        firstUsers: [] as IDatabase[],
        currentData: null
    }),
    actions: {
        async getData(){
            try {
                let data = await $fetch<IDatabase[]>('/api/create')
                this.firstUsers = data;
                console.log(data)
                return data as IDatabase[];
            } catch (e: unknown) {
                console.log("error")
            }
        },
        async add(body:{nombre:string, rut: string, email:string}){
            const data = await $fetch('/api/add', { 
            method: 'POST',
            body
            })
                .catch((e) => {
                    console.log("error")
                })
                .then(async () => {
                    navigateTo('/')
                });
        },
        async update(body:IDatabase){
            const { data, error} = await useFetch('/api/update', { 
            method: 'PUT',                
            body
        })
            .catch((e) => {
                console.log("error")
            })
            .then(async () => {
                navigateTo('/dash')
            });
        },
        async delete(id:string){
            await $fetch<IDatabase>(`/api/client/${id}`, { 
            method: 'DELETE'         
           })
           .catch((e) => {
                console.log("error")
            })
            .then(async () => {
                this.firstUsers = this.firstUsers.filter(x => x._id !== id)
            });
        }
    }
})