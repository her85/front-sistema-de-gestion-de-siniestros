<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="minimalist-header" bordered>
      <q-toolbar class="minimalist-toolbar">
        <q-btn
          flat
          dense
          round
          icon="home"
          to="/"
          aria-label="Inicio"
          class="q-mr-sm"
        />
        <q-toolbar-title class="minimalist-logo">
          Sistema de gestión de siniestros
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.minimalist-header {
  background: #fff;
  color: #000;
  box-shadow: none;
  border-bottom: 1px solid #e0e0e0;
}

.minimalist-toolbar {
  min-height: 56px;
  padding: 0 1rem;
}

.minimalist-logo {
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}
</style>
