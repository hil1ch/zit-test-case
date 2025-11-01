import { Button } from '../UI/Button/Button';
import styles from './Filter.module.css';
import cn from 'classnames';

export function Filter() {
    return (
        <div className={styles['filter']}>
            <span className={styles['sort-by']}>Сортировать:</span>
            {['Все', 'Завершенные'].map((f) => (
                <Button key={f} type='button' className={cn(styles['filter-btn'], styles['active'])}>{f}</Button>
            ))}
        </div>
    )
}