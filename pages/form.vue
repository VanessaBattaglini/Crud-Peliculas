<template>
    <VContainer class="centrar">
        <VCard width="450" class="ma-auto">
            <VCardTitle class="text-center">
                Agregar Datos
            </VCardTitle>
            <VCardText>
            <VForm @submit.prevent="processingForm()">
                <VTextField
                    :counter="30"
                    required 
                    label="Nombre"
                    v-model="fiedls.nombre"
                ></VTextField>
                <VTextField
                    :counter="20"
                    label="Rut"
                    v-model="fiedls.rut"
                ></VTextField>
                <VTextField
                    :counter="10"
                    label="email"
                    v-model="fiedls.mail"
                ></VTextField>
                <VBtn
                    block
                    type="submit"
                    :disabled="loading"
                    variant="tonal">
                    Guardar
                </VBtn>
            </VForm>
        </VCardText>
    </VCard>
</VContainer></template>

<script>
import { VCard, VCardTitle, VCardText, VForm, VBtn, VTextField } from 'vuetify/lib/components/index.mjs';
// // import { useDataStore} from ('../stores/dataTurnos');

// const fiedls = reactive({
//     nombre: add.value ? add.value.nombre: '',
//     rut: add.value ? add.value.rut: '',
//     email: add.value ? add.value.email: ''
// })

// const loading = ref(false);
// const { add } = useDataStore()

// const processingForm = async()=> {
//     loading.value = true;
//     if(add.value){
//         await update({...fiedls, _id: add.value._id})
//     }else {
//     await add(fiedls)
// }
// loading.value = false
// }

// const turno = computed(() => add.value ? 'Edit' : 'Add')

// onUnmounted(() => {
//     useDataStore(null)
// })

</script>

<style scoped>
.centrar{
    height: 80vh;
    display: center;
    text-align: center;
}
</style>


