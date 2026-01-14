<template>
  <div class="claim-list">
    <div class="action-bar">
      <q-btn 
        flat
        label="+ Nuevo siniestro" 
        to="/claims/new" 
        class="btn-minimalist"
        no-caps
        unelevated
      />
    </div>

    <div class="claims-grid">
      <div 
        v-for="c in claims" 
        :key="c.id" 
        class="minimalist-card claim-card"
        @click="$router.push(`/claims/${c.id}`)"
      >
        <div class="claim-claimNumber">Siniestro {{ c.claimNumber }}</div>
        <div class="claim-header">
          
          <span class="minimalist-badge status-badge">{{ c.status }}</span>
          <span class="claim-date">{{ formatDate(c.incidentDate) }}</span>
        </div>
        <div class="claim-description">{{ c.description }}</div>
        <div class="claim-footer" v-if="c.amount">
          <span class="claim-amount">{{ formatAmount(c.amount) }}</span>
        </div>
      </div>
    </div>

    <div v-if="claims.length === 0" class="empty-state">
      <p class="minimalist-subtitle">No hay siniestros registrados</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getClaims } from 'src/services/claimService'
import type { Claim } from 'components/models'

const claims = ref<Claim[]>([])

async function load() {
  claims.value = await getClaims()
}

function formatDate(d?: string) {
  if (!d) return '-' 
  return new Date(d).toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'short',
    year: 'numeric'
  })
}

function formatAmount(amount: number) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  }).format(amount)
}

onMounted(load)
</script>

<style scoped lang="scss">
.claim-list {
  width: 100%;
}

.action-bar {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: flex-end;
}

.btn-minimalist {
  background: #000;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
}

.claims-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

.claim-claimNumber {
  font-size: 0.875rem;
  font-weight: 600;
  color: #000;
}

@media (min-width: 768px) {
  .claims-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (min-width: 1024px) {
  .claims-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.claim-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.claim-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.status-badge {
  text-transform: uppercase;
  font-size: 0.625rem;
  letter-spacing: 0.05em;
}

.claim-date {
  font-size: 0.75rem;
  color: #999;
}

.claim-description {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #000;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.claim-footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 0.5rem;
  border-top: 1px solid #f0f0f0;
}

.claim-amount {
  font-size: 0.875rem;
  font-weight: 600;
  color: #000;
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
}
</style>
