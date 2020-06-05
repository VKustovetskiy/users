<template>
    <v-form
      v-model="isFormValid"
      ref="userForm"
      lazy-validation
      @submit.prevent.stop="handleSubmit">
      <v-card elevation="3">
        <v-card-title class="headline grey lighten-3">
          {{ formTitle }}
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                v-model.trim="formData.first_name"
                :rules="rules.name"
              >
                <template #label>
                  <span>First Name <span class="red--text">*</span></span>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model.trim="formData.last_name"
                :rules="rules.name"
              >
                <template #label>
                  <span>Last Name <span class="red--text">*</span></span>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model.trim="formData.email"
                :rules="rules.email"
              >
                <template #label>
                  <span>Email <span class="red--text">*</span></span>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model.trim="formData.job"
                :rules="rules.job"
              >
                <template #label>
                  <span>Job <span class="red--text">*</span></span>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model.trim="formData.password"
                :rules="rules.password"
                @input="validationSync"
              >
                <template #label>
                  <span>Password <span class="red--text">*</span></span>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model.trim="formData.confirm_password"
                :rules="rules.confirm_password"
              >
                <template #label>
                  <span>Confirm password <span class="red--text">*</span></span>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <v-divider class="mt-5"></v-divider>

        </v-card-text>
        
        <v-card-actions class="justify-center justify-sm-end">
          <v-btn
            text
            color="error"
            height="45"
            min-width="100"
            @click.stop="handleCancel"
          >
            Close
          </v-btn>
          <v-btn
            :disabled="isBtnDisabled"
            :loading="showBtnLoader"
            text
            color="success"
            height="45"
            min-width="100"
            type="submit"
          >
            {{ submitBtnTitle }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
</template>

<script>
import {
  required,
  passwordOnlyLatin,
  passwordMinLength,
  passwordMaxLength,
  passwordInvalidFormat,
  passwordEquality,
  validateEmail,
  minCharCount,
  maxCharCount
} from '@/utils'

export default {
  name: 'BaseUserForm',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    userData: {
      type: Object,
      default: () => {}
    },
    formTitle: {
      type: String,
      default: ''
    },
    submitBtnTitle: {
      type: String,
      default: 'submit'
    },
    submitHandler: {
      type: Function,
      default: () => {}
    },
    cancelHandler : {
      type: Function,
      default: () => {}
    }
  },
  data: function () {
    return {
      isFormValid: false,
      showBtnLoader: false,
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        job: '',
        password: '',
        confirm_password: ''
      },
      rules: {
        name: [
          required,
          minCharCount,
          maxCharCount
        ],
        email: [
          required,
          validateEmail
        ],
        job: [
          required
        ],
        password: [
          required,
          passwordOnlyLatin,
          passwordMinLength,
          passwordMaxLength,
          passwordInvalidFormat
        ],
        confirm_password: [
          required,
          value => passwordEquality(this.formData.password, value)
        ]
      }
    }
  },
  watch: {
    userData: {
      handler (newVal) {
        this.setFormData(newVal)
      }
    }
  },
  computed: {
    isBtnDisabled () {
      return this.isLoading || !this.isFormValid
    }
  },
  methods: {
    async handleSubmit () {
      if (this.validationSync()) {
        try {
          this.showBtnLoader = true
          await this.submitHandler(this.formData)
          this.showBtnLoader = false
          this.cancelHandler()
          this.$notify({
            type: 'success',
            group: 'userCrud',
            text: 'Successfully saved.'
          })
        } catch {
          this.showBtnLoader = false
        }
      }
    },
  
    setFormData () {
      this.formData = { ...this.formData, ...this.userData }
    },

    handleCancel () {
      this.cancelHandler()
    },

    validationSync () {
      return this.$refs.userForm.validate()
    }
  }
}
</script>

<style>

</style>