import React from 'react';
import styles from '../styles/BuildOrder.module.css';
import { resourceInfo, Step, typeIcons } from '../data/buildOrders';

interface StepCardProps {
    step: Step;
    type: 'current' | 'next';
}

const StepCard: React.FC<StepCardProps> = ({ step, type }) => {
    if (!step) return null;

    const isCurrent = type === 'current';
    const indicatorClass = isCurrent ? styles.stepIndicatorCurrent : styles.stepIndicatorNext;
    const titleClass = isCurrent ? styles.stepTitleCurrent : styles.stepTitleNext;
    const stepCardClass = isCurrent ? styles.currentStep : styles.nextStep;
    const populationLabelClass = isCurrent ? styles.populationLabelCurrent : styles.populationLabelNext;
    const populationValueClass = isCurrent ? styles.populationValueCurrent : styles.populationValueNext;
    const stepDescriptionClass = isCurrent ? styles.stepDescriptionCurrent : styles.stepDescriptionNext;

    // Get resource icon and card color
    const resource = step.resource || 'default';
    const { icon: resourceIcon, cardClass: resourceCardClass } = resourceInfo[resource] || resourceInfo.default;

    // Get type icon
    const typeIcon = typeIcons[step.type] || typeIcons.default;

    return (
        <div
            className={`
                ${stepCardClass}
                ${resourceCardClass}
                ${styles.stepCard}
                ${styles.stepCardResponsive} {/* Nueva clase para mobile */}
            `}
        >
            <div className={styles.stepHeader}>
                <div className={`${styles.stepIndicator} ${indicatorClass}`}></div>
                <h2 className={`${styles.stepTitle} ${titleClass}`}>
                    {isCurrent ? 'PASO ACTUAL' : 'PRÓXIMO PASO'}
                </h2>
                <span className={styles.typeIcon} title={step.type}>{typeIcon}</span>
            </div>
            <div className={styles.stepContent}>
                <div className={styles.populationInfo}>
                    <span className={styles.populationIcon}>{resourceIcon}</span>
                    <span className={`${styles.populationLabel} ${populationLabelClass}`}>Aldeano:</span>
                    <span className={`${styles.populationValue} ${populationValueClass}`}>{step.villager}</span>
                    {isCurrent && (
                        <>
                            <span className={`${styles.populationLabel} ${populationLabelClass}`}>Pop:</span>
                            <span className={`${styles.populationValue} ${populationValueClass}`}>{step.pop}</span>
                        </>
                    )}
                </div>
                <div className={`${styles.stepDescription} ${stepDescriptionClass}`}>
                    {step.description}
                </div>
            </div>
        </div>
    );
};

export default StepCard;