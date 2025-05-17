function displayName(username: string, firstname: string, lastname: string): string {
    if (!firstname) return username;
    return firstname + (lastname ? " " + lastname : "") 
}

export { displayName }