<template>
    <v-app>
        <v-main>
            <div class="centerBlock">
                <div class="centerBlock2">
                    <slot />
                </div>
            </div>
            <div class="pl-2">

                <router-link to="/" class="grey text-right">В начало</router-link>

            </div>

        </v-main>
    </v-app>
</template>

<script>
</script>

<style>
.centerBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
    margin: 0;
    padding: 0;

}

.centerBlock2 {
    /* border: 2px solid #eeeeee; */
    /* border-radius: 5px; */
    width: 600px;
    padding: 5px;
}

.grey {
    color: grey
}
</style>