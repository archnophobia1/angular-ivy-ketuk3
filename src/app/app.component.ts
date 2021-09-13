import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
ngOnInit(): void {
  document.getElementById('myForm').style.display = 'block';
  document.getElementById('socialHist').style.display = 'none';
}
  name = 'Angular ' + VERSION.major;
  openForm() {
    document.getElementById('myForm').style.display = 'block';
    document.getElementById('socialHist').style.display = 'none';
  }

  closeForm() {
    document.getElementById('myForm').style.display = 'none';
  }

  openSocialHistory() {
    document.getElementById('myForm').style.display = 'none';
    document.getElementById('socialHist').style.display = 'block';
  }
  closeSocialHistory() {
    document.getElementById('socialHist').style.display = 'none';
  }
}
