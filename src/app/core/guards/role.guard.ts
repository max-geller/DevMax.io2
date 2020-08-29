/*
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      //Your redirection logic goes here

      if (this.auth.loggedIn()) {

        if (currentUser['role'] == 'User') {
            this.router.navigate(['/dashboard/user']);
        }

        if (currentUser['role'] == 'Admin') {
            this.router.navigate(['/dashboard/admin']);
        }
    }
*/