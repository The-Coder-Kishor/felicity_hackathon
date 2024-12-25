"use client"

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';

const AnimatedSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can disconnect the observer
                    observer.disconnect();
                }
            },
            {
                // Adjust these values based on when you want the animation to trigger
                threshold: 0.5, // Trigger when at least 10% of the element is visible
                rootMargin: '50px' // Trigger slightly before the element comes into view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section>
            {/* Timeline Section */}
            <section id="timeline" className={styles.section} ref={sectionRef}>
                <h2 className={styles.sectionTitle}>Timeline</h2>
                <h1 className={styles.sectionSubtitle}>The schedule for the hackthon</h1>

                <div className={styles.timeline}>
                    {/* First Event */}
                    <div className={`${styles.timeline__event} ${isVisible ? styles.animated + ' ' + styles.fadeInUp : ''} ${styles['timeline__event--type1']}`}>
                        <div className={styles.timeline__event__icon}></div>
                        <div className={styles.timeline__event__date}>
                            September 1985
                        </div>
                        <div className={styles.timeline__event__content}>
                            <div className={styles.timeline__event__title}>
                                Event 1
                            </div>
                            <div className={styles.timeline__event__description}>
                                <p>desc of event 1 fjsdnkfsdjfksdjbfskdjbfdk vsdn ekjbwekjfb</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Event */}
                    <div className={`${styles.timeline__event} ${isVisible ? styles.animated + ' ' + styles.fadeInUp + ' ' + styles['delay-1s'] : ''} ${styles['timeline__event--type2']}`}>
                        {/* Same content as before */}
                        <div className={styles.timeline__event__icon}></div>
                        <div className={styles.timeline__event__date}>
                            June 1986
                        </div>
                        <div className={styles.timeline__event__content}>
                            <div className={styles.timeline__event__title}>
                                Event 2
                            </div>
                            <div className={styles.timeline__event__description}>
                                <p>desc of event 2 fjsdnkfsdjfksdjbfskdjbfdk vsdn ekjbwekjfb</p>
                            </div>
                        </div>
                    </div>

                    {/* Continue the same pattern for other events... */}
                    {/* The pattern continues for events 3-6 with the same isVisible conditional class application */}

                    {/* Third Event */}
                    <div className={`${styles.timeline__event} ${isVisible ? styles.animated + ' ' + styles.fadeInUp + ' ' + styles['delay-2s'] : ''} ${styles['timeline__event--type3']}`}>
                        <div className={styles.timeline__event__icon}></div>
                        <div className={styles.timeline__event__date}>
                            October 1988
                        </div>
                        <div className={styles.timeline__event__content}>
                            <div className={styles.timeline__event__title}>
                                Event 3
                            </div>
                            <div className={styles.timeline__event__description}>
                                <p>Desc of event 3 fjsdnkfsdjfksdjbfskdjbfdk vsdn ekjbwekjfb</p>
                            </div>
                        </div>
                    </div>

                    {/* Fourth Event */}
                    <div className={`${styles.timeline__event} ${isVisible ? styles.animated + ' ' + styles.fadeInUp + ' ' + styles['delay-3s'] : ''} ${styles['timeline__event--type1']}`}>
                        <div className={styles.timeline__event__icon}></div>
                        <div className={styles.timeline__event__date}>
                            October 1988
                        </div>
                        <div className={styles.timeline__event__content}>
                            <div className={styles.timeline__event__title}>
                                event 4
                            </div>
                            <div className={styles.timeline__event__description}>
                                <p>desc of event 4 fjsdnkfsdjfksdjbfskdjbfdk vsdn ekjbwekjfb</p>
                            </div>
                        </div>
                    </div>

                    {/* Fifth Event */}
                    <div className={`${styles.timeline__event} ${isVisible ? styles.animated + ' ' + styles.fadeInUp + ' ' + styles['delay-4s'] : ''} ${styles['timeline__event--type1']}`}>
                        <div className={styles.timeline__event__icon}></div>
                        <div className={styles.timeline__event__date}>
                            April 1989
                        </div>
                        <div className={styles.timeline__event__content}>
                            <div className={styles.timeline__event__title}>
                                Event 5
                            </div>
                            <div className={styles.timeline__event__description}>
                                <p>desc of event 5 fjsdnkfsdjfksdjbfskdjbfdk vsdn ekjbwekjfb</p>
                            </div>
                        </div>
                    </div>

                    {/* Sixth Event */}
                    <div className={`${styles.timeline__event} ${isVisible ? styles.animated + ' ' + styles.fadeInUp + ' ' + styles['delay-5s'] : ''} ${styles['timeline__event--type2']}`}>
                        <div className={styles.timeline__event__icon}></div>
                        <div className={styles.timeline__event__date}>
                            June 1990
                        </div>
                        <div className={styles.timeline__event__content}>
                            <div className={styles.timeline__event__title}>
                                Event 6
                            </div>
                            <div className={styles.timeline__event__description}>
                                <p>desc of event 6 fsdfsfsdfsffjfj vsdn ekjbwekjfb</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AnimatedSection;