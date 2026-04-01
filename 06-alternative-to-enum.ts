(() => {
    type UserRole = 'admin' | 'guest' | 'teacher' | 'student'

    let userRole: UserRole = 'guest'

    function access(role: UserRole): string {
        if (role === 'admin') {
            return 'Full access granted'
        } else if (role === 'teacher') {
            return 'Can manage classes and students'
        } else if (role === 'student') {
            return 'Can access learning materials'
        } else {
            return 'Limited access only'
        }
    }

    console.log(access(userRole)) // Full access granted
})()