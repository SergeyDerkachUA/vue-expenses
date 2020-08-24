<template>
    <div>
        <div class="grey darken-1 empty-layout">
            <router-view />
        </div>
    </div>
</template>

<script>
import messages from '@/utils/messages'
export default {
    computed: {
        error() {
            return this.$store.getters.error
        }
    },
    watch: {
        error(fbError) {
            this.$error(messages[fbError.code] || 'Походу получилась барада' ) 
        }
    }
}
</script>