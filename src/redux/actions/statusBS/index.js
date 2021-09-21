export const StatusBS = (data) => {
    localStorage.setItem('StatsBS', JSON.stringify(data))
    return {
        type: "STATUSBS",
        payload: data
    }
}
