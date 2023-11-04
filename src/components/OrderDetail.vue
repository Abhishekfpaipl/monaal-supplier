<template>
    <div v-if="Object.keys(activeSuppo).length !== 0">
        <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="d-flex justify-content-between align-items-center px-3 py-2 bg-light border-bottom">
                <p class="fw-bold text-center m-0">{{ activeSuppo.sid }}</p>
                <i class="bi bi-x fs-3" @click="hideSuppo()"></i>
            </div>
            <div class="offcanvas-body p-2">
                <div class="">
                    <p class="text-center fw-bold my-3">PO Terms</p>
                    <div class="container bg-light">
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">PO No.</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.poTerms.no }}</div>
                        </div>
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">PO Issued Date</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.poTerms.issue }}</div>
                        </div>
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">PO Expiry Date</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.poTerms.expiry }}</div>
                        </div>
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">Material</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.poTerms.material }}</div>
                        </div>
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">Style</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.poTerms.style }}</div>
                        </div>
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">Rate</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.poTerms.rate }}</div>
                        </div>
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">Total Qty</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.poTerms.qty }}</div>
                        </div>
                        <div class="row border-top border-bottom">
                            <div class="col-6 border-end border-start p-3">Delivery Mode</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.poTerms.delivery }}</div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <p class="text-center fw-bold mb-3 mt-5">PO Items</p>
                        <div v-for="(color, index) in activeSuppo.colors" :key="index" class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed d-flex p-2 bg-light" type="button"
                                    data-bs-toggle="collapse" :data-bs-target="`#collapseThree` + index"
                                    aria-expanded="false" :aria-controls="`collapseThree` + index">
                                    <img :src="`${publicPath}${color.img}`" class="rounded-circle"
                                        style="width: 60px; height: 60px;object-fit: cover;">
                                    <div class="d-flex justify-content-between ms-2 w-100">
                                        <p class="mb-0">{{ color.name }}</p>
                                        <p class="mb-0 me-2">{{ color.qty }}</p>
                                    </div>
                                </button>
                            </h2>
                            <div :id="`collapseThree` + index" class="accordion-collapse collapse "
                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="card card-body ">
                                        <div class="d-flex justify-content-center">
                                            <img :src="`${publicPath}${color.img}`" style="width:300px; height: 170px;"
                                                alt="">
                                        </div>
                                        <span class="mt-2">Width : {{ color.width }}, Length : {{ color.length }}</span>
                                        <p>Note :</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="accordion" id="accordionExample">
                    <p class="text-center fw-bold mb-3 mt-5">General Terms</p>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseAdd" aria-expanded="true" aria-controls="collapseAdd">
                                Additional Note
                            </button>
                        </h2>
                        <div id="collapseAdd" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body"> There is no additional note
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTol" aria-expanded="true" aria-controls="collapseTol">
                                PO Terms tolerance
                            </button>
                        </h2>
                        <div id="collapseTol" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="d-flex justify-content-between">
                                    <p>Rate</p>
                                    <p>5 % Tolerance</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>Order Quantity</p>
                                    <p>5 % Tolerance</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>Rate</p>
                                    <p>5 % Tolerance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsePayment" aria-expanded="true" aria-controls="collapsePayment">
                                Payment Terms
                            </button>
                        </h2>
                        <div id="collapsePayment" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                45 Days of Payment Cycle
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseRejection" aria-expanded="true" aria-controls="collapseRejection">
                                Rejection Terms
                            </button>
                        </h2>
                        <div id="collapseRejection" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Checking Charges will be charged up rejected goods. And Godown Charges will also be charged
                                up
                                on rejected goods if they are not Picking-Back within 10 days of rejection.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BuyerOrder',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        orders() {
            return this.$store.getters.getSupplierOrders
        },
        activeSuppo() {
            return this.$store.getters.getActiveOrder
        }
    },
    methods: {
        showSuppo(suppo) {
            return this.$store.dispatch('selectOrder', suppo);
        },
        hideSuppo() {
            return this.$store.dispatch('hideOrder');
        },
    },
}
</script>

<style lang="scss" scoped></style>