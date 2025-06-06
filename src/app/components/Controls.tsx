import React from 'react';
import styles from '../styles/BuildOrder.module.css';
import { Step } from '../data/buildOrders';

interface ControlsProps {
  isRunning: boolean;
  isMobile: boolean;
  stepIndex: number;
  build: { steps: Step[] };
  onStart: () => void;
  onPause: () => void;
  onNext: () => void;
  onReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  isRunning,
  isMobile,
  stepIndex,
  build,
  onStart,
  onPause,
  onNext,
  onReset,
}) => {
  return (
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
          onClick={onStart}
          className={`${styles.button} ${styles.buttonStart}`}
          aria-label="Iniciar"
          style={{ flex: isMobile ? '1 1 auto' : undefined, maxWidth: isMobile ? 80 : undefined }}
        >
          ▶️{!isMobile && ' INICIAR'}
        </button>
      ) : (
        <>
          <button
            onClick={onPause}
            className={`${styles.button} ${styles.buttonPause}`}
            aria-label="Pausar"
            style={{ flex: isMobile ? '1 1 auto' : undefined, maxWidth: isMobile ? 80 : undefined }}
          >
            ⏸️{!isMobile && ' PAUSAR'}
          </button>
          <button
            onClick={onNext}
            disabled={stepIndex >= build.steps.length - 1}
            className={`${styles.button} ${styles.buttonNext}`}
            aria-label="Siguiente"
            style={{ flex: isMobile ? '1 1 auto' : undefined, maxWidth: isMobile ? 80 : undefined }}
          >
            ⏭️{!isMobile && ' SIGUIENTE'}
          </button>
          <button
            onClick={onReset}
            className={`${styles.button} ${styles.buttonReset}`}
            aria-label="Reiniciar"
            style={{ flex: isMobile ? '1 1 auto' : undefined, maxWidth: isMobile ? 80 : undefined }}
          >
            🔄{!isMobile && ' REINICIAR'}
          </button>
        </>
      )}
    </div>
  );
};

export default Controls;
