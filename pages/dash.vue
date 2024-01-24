<template>
    <VContainer>
        <VRow>
            <VCol>
                <VBtn
                    icon="mdi-plus"
                    @click="navigateTo('/form')"
                />
            </VCol>
        </VRow>
        <VRow>
            <VCol>
                <VTable>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Rut</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in firstUsers">
                            <td>{{ i.nombre }}</td>
                            <td>{{ i.rut }}</td>
                            <td>{{ i.email }}</td>
                            <td>
                                <VBtn variant="text" color="warning" icon="mdi-eye"/>
                                <VBtn  variant="text" color="error" icon="mdi-delete"/>
                            </td>
                        </tr>
                    </tbody>
                </VTable>
            </VCol>
        </VRow>
    </VContainer>
</template>

<script setup lang="ts">
import { VContainer,VRow, VCol, VBtn, VTable } from 'vuetify/lib/components/index.mjs';
import { useDataStore,  } from '../stores/dataTurnos';
import { storeToRefs } from 'pinia';

const dataStore = useDataStore()
const { getData } = dataStore
const { firstUsers } = storeToRefs(dataStore)

await getData()

</script>

<style scoped>

</style>