import { Component, OnInit } from '@angular/core';
import { SessionGuard } from 'src/app/guards/session.guard';

@Component({
  selector: 'app-landpage',
  templateUrl: './adminLandpage.component.html',
  styleUrls: ['./adminLandpage.component.scss'],
  providers: [SessionGuard]
})
export class AdminLandpageComponent implements OnInit {

  constructor() { }

  dataset = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    }
  ];

  ngOnInit() {
  }

}
