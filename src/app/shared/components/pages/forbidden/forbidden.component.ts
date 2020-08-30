import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  templateUrl: './forbidden.component.html',
})
export class ForbiddenComponent implements OnInit {

  constructor() { }

  ngOnInit(): any {
    const gif = [
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-1.gif?alt=media&token=e71a6ac4-6c8d-4760-babb-760a288c026a',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-10.gif?alt=media&token=190331e5-bb9d-4c7d-88ab-1d8a65817669',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-11.gif?alt=media&token=eaac42d5-9bae-4ccc-b293-1d301f8f7155',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-12.gif?alt=media&token=d5957914-ee6c-4c16-92f5-4827c2597c61',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-13.gif?alt=media&token=6c26f0d4-ed82-4569-ba93-da3841b8d3a3',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-15.gif?alt=media&token=80334c2c-c9f1-4b6b-b37c-6604e7798e57',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-16.gif?alt=media&token=f42ad91e-febb-4e42-9ea1-42a512efa1aa',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-18.gif?alt=media&token=5e9a608e-3011-495c-8827-3ccba242e877',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-19.gif?alt=media&token=85a9abc7-2a19-4977-a7e9-382609d41b17',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-20.gif?alt=media&token=debc9319-4ab2-44a5-9f42-68c687c32a67',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-21.gif?alt=media&token=1eb0c98d-1a93-4293-bc55-8f97448a68d9',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-22.gif?alt=media&token=7f23fdf3-8ac6-43ba-a79a-27a07a58aa65',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-23.gif?alt=media&token=a09104a3-c39c-4301-a35e-cf6499217618',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-25.gif?alt=media&token=e25e3c45-0ed8-4b51-8430-8c5431422ce8',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-26.gif?alt=media&token=eb77c070-bc4e-4b72-9b78-79d265686255',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-28.gif?alt=media&token=64ad0708-c3aa-484b-80f9-c4a3c0381c2a',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-29.gif?alt=media&token=a1509be4-b29e-4bf2-9797-d5c08c5ada20',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-3.gif?alt=media&token=8865592e-35de-478f-b5b0-8d34e0ec8645',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-30.gif?alt=media&token=7272bc4d-c258-4b8e-9864-562c042efae7',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-31.gif?alt=media&token=0907c0d5-8dda-44bd-b91b-45bdfcdafa01',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-32.gif?alt=media&token=9faa53f6-a0be-4a99-855c-6383c953e94a',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-33.gif?alt=media&token=7217a1c1-b7f1-413b-acf4-09a6e60780c3',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-34.gif?alt=media&token=16c70818-04d6-43f6-8edd-a6df517d8713',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-35.gif?alt=media&token=03437b1e-0853-4669-b0f5-8239e7368c72',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-36.gif?alt=media&token=27f423bc-95c1-4023-8d12-c58b43af1684',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-37.gif?alt=media&token=a94621d3-89fd-422b-955d-7292cb62497c',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-39.gif?alt=media&token=8cff765f-20d0-4102-83af-8a7db8ec5ce9',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-4.gif?alt=media&token=5e456830-fd04-4180-ab9a-8ad0a98479f4',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-40.gif?alt=media&token=c943acb9-eede-4fb5-8b98-5500799cbda3',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-41.gif?alt=media&token=4c9cc001-9944-4031-9f9d-22b782575a22',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-42.gif?alt=media&token=ee656733-a430-492b-a90e-01b568c78a7b',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-5.gif?alt=media&token=01b5bfef-9fe9-49a0-be08-c5451a97317e',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-6.gif?alt=media&token=3b5c09e1-ac3c-49af-803b-73895d6235c9',
      'https://firebasestorage.googleapis.com/v0/b/estibase-dev.appspot.com/o/forbidden%2Fnope-8.gif?alt=media&token=944f99d1-20d2-4fa7-a307-863240f90145',

    ];
    $('body').css({ 'background': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + gif[Math.floor(Math.random() * gif.length)] + ')' });
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
}
