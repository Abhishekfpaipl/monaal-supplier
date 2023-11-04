<template>
    <div style="margin-bottom: 70px;">
        <section class="py-4">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-md-6 col-lg-6">
                        <div class="text-start">
                            <p class="m-0">Welcome</p>
                            <h2>AM Fabrics</h2>
                        </div>
                    </div>
                    <div class="col-6 col-md-6 col-lg-6">
                        <div class="text-end">
                            <p class="m-0">Admin</p>
                            <p class="m-0">Last Session</p>
                            <p class="m-0">2 weeks ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row w-100">
                    <div v-for="(data, index) in datas" :key="index"
                        class="col-md-3 col-lg-2  p-2 m-2 border-start border-warning border-4"
                        style="background-color: rgba(255, 179, 0, 0.3);">
                        <div class="div-box ">
                            <h2>{{ data.num }}</h2>
                            <p>{{ data.txt }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'DashboardPage',
    data() {
        return {
            publicPath: process.env.BASE_URL,

        }
    },
    computed: {
        datas() {
            return this.$store.getters.getDatas;
        },

    }
}
</script>

<style  scoped>
.txttxt {
    cursor: pointer;
    transition: .3s;
}

.txttxt:hover {
    transform: scale(1.1);
}

@media only screen and (max-width: 600px) {

    #section12,
    #section21 {
        position: relative;
        z-index: -1;
    }

    #section12 {
        padding-bottom: 5em;
    }
}
</style>
