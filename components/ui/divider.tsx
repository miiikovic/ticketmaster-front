'use client';

import styles from '../../styles/divider.module.css';

/**
 * A full-width light gray divider component.
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS class name
 * @param {number} [props.marginY=40] - Vertical margin in pixels
 */
const Divider = ({ className, marginY = 40 }) => {
    return (
        <div
            className={`${styles.divider} ${className || ''}`}
            style={{ marginTop: `${marginY}px`, marginBottom: `${marginY}px` }}
        />
    );
};

export default Divider;