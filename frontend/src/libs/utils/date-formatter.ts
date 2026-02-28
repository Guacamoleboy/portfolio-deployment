export const formatDanishTime = (date: Date) => {
    return date.toLocaleTimeString('da-DK', {
        hour: '2-digit',
        minute: '2-digit',
    });
};