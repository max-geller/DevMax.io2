import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

declare var StripeCheckout: StripeCheckoutStatic;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})

export class CheckoutComponent implements OnInit {
  constructor(private auth: AuthService, private functions: AngularFireFunctions) { }
  @Input() email;
  @Input() amount;
  @Input() description;

  handler: StripeCheckoutHandler;

  confirmation: any;
  loading = false;

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: 'pk_test_gXnogKMjTJRLw2Wy19tQijm100HfTIb8Qq',
      image: 'some-image',
      locale: 'auto',
      source: async (source) => {
        this.loading = true;
        const user = await this.auth.getUser();
        const fun = this.functions.httpsCallable('stripeCreateCharge');
        this.confirmation = await fun({ source: source.id, uid: this.auth.getUser(), amount: this.amount }).toPromise();
        this.loading = false;
      }
    })
  }

  // Open the checkout handler
  async checkout(e) {
    const user = await this.auth.getUser();
    this.handler.open({
      name: 'DevMax.io Membership',
      description: this.description,
      amount: this.amount,
      email: this.email,
    });
    e.preventDefault();
  }

  // Close on Navigate
  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }

}
