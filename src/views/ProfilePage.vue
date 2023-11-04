<template>
    <div class="pb-5 mb-5">
        <ImageUploadBox></ImageUploadBox>
        <table class="table">
            <tbody>
                <tr>
                    <th class="table-secondary">Name</th>
                    <td>{{ buyer.name }}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Mobile</th>
                    <td>{{ buyer.mobile }}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Description</th>
                    <td>{{ buyer.desc }}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Password</th>
                    <td><button class="btn btn-sm btn-secondary">Reset Password</button></td>
                </tr>
                <tr class="table-secondary">
                    <th class=""> Business Details</th>
                    <td class="d-flex align-items-center justify-content-end gap-2 py-3 text-end">
                        <span class="fs-5">Address </span>
                        <i class="bi bi-plus btn btn-outline-dark px-2 py-0 fs-5" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"></i>
                    </td>
                </tr>
                <tr>
                    <th class="table-secondary">Business Name</th>
                    <td>{{ buyer.businessName }}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Gstin</th>
                    <td>{{ buyer.gstin }}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Email</th>
                    <td>{{ buyer.email }}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Whatsapp</th>
                    <td>{{ buyer.whatsapp }}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Contact</th>
                    <td>{{ buyer.contact }}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Billing Address</th>
                    <td v-if="buyer.address">{{ buyer.address.billing }} <br>
                    </td>
                </tr>
                <tr>
                    <th class="table-secondary">Shipping Address</th>
                    <td v-if="buyer.address">{{ buyer.address.shipping }}</td>
                </tr>

            </tbody>
        </table>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Address</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="saveAddress">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="email" placeholder="" v-model="email">
                                <label for="email">Email</label>
                            </div>
                            <div class="d-flex gap-2">
                                <div class="form-floating mb-3 w-50">
                                    <input type="number" class="form-control" id="whatsapp" placeholder=""
                                        v-model="whatsapp">
                                    <label for="whatsapp">Whatsapp</label>
                                </div>
                                <div class="form-floating mb-3 w-50">
                                    <input type="number" class="form-control" id="contact" placeholder="" v-model="contact">
                                    <label for="contact">Contact</label>
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="addressLine1" placeholder=""
                                    v-model="addressLine1" required>
                                <label for="addressLine1">Address Line 1</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="addressLine2" placeholder=""
                                    v-model="addressLine2">
                                <label for="addressLine2">Address Line 2</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="city" placeholder="" v-model="city" required>
                                <label for="city">City</label>
                            </div>
                            <div class="d-flex gap-2">
                                <div class="form-floating mb-3 w-50">
                                    <input type="text" class="form-control" id="state" placeholder="" v-model="state"
                                        required>
                                    <label for="state">State</label>
                                </div>
                                <div class="form-floating mb-3 w-50">
                                    <input type="number" class="form-control" id="pin" placeholder="" v-model="zip"
                                        required>
                                    <label for="pin">Pin Code</label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="billingCheckbox"
                                        v-model="billingCheckbox">
                                    <label class="form-check-label" for="billingCheckbox">
                                        Billing Only
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="shippingCheckbox"
                                        v-model="shippingCheckbox">
                                    <label class="form-check-label" for="shippingCheckbox">
                                        Shipping Only
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="bothCheckbox"
                                        v-model="bothCheckbox">
                                    <label class="form-check-label" for="bothCheckbox">
                                        Both Billing & Shipping
                                    </label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center align-items-center">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import ImageUploadBox from '@/components/avatar/ImageUploadBox.vue';

export default {
    name: 'ProfilePage',
    components: { ImageUploadBox },
    data() {
        return {
            addressLine1: '',
            addressLine2: '',
            email: '',
            whatsapp: '',
            contact: '',
            city: '',
            state: '',
            zip: '',
            isFormVisible: false,
            billingCheckbox: false,
            shippingCheckbox: false,
            bothCheckbox: false
        }
    },
    computed: {
        buyer() {
            return this.$store.getters.getBuyers;
        }
    },
    methods: {
        showForm() {
            this.isFormVisible = true;
        },
        hideForm() {
            this.isFormVisible = false;
            // Reset form fields when hiding the form
            this.addressLine1 = '';
            this.addressLine2 = '';
            this.city = '';
            this.state = '';
            this.zip = '';
        },
        saveAddress() {
            // Handle saving the address (you can send the data to your server here)
            console.log('Address saved:', {
                addressLine1: this.addressLine1,
                addressLine2: this.addressLine2,
                city: this.city,
                state: this.state,
                zip: this.zip,
                billingOnly: this.billingCheckbox,
                shippingOnly: this.shippingCheckbox,
                bothBillingAndShipping: this.bothCheckbox
            });
            // Hide the form after saving the address
            this.hideForm();
        }
    }
}
</script>

<style lang="scss" scoped></style>