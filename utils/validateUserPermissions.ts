type User = {
  permissions: string[];
  roles: string[];
};

type validadeUserPermissionParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function validadeUserPermission({
  user,
  permissions,
  roles,
}: validadeUserPermissionParams) {
  if (permissions.length <= 0 && roles.length <= 0) return false;

  if (permissions.length > 0) {
    const hasAllPermissions = permissions.every((permission) => {
      return user.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles.length > 0) {
    const hasAllRoles = roles.some((role) => {
      return user.roles.includes(role);
    });

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
