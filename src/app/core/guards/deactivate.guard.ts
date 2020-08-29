
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface DeactivationGuarded {
  canDeactivate(): Observable<boolean>;
}

@Injectable()
export class CanDeactivateGuard {


}