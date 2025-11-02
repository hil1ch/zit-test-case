import type { Priority } from "../components/TodoItem/TodoItem"

export const getPriotiryColor = (priority: Priority) => {
    switch (priority) {
        case 'High':
            return 'red'
        case 'Medium':
            return 'orange'
        case 'Low':
            return 'green'
    }
}