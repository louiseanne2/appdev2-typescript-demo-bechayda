(() => {
    type Role = 'admin' | 'guest' | 'teacher' | 'student'

    // Object Type
    type User = {
        name: string
        age: number
        role: Role
        permission: string[]
    }

    
    const user: User = {
        name: 'Louise',
        age: 21,
        role: 'admin',
        permission: ['create', 'edit', 'delete']
    }

    
    function access(role: Role): string {
        switch (role) {
            case 'admin':
                return 'Full access granted'
            case 'teacher':
                return 'Can manage classes and students'
            case 'student':
                return 'Can access learning materials'
            case 'guest':
                return 'Limited access only'
            default:
                return 'No access'
        }
    }

    console.log(user.name + ': ' + access(user.role))

    
    const roles: Role[] = ['admin', 'teacher', 'student', 'guest']

    roles.forEach(r => {
        console.log(r + ': ' + access(r))
    })
})()