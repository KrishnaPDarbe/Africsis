import {
  Component,
} from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  bannerImages = [
    {
      image: '../../assets/core/banner1.jpg',
      caption:
        'The nuclear security can be viewed under two major perspectives. The narrow view, the physical security of nuclear materials, is predominantly concerned with the "guns guards and gates" model. The African Center for science and internatinal security',
      title: 'NUCLEAR SECURITY PROGRAM (NSP)',
    },
    {
      image: '../../assets/core/banner2.jpg',
      caption:
        'We envision a safer, more secure and stable Africa that is obtaining maximum benefits from dual-use science and technology in the fields of nuclear science and technology and satellite applications',
      title: 'African center for science and international security',
    },
  ];
}
