'use client';

import { useState, useEffect } from 'react';
import { buildOrders } from './data/buildOrders';
import styles from './styles/BuildOrder.module.css';
import StepCard from './components/StepCard';

const STEP_DURATION = 25;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export default function BuildOrderAssistant() {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState('scouts');
  const [stepIndex, setStepIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const build = buildOrders[selected];
  const step = build.steps[stepIndex];
  const nextStep = build.steps[stepIndex + 1];

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        const next = prev + 1;
        if (next % STEP_DURATION === 0 && stepIndex < build.steps.length - 1) {
          setStepIndex((i) => i + 1);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, stepIndex, build.steps.length]);

  const handleReset = () => {
    setStepIndex(0);
    setSeconds(0);
    setIsRunning(false);
  };

  const handleNext = () => {
    if (stepIndex < build.steps.length - 1) {
      setStepIndex((prev) => prev + 1);
      setSeconds((prev) => prev + STEP_DURATION);
    }
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((stepIndex + 1) / build.steps.length) * 100;

  return (
    <div className={styles.container}>
      {/* Header */}
      {!isMobile && (
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div>
              <h1 className={styles.title}>
                Build Order Assistant
              </h1>
            </div>
            <div className={styles.timerContainer}>
              <div className={styles.timer}>
                {formatTime(seconds)}
              </div>
              <div className={styles.stepCounter}>
                Paso {stepIndex + 1} de {build.steps.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Panel - Controls */}
        <div className={styles.leftPanel}>
          {/* Build Selection */}
          <div className={styles.buildSelection}>
            <label className={styles.label}>
              Seleccionar Build:
            </label>
            <select
              className={styles.select}
              value={selected}
              onChange={(e) => {
                setSelected(e.target.value);
                handleReset();
              }}
            >
              {Object.entries(buildOrders).map(([key, value]) => (
                <option key={key} value={key} className="bg-gray-700 text-white">
                  {value.name}
                </option>
              ))}
            </select>
          </div>

            {/* Control Buttons */}
            <div
              className={`${styles.controlsContainer} ${isMobile ? styles.controlsRow : ''}`}
              style={
              isMobile
                ? {
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '8px',
                  justifyContent: 'center',
                  width: 'auto',
                  maxWidth: '100%',
                  flexWrap: 'wrap',
                }
                : { width: '100%', maxWidth: 320, margin: '0 auto' }
              }
            >
              {!isRunning ? (
              <button
                onClick={() => setIsRunning(true)}
                className={`${styles.button} ${styles.buttonStart}`}
                aria-label="Iniciar"
                style={{ flex: isMobile ? '1 1 auto' : undefined, maxWidth: isMobile ? 80 : undefined }}
              >
                ▶️{!isMobile && ' INICIAR'}
              </button>
              ) : (
              <>
                <button
                onClick={() => setIsRunning(false)}
                className={`${styles.button} ${styles.buttonPause}`}
                aria-label="Pausar"
                style={{ flex: isMobile ? '1 1 auto' : undefined, maxWidth: isMobile ? 80 : undefined }}
                >
                ⏸️{!isMobile && ' PAUSAR'}
                </button>
                <button
                onClick={handleNext}
                disabled={stepIndex >= build.steps.length - 1}
                className={`${styles.button} ${styles.buttonNext}`}
                aria-label="Siguiente"
                style={{ flex: isMobile ? '1 1 auto' : undefined, maxWidth: isMobile ? 80 : undefined }}
                >
                ⏭️{!isMobile && ' SIGUIENTE'}
                </button>
                <button
                onClick={handleReset}
                className={`${styles.button} ${styles.buttonReset}`}
                aria-label="Reiniciar"
                style={{ flex: isMobile ? '1 1 auto' : undefined, maxWidth: isMobile ? 80 : undefined }}
                >
                🔄{!isMobile && ' REINICIAR'}
                </button>
              </>
              )}
            </div>

          {/* Progress Bar (solo desktop) */}
          {!isMobile && (
            <div className={styles.progressContainer}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel}>Progreso</span>
                <span className={styles.progressValue}>{Math.round(progress)}%</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Current & Next Steps */}
        <div className={styles.rightPanel}>
          {/* Current Step */}
          <StepCard step={step} type="current" />

          {/* Next Step (solo desktop) */}
          {!isMobile && nextStep && (
            <StepCard step={nextStep} type="next" />
          )}

          {/* Completion Message */}
          {stepIndex >= build.steps.length - 1 && (
            <div className={`${styles.stepCard} ${styles.completedStep}`}>
              <div className={styles.completionMessage}>
                <span className={styles.completionIcon}>🎉</span>
                <h2 className={styles.completionText}>¡BUILD ORDER COMPLETADO!</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}