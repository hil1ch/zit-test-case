import type { Priority } from "../components/TodoItem/TodoItem"

export const getPriorityColor = (priority: Priority) => {
  switch (priority) {
    case 'High':
      return { color: '#ff4444' };
    case 'Medium':
      return { color: '#ffaa00' };
    case 'Low':
      return { color: '#00c851' };
  }
};