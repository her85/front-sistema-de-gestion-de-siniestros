<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Sistema de destión de siniestros</h1>
        <p class="hero-subtitle">
          Administra y controla todos tus siniestros de manera eficiente y organizada
        </p>
        <div class="hero-actions q-mt-lg">
          <q-btn
            to="/claims"
            label="Ver Siniestros"
            color="primary"
            size="lg"
            unelevated
            class="q-mr-md"
          />
          <q-btn
            to="/claims/new"
            label="Reportar Nuevo Siniestro"
            color="secondary"
            size="lg"
            outline
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section q-py-xl">
      <div class="container">
        <h2 class="section-title text-center q-mb-xl">Características Principales</h2>
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-4">
            <q-card class="feature-card">
              <q-card-section class="text-center">
                <q-icon name="description" size="64px" color="primary" />
                <h3 class="q-mt-md q-mb-sm">Gestión Completa</h3>
                <p class="text-grey-7">
                  Administra todos los detalles de tus siniestros en un solo lugar
                </p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card class="feature-card">
              <q-card-section class="text-center">
                <q-icon name="trending_up" size="64px" color="secondary" />
                <h3 class="q-mt-md q-mb-sm">Seguimiento en Tiempo Real</h3>
                <p class="text-grey-7">
                  Monitorea el estado y progreso de cada siniestro al instante
                </p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card class="feature-card">
              <q-card-section class="text-center">
                <q-icon name="security" size="64px" color="positive" />
                <h3 class="q-mt-md q-mb-sm">Seguro y Confiable</h3>
                <p class="text-grey-7">
                  Toda tu información protegida con los más altos estándares de seguridad
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="footer-section q-py-lg bg-grey-9 text-white">
      <div class="container text-center">
        <p class="q-mb-sm">Sistema de Gestión de Siniestros © 2026</p>
        <p class="text-grey-5">Todos los derechos reservados</p>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hero-section {
  background: linear-gradient(135deg, #3f3f3f 0%, #080808 100%);
  color: white;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.features-section {
  background-color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
}

.feature-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
  }
}

.footer-section {
  p {
    margin: 0.5rem 0;
  }
}
</style>
