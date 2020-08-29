import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, fromEvent, merge, empty } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { mapTo } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ConnectionService {

    private connectionMonitor: Observable<boolean>;

    constructor(@Inject(PLATFORM_ID) platform) {
        if (isPlatformBrowser(platform)) {
            const offline$ = fromEvent(window, 'offline').pipe(mapTo(false));
            const online$ = fromEvent(window, 'online').pipe(mapTo(true));
            this.connectionMonitor = merge(
                offline$, online$
            );
        } else {
            this.connectionMonitor = empty();
        }



    }

    monitor(): Observable<boolean> {
        return this.connectionMonitor;
    }
}