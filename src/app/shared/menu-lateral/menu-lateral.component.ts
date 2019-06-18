import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();
 
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { 
    this.matIconRegistry.addSvgIcon(
      "home",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/home.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "chrome_reader_mode",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/chrome_reader_mode.svg")
    );
  }
 
  ngOnInit() {
  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
