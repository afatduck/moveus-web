const MS_IN_YEAR = 1000 * 60 * 60 * 24 * 365;

function getAge(dob: Date): number {
    const nowMS = new Date().getTime()
    const dobMS = dob.getTime()
    const d = nowMS - dobMS
    return Math.trunc(d / MS_IN_YEAR)
}

export { getAge }