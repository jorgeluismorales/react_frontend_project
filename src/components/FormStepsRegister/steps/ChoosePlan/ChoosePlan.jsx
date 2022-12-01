import { useState } from 'react'

import styles from './ChoosePlan.module.css'

const ChoosePlan = ({ formData, setFormData }) => {

  const [selectedPLan, setSelectedPlan] = useState('');

  const handlePlanChange = (plan) => {
    setFormData({ ...formData, plan })
    setSelectedPlan(plan);
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.boxPlan} ${selectedPLan === 'basic' ? styles.selectedPlan : styles.deselectedPlan}`} onClick={() => handlePlanChange('basic')}>
        Basic
      </div>

      <div className={`${styles.boxPlan} ${selectedPLan === 'standard' ? styles.selectedPlan : styles.deselectedPlan}`} onClick={() => handlePlanChange('standard')}>
        Standard
      </div>

      <div className={`${styles.boxPlan} ${selectedPLan === 'premium' ? styles.selectedPlan : styles.deselectedPlan}`} onClick={() => handlePlanChange('premium')}>
        Premium
      </div>
    </div>
  )
}

export default ChoosePlan