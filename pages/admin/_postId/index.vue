<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'

export default {
  components: { AdminPostForm },
  layout: 'admin',
  data () {
    return {
      loadedPost: {
        author: 'Hector',
        title: 'My First Post',
        content: 'GG',
        thumbnail: 'https://www.comillas.edu/images/modulo_cabecera/postgrado/Propios/DiplomaLegalTech.jpg'
      }
    }
  }
}

</script>
<style  scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
