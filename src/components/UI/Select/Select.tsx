import styles from './Select.module.css';
import { HiChevronDown } from 'react-icons/hi';

const options = [
    'Low',
    'Medium',
    'High'
]

export function Select() {
    return (
        <div className={styles['select-wrapper']}>
            <select className={styles['select']} defaultValue={options[1]}>
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
            <HiChevronDown className={styles['icon']} />
        </div>
    )
}