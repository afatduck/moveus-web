export function passwordValidator(password: string): string | undefined {
    if (password.length < 8) return "Password must be at least 8 characters long."
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter."
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter."
    if (!/[0-9]/.test(password)) return "Password must contain at least one number."
    if (!/\W/.test(password)) return "Password must contain at least one special character."
}
